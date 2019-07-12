import * as React from 'react';
import { StaticRouterContext, StaticRouter } from 'react-router';
import Main from './components/Main';
import { Frontload } from 'react-frontload';
import { Provider } from 'react-redux';

export default (
  url: string,
  routerContext: StaticRouterContext,
  store: any,
  sheets: any,
) => sheets.collect(
  <Frontload>
    <Provider store={store}>
      <StaticRouter context={routerContext} location={url}>
        <Main />
      </StaticRouter>
    </Provider>
  </Frontload>,
);
