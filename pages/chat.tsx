import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../src/config/firebaseConfig';

const Chat = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

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
    </>
  );
};

export default Chat;
