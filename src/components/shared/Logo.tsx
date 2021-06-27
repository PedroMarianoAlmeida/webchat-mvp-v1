import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: "'VT323', monospace",
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" component="div" className={classes.root}>
      webChat
    </Typography>
  );
};

export default Logo;
