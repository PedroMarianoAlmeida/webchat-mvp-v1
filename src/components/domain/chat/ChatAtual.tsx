import { useContext } from 'react';
import Paper from '@material-ui/core/Paper';

import { ChatAtualContext } from './../../../contexts/ChatAtualProvider';

const ChatAtual = () => {
  const { chatNaTela } = useContext(ChatAtualContext);
  return <Paper elevation={3}>{chatNaTela}</Paper>;
};

export default ChatAtual;
