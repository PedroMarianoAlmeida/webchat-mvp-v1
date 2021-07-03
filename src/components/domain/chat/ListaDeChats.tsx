import { useDocumentData } from 'react-firebase-hooks/firestore';

import List from '@material-ui/core/List';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import { db } from './../../../config/firebaseConfig';
import ChatItem from './ChatItem';

const useStylesAux = makeStyles((theme) => ({
  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const Loading = () => {
  const classes = useStylesAux();
  return (
    <>
      {[1, 2, 3].map((n) => (
        <Skeleton
          variant="circle"
          width={40}
          height={40}
          className={classes.chatItem}
          key={n}
        />
      ))}
    </>
  );
};

const ListaDeChats = ({ userEmail }) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

  const classes = useStyles();

  const [listaDeChats, loading, error] = useDocumentData(
    db.collection('users').doc(userEmail)
  );

  return (
    <List className={classes.root}>
      {loading ? (
        <Loading />
      ) : (
        listaDeChats.chats.map((email) => (
          <ChatItem email={email} key={email} userEmail={userEmail} />
        ))
      )}
    </List>
  );
};

export default ListaDeChats;
