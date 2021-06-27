import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { auth } from './../../../config/firebaseConfig';

const AppBarUsuárioCarregado = ({ drawerWidth }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    })
  );

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => auth.signOut()}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarUsuárioCarregado;
