import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

  return <>{user && <UsuárioCarregado user={user} />}</>;
};

export default Chat;
