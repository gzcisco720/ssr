import * as React from 'react';
import { Avatar, WithStyles } from '@material-ui/core';
import { IReply } from '../../DTOs/IReply';
import { replyStyles } from './styles';
import dateFormat = require('dateformat');
import marked = require('marked');
import { withStyles } from '@material-ui/styles';

interface IReplyItem extends WithStyles<typeof replyStyles> {
  reply: IReply;
}

class Reply extends React.Component<IReplyItem, any> {
  public replyContent: any;
  constructor(props: IReplyItem) {
    super(props);
    this.replyContent = React.createRef();
  }
  public updateReplyContent = () => {
    const { reply } = this.props;
    if (reply.content) {
      this.replyContent.current.innerHTML = marked(reply.content);
    }
  }
  public componentDidUpdate = () => {
    this.updateReplyContent();
  }
  public componentDidMount = () => {
    this.updateReplyContent();
  }
  public render = () => {
    const { classes, reply } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.left}>
          <Avatar src={reply.author.avatar_url} />
        </div>
        <div className={classes.right}>
          <span>{`${reply.author.loginname} ${dateFormat(reply.create_at, 'yy-mm-dd')}`}</span>
          <p ref={this.replyContent} />
        </div>
      </div>
    );
  }
}

export default withStyles(replyStyles)(Reply);
