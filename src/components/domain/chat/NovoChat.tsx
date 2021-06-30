import { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

import { db } from './../../../config/firebaseConfig';
import {
  verificarSeRegistroExiste,
  criaRegistoNaColeção,
} from './../../../functions/firestoreHandler';

const useStyles = makeStyles({
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: '24px',
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function NovoChat({ userEmail }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState('');
  const handleChange = (e) => setEmail(e.target.value);

  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const [usuárioBuscadoExiste, erro] = await verificarSeRegistroExiste(
      db,
      'users',
      email
    );

    if (erro) setError('Erro, por favor tente mais tarde');
    else {
      if (usuárioBuscadoExiste) {
        const emailsOrdenados = [userEmail, email].sort().join('-');

        const [chatBuscadoExiste, erro] = await verificarSeRegistroExiste(
          db,
          'chats',
          emailsOrdenados
        );
        if (erro) setError('Erro, por favor tente mais tarde');
        else {
          if (chatBuscadoExiste)
            setError('Você já inicou conversa com essa pessoa');
          else {
            criaRegistoNaColeção(db, 'chats', emailsOrdenados, {
              conversation: [],
            });
            //A FAZER: Passar esse chat para o chat atual
            setOpen(false);
          }
        }
      } else setError('Usuário não cadastrado');
    }
  };

  const classes = useStyles();

  return (
    <>
      <Tooltip title="New Chat">
        <IconButton aria-label="add chat" onClick={handleOpen}>
          <AddCircleIcon />
        </IconButton>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper className={classes.modalContent}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            align="center"
          >
            New chat with
          </Typography>

          <TextField
            required
            label="E-mail"
            placeholder="my-friend@gmail.com"
            variant="filled"
            margin="normal"
            value={email}
            onChange={handleChange}
          />

          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Find
          </Button>

          <Typography align="center">{error}</Typography>
        </Paper>
      </Modal>
    </>
  );
}
