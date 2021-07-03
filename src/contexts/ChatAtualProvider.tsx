import { createContext, useState } from 'react';

export const ChatAtualContext = createContext(undefined);

const ChatAtualProvider = ({ children }) => {
  const [chatNaTela, setChatNaTela] = useState('');

  return (
    <ChatAtualContext.Provider value={{ chatNaTela, setChatNaTela }}>
      {children}
    </ChatAtualContext.Provider>
  );
};

export default ChatAtualProvider;
