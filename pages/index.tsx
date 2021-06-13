import Button from '@material-ui/core/Button';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Home() {
  return (
    <>
      webChat
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <AccessAlarmIcon />
      <Skeleton variant="circle" width={40} height={40} />
    </>
  );
}
