import * as React from 'react';
import { Container, Snackbar, TextField, withStyles, Radio, Fab } from '@material-ui/core';
import SimpleMDE from 'react-simplemde-editor';
import { compose } from 'redux';
import styles from './styles';
import { tabs } from '../../config/variables';
import IconReply from '@material-ui/icons/Reply';

class TopicCreate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tab: 'dev',
      open: false,
      message: '',
    };
  }
  public handleClose = () => {
    this.setState({
      open: false,
    });
  }
  public render() {
    const { classes } = this.props;
    const { message, open } = this.state;
    return (
      <Container className={classes.root}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          message={message}
          open={open}
          onClose={this.handleClose}
        />
        <div className={classes.content}>
          <TextField
            className={classes.title}
            label="Title"
            fullWidth
          />
          <SimpleMDE
            id="samplemdeCreateTopic"
            options={{
              spellChecker: false,
              placeholder: 'Please Enter Here',
            }}
          />
          <div>
            {
              Object.keys(tabs).map((tab) => {
                if (tab !== 'all' && tab !== 'good') {
                  return (
                    <span className={classes.selectItem} key={tab}>
                      <Radio
                        value={tab}
                        checked={tab === this.state.tab}
                      />
                      {tabs[tab]}
                    </span>
                  );
                }
                return null;
              })
            }
          </div>
          <Fab color="primary" className={classes.replyButton}>
            <IconReply />
          </Fab>
        </div>
      </Container>
    );
  }
}

export default compose(withStyles(styles))(TopicCreate);
