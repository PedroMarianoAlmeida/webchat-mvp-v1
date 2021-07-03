import { createContext } from 'react';

export const ChatAtualContext = createContext(undefined);

const ChatAtualProvider = ({ children }) => {
  return (
    <ChatAtualContext.Provider value={'meu chat atual'}>
      {children}
    </ChatAtualContext.Provider>
  );
};

export default ChatAtualProvider;
