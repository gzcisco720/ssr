import * as React from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import Route from './Route';
import styles from './styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';

class Main extends React.Component<any, any> {
  public render() {
    const { classes } = this.props;
    return (
      <>
        <Navbar />
        <div className={classes.content}>
          <Route />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Main));
