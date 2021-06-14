import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
    backgroundImage: 'url(/chat.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  text: {
    color: 'white',
    marginTop: theme.spacing(1),
  },

  button: {
    width: '50vw',
    maxWidth: '250px',
    marginTop: theme.spacing(1),
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="main">
      <Typography align="center" variant="h6" className={classes.text}>
        Entre e converse com seus amigos
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Faça login
      </Button>
    </Container>
  );
};

export default Body;
