import { createStyles } from '@material-ui/styles';
import * as avatarBg from '@assets/bg.jpg';

export const wrapperStyles = createStyles({
  root: {
    marginTop: '6em',
  },
  avatar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: `url(${avatarBg})`,
    backgroundSize: 'cover',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  avatarImg: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  userName: {
    color: '#fff',
    zIndex: 1,
  },
  bg: {
    backgroundImage: `url(${avatarBg})`,
    backgroundSize: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    '&::after': {
      content: '\' \'',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,.6)',
    },
  },
});
const inputWidth = 300;
export const userLoginStyles = createStyles({
  root: {
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: inputWidth,
    marginBottom: 20,
  },
  loginButton: {
    width: inputWidth,
  },
});
