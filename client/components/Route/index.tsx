import * as React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { TopicsList } from '../Topics';
import TopicDetail from '../TopicDetail';
import UserLogin from '../User/user-login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import { IUser } from '../../DTOs/IUser';
import TopicCreate from '../TopicCreate';

const PrivateRoute = ({ isLogin, component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={
        props => (
          isLogin ?
            <Component {...props} /> :
            <Redirect
              to={{
                pathname: '/user/login',
                search: `?from=${rest.path}`,
              }}
            />
        )
      }
    />
  );
};
const getLoginState = createSelector(
  (state: any) => state.user.user.isLogin,
  (isLogin: boolean) => isLogin,
);
const mapStateToProps = (state: any) => {
  return {
    isLogin: getLoginState(state),
  };
};
const InjectedPrivateRoute: any = compose(
  withRouter,
  connect(mapStateToProps),
)(PrivateRoute);
export default () => <>
  <Route path="/" key="default" exact render={() => <Redirect to="/topic/create" />} />
  <Route path="/list" key="list" component={TopicsList} />
  <Route path="/detail/:id" key="detail" component={TopicDetail} />
  <Route path="/user/login" key="login" component={UserLogin} />
  <Route path="/topic/create" key="create" component={TopicCreate} />
  {/* <InjectedPrivateRoute path="/topic/create" component={TopicsList} exact key="topic-create" /> */}
</>;
