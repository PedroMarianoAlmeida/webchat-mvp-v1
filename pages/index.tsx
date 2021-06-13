import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Skeleton from '@material-ui/lab/Skeleton';

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth } from './../src/config/firebaseConfig';

export default function Home() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  console.log(user);
  return (
    <>
      webChat
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          createUserWithEmailAndPassword('teste@teste.com', 'password')
        }
      >
        Primary
      </Button>
      <AccessAlarmIcon />
      <Skeleton variant="circle" width={40} height={40} />
    </>
  );
}
