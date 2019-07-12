import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { appReducer } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';

const preloadedState = (window as any).__PRELOADED_STATE__;
delete (window as any).__PRELOADED_STATE__;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  appReducer,
  preloadedState,
  compose(
    applyMiddleware(
      sagaMiddleware,
    ),
    // tslint:disable-next-line: max-line-length
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f,
  ),
);

sagaMiddleware.run(rootSaga);

export const App = () => {
  React.useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });
  return (
    <Frontload>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </Frontload>
  );
};

ReactDOM.hydrate(<App />, document.querySelector('#app-root'));
