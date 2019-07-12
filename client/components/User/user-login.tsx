import * as React from 'react';
import Wrapper from './wrapper';
import { Button, TextField, withStyles } from '@material-ui/core';
import { userLoginStyles } from './styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IUser } from '../../DTOs/IUser';
import { login } from '../../store/actions';
import * as queryString from 'query-string';
import { Redirect } from 'react-router-dom';

class UserLgoin extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      accesstoken: '271ca68a-3a36-41c8-8682-d5419b6155de',
      helpText: '',
    };
  }
  public getFrom = () => {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    return query.from || '/list';
  }
  public handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      accesstoken: event.target.value.trim(),
    });
  }
  public handleLogin = () => {
    if (!this.state.accesstoken) {
      return this.setState({
        helpText: 'Required',
      });
    }
    this.setState({
      helpText: '',
    });
    return this.props.login(this.state.accesstoken);
  }
  public render() {
    const { classes, userState } = this.props;
    const from = this.getFrom();
    const { user } = userState;
    if (user.isLogin) {
      return <Redirect to={(from as string)} />;
    }
    return (
      <Wrapper>
        <div className={classes.root}>
          <TextField
            label="Please Enter Cnode AccessToken"
            placeholder="Please Enter Cnode AccessToken"
            required
            helperText={this.state.helpText}
            value={this.state.accesstoken}
            onChange={this.handleInput}
            className={classes.input}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleLogin}
            className={classes.loginButton}
          >
            Login
          </Button>
        </div>
      </Wrapper>
    );
  }
}

const getLoginUser = createSelector(
  (state: any) => state.user,
  (userState: IUser) => userState,
);

const mapStateToProps = (state: any) => {
  return {
    userState: getLoginUser(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (token: string) => dispatch(login(token)),
  };
};

export default compose(
  withStyles(userLoginStyles),
  connect(mapStateToProps, mapDispatchToProps),
)(UserLgoin);
