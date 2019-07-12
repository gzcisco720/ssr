import * as React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';

const Navbar: React.SFC = (props: any) => {
  const { classes, history } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => { history.push('/list'); }}>
            <HomeIcon />
          </IconButton>
          <Typography color="inherit" variant="h6" className={classes.mainTitle}>
            Cnode Proxy
          </Typography>
          <Button color="inherit" onClick={() => { history.push('/topic/create'); }}>
            Create Topic
          </Button>
          <Button color="inherit" onClick={() => { history.push('/user/login'); }}> Login </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(withRouter(Navbar));
