import { useContext } from 'react';
import Paper from '@material-ui/core/Paper';

import { ChatAtualContext } from './../../../contexts/ChatAtualProvider';

const ChatAtual = () => {
  const value = useContext(ChatAtualContext);
  console.log(value);

  return <Paper elevation={3}>Meu chat atual</Paper>;
};

export default ChatAtual;
