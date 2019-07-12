import * as ReactDomServer from 'react-dom/server';
import { Request, Response, NextFunction } from 'express';
import { StaticRouterContext } from 'react-router';
import getServerEntry from '../../client/server-entry';
import { render } from 'ejs';
import Helmet from 'react-helmet';
import serverStore from '../../client/store';
import { ServerStyleSheets } from '@material-ui/styles';
import { frontloadServerRender } from 'react-frontload';

export const renderTemplate = async (
  template: string,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const store = serverStore;
  const routerContext: StaticRouterContext = {};
  const sheets = new ServerStyleSheets();
  let html = '';
  const app = getServerEntry(req.url, routerContext, store, sheets);
  const content = await frontloadServerRender(() => (
    ReactDomServer.renderToString(app)
  ));
  if (routerContext.url) {
    res.status(302).setHeader('Location', routerContext.url);
    res.end();
    return;
  }
  const helmet = Helmet.rewind();
  const preloadedState = JSON.stringify(store.getState());
  html = render(template, {
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    css: sheets.toString(),
    link: helmet.link.toString(),
    appString: content,
    preloadedState,
  });
  res.send(html);
  return;
};
