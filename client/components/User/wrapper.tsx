import * as React from 'react';
import { Avatar, Container } from '@material-ui/core';
import UserIcon from '@material-ui/icons/AccountCircle';
import withStyles from '@material-ui/styles/withStyles';
import { wrapperStyles } from './styles';

class Wrapper extends React.Component<any, any> {
  public render() {
    const { classes, user } = this.props;
    return (
      <Container className={classes.root}>
        <div className={classes.avatar}>
          <div className={classes.bg} />
          {
            user ?
              <Avatar className={classes.avatarImg} src={user.info.avatar_url} /> :
              <Avatar className={classes.avatarImg}>
                <UserIcon />
              </Avatar>
          }
          <span className={classes.userName}>{user || 'Need to login'}</span>
        </div>
        {this.props.children}
      </Container>
    );
  }
}

export default withStyles(wrapperStyles)(Wrapper);
