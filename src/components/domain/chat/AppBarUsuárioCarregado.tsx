import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

import { auth } from './../../../config/firebaseConfig';
import Logo from '../../shared/Logo';

const AppBarUsuárioCarregado = ({ drawerWidth, displayName, photoURL }) => {
  const useStyles = makeStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Logo />
        <Box display="flex">
          <Tooltip title={displayName}>
            <Avatar alt={displayName} src={photoURL} />
          </Tooltip>
          <Tooltip title="Sign Out">
            <IconButton
              color="secondary"
              aria-label="logout"
              component="span"
              onClick={() => auth.signOut()}
            >
              <CancelIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarUsuárioCarregado;
