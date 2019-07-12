import { createStyles } from '@material-ui/styles';

export const topicPrimaryStyle = createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#555',
    fontSize: '18px',
  },
  tab: {
    color: 'white',
    backgroundColor: '#75B404',
    textAlign: 'center',
    display: 'inline-block',
    padding: '0 6px',
    borderRadius: 3,
    marginRight: 10,
    fontSize: '12px',
    textTransform: 'capitalize',
  },
  top: {
    backgroundColor: '#3f51b5',
  },
});

export const topicSecondaryStyle = createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 3,
  },
  count: {
    textAlign: 'center',
    marginRight: 20,
  },
  userName: {
    marginRight: 20,
    color: '#9e9e9e',
  },
  replyCount: {
    marginRight: 15,
  },
});

export const topicListStyle = createStyles({
  root: {
    padding: '1em 2em 0 2em',
    backgroundColor: 'white',
  },
});
