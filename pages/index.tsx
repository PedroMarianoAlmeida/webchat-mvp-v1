import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Skeleton from '@material-ui/lab/Skeleton';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from './../src/config/firebaseConfig';

export default function Home() {
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  console.log(user);

  useEffect(() => {
    if (!loading && user) {
      router.push('/chat');
    }
  }, [loading, user]);

  return (
    <>
      webChat
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          signInWithEmailAndPassword('teste@teste.com', 'password')
        }
      >
        Primary
      </Button>
      <AccessAlarmIcon />
      <Skeleton variant="circle" width={40} height={40} />
    </>
  );
}
