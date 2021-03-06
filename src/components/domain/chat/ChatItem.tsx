import { useContext } from 'react';

import { useDocumentData } from 'react-firebase-hooks/firestore';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { db } from './../../../config/firebaseConfig';
import { ChatAtualContext } from './../../../contexts/ChatAtualProvider';

const useStyles = makeStyles((theme) => ({
  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const ChatItemCarregado = ({ dadosOutroUsuárioChat, userEmail, email }) => {
  const classes = useStyles();
  const { setChatNaTela } = useContext(ChatAtualContext);

  const handleClick = () => {
    const emailsOrdenados = [userEmail, email].sort().join('-');
    setChatNaTela(emailsOrdenados);
  };

  return (
    <Tooltip
      title={dadosOutroUsuárioChat.displayName}
      className={classes.chatItem}
    >
      <Avatar
        alt={dadosOutroUsuárioChat.displayName}
        src={dadosOutroUsuárioChat.photoURL}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

const ChatItem = ({ email, userEmail }) => {
  const [dadosOutroUsuárioChat, loading, error] = useDocumentData(
    db.collection('users').doc(email)
  );

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Avatar className={classes.chatItem}>...</Avatar>
      ) : (
        <ChatItemCarregado
          email={email}
          dadosOutroUsuárioChat={dadosOutroUsuárioChat}
          userEmail={userEmail}
        />
      )}
    </>
  );
};

export default ChatItem;
