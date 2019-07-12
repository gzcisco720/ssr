import { createStyles } from '@material-ui/styles';

export const detailStyles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  progress: {
    margin: '5em auto',
  },
  content: {
    padding: '1em',
    marginTop: '3em',
  },
  article: {
    '& img': {
      maxWidth: '100%',
    },
    '& li': {
      lineHeight: '2em',
    },
    '& blockquote': {
      padding: '0 0 0 15px',
      margin: ' 0 0 20px',
      borderLeft: '5px solid #888',
    },
    '& p': {
      fontSize: '15px',
      lineHeight: '1.7em',
      overflow: 'auto',
    },
    '& h2': {
      fontSize: '26px',
      margin: '30px 0 15px',
      borderBottom: '1px solid #888',
      lineHeight: '40px',
    },
    '& a': {
      color: '#08c',
    },
    '& pre': {
      padding: '9.5px',
      margin: '0 0 10px',
      fontSize: '13px',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
  },
  reply: {
    marginTop: '1em',
  },
});

export const replyStyles = createStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 0,
    borderBottom: '1px solid #dfdfdf',
  },
  left: {
    marginRight: 20,
  },
  right: {
    '& img': {
      maxWidth: '100%',
      display: 'block',
    },
  },
});
