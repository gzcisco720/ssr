import { createStyles } from '@material-ui/styles';

export default createStyles({
  '@global': {
    body: {
      backgroundColor: '#e1e1e1',
    },
  },
  content: {
    marginTop: '64px',
    height: 'calc(100vh - 64px)',
    position: 'relative',
  },
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
});
