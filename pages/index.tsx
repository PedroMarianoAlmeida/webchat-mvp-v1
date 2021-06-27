import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../src/config/firebaseConfig';

import MinhaAppBar from '../src/components/domain/index/MinhaAppBar';
import Body from '../src/components/domain/index/Body';

export default function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  //console.log(user);

  useEffect(() => {
    if (!loading && user) {
      router.push('/chat');
    }
  }, [loading, user]);

  return (
    <>
      <MinhaAppBar />
      <Body />
    </>
  );
}
