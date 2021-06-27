import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../src/config/firebaseConfig';
import UsuárioCarregado from '../src/components/domain/chat/UsuárioCarregado';

const Chat = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [loading, user]);

  return (
    <>
      <h1>Chat</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => auth.signOut()}
      >
        Logout
      </Button>

      {user && <UsuárioCarregado user={user} />}
    </>
  );
};

export default Chat;
