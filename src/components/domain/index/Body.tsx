import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mobile: {
    height: 'calc(100vh - 64px)',
  },
}));

const Body = () => {
  const classes = useStyles();
  const éTelaPequena = useMediaQuery('(max-width:790px)');

  console.log(éTelaPequena);

  return (
    <Container
      className={`${classes.root} ${éTelaPequena ? classes.mobile : ''}`}
      component="main"
    >
      <Typography align="center" variant="h6">
        Entre e converse com seus amigos
      </Typography>

      <video width="100%" height="auto" autoPlay loop muted>
        <source src="indePageVideo.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Body;
