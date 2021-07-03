import { useDocumentData } from 'react-firebase-hooks/firestore';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { db } from './../../../config/firebaseConfig';

const useStyles = makeStyles((theme) => ({
  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const ChatItemCarregado = ({ dadosOutroUsuárioChat }) => {
  const classes = useStyles();

  return (
    <Tooltip
      title={dadosOutroUsuárioChat.displayName}
      className={classes.chatItem}
    >
      <Avatar
        alt={dadosOutroUsuárioChat.displayName}
        src={dadosOutroUsuárioChat.photoURL}
      />
    </Tooltip>
  );
};

const ChatItem = ({ email }) => {
  const [dadosOutroUsuárioChat, loading, error] = useDocumentData(
    db.collection('users').doc(email)
  );

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Avatar className={classes.chatItem}>...</Avatar>
      ) : (
        <ChatItemCarregado dadosOutroUsuárioChat={dadosOutroUsuárioChat} />
      )}
    </>
  );
};

export default ChatItem;
