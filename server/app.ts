import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import * as proxy from 'http-proxy-middleware';
import { renderTemplate } from './services/server-render.service';
import { readFileSync } from 'fs';
import helpers from './utils/ssr-helpers';
import * as session from 'express-session';
import loginService from './routes/login.routes';
import proxyService from './services/proxy.service';

const bootstrap = async () => {
  const isDev = process.env.NODE_ENV === 'development';
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(session({
    cookie: { maxAge: 60000 },
    name: 'tid',
    resave: false,
    saveUninitialized: false,
    secret: 'ZhengGong',
  }));

  let template = '';

  if (isDev) {
    try {
      template = await helpers.getTemplate();
    } catch (e) {
      console.log(e); //tslint:disable-line
    }
    app.use('/public', proxy({ target: 'http://localhost:8888' }));
  } else {
    template = readFileSync(join(__dirname, '../dist/server.ejs'), 'utf8');
    app.use('/public', express.static(join(__dirname, '../dist')));
  }

  app.use('/api/user', loginService);
  app.use('/api', proxyService);

  app.get('*', async (req, res, next) => {
    await renderTemplate(template, req, res, next);
  });

  app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(error);// tslint:disable-line
    res.status(500).send(error);
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000'); // tslint:disable-line
  });
};

bootstrap();
