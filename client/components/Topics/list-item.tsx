import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { ITopic } from '../../DTOs/ITopic';
import { withStyles, WithStyles } from '@material-ui/styles';
import cx from 'classnames';
import { tabs } from '../../config/variables';
import { topicPrimaryStyle, topicSecondaryStyle } from './styles';
import * as dateFormat from 'dateformat';

interface ITopicListItemPrimary extends WithStyles<typeof topicPrimaryStyle> {
  topic: ITopic;
}

interface ITopicListItemSecondary extends WithStyles<typeof topicSecondaryStyle> {
  topic: ITopic;
}

interface ITopicListItem {
  topic: ITopic;
  onClick: any;
}

const Primary: React.SFC<ITopicListItemPrimary> = ({ classes, topic }) => {
  const classNames = cx({
    [classes.tab]: true,
    [classes.top]: topic.top,
  });
  return (
    <span className={classes.root}>
      <span className={classNames}>{topic.top ? 'Top' : tabs[topic.tab]}</span>
      <span className={classes.title}>{topic.title}</span>
    </span>
  );
};
const StyledPrimary = withStyles(topicPrimaryStyle)(Primary);

const Secondary: React.SFC<ITopicListItemSecondary> = ({ classes, topic }) => (
  <span className={classes.root}>
    <span className={classes.userName}>{topic.author.loginname}</span>
    <span className={classes.count}>
      <span className={classes.replyCount}>Reply: {topic.reply_count}</span>
      <span>Visiting: {topic.visit_count}</span>
    </span>
    <span>Date: {dateFormat(topic.create_at, 'yy-mm-dd')}</span>
  </span>
);
const StyledSecondary = withStyles(topicSecondaryStyle)(Secondary);

const TopicListItem: React.SFC<ITopicListItem> = (props) => {
  const { topic, onClick } = props;
  return (
    <ListItem button alignItems="flex-start" onClick={onClick(topic)}>
      <ListItemAvatar>
        <Avatar alt={topic.author.loginname} src={topic.author.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        primary={<StyledPrimary topic={topic} />}
        secondary={<StyledSecondary topic={topic} />}
      />
    </ListItem>
  );
};

export default TopicListItem;
