import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { auth, googleAuthProvider } from './../../../config/firebaseConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '64px',
  },

  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontFamily: "'VT323', monospace",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  saudação: {
    flexGrow: 1,
    display: 'inline',
    marginRight: theme.spacing(1),
  },
}));

export default function MinhaAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          <Typography variant="h4" component="div" className={classes.logo}>
            webChat
          </Typography>
          <Box>
            <Typography variant="h6" className={classes.saudação}>
              Bem vindo,
            </Typography>
            <Button
              color="inherit"
              onClick={() => auth.signInWithPopup(googleAuthProvider)}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
