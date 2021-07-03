import { useEffect } from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';

import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

import { db } from './../../../config/firebaseConfig';
import { criaRegistoNaColeção } from './../../../functions/firestoreHandler';

import AppBarUsuárioCarregado from './AppBarUsuárioCarregado';
import NovoChat from './NovoChat';
import ListaDeChats from './ListaDeChats';
import ChatAtual from './ChatAtual';
import ChatAtualProvider from '../../../contexts/ChatAtualProvider';

const drawerWidth = 50;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

const UsuárioCarregado = ({ user }) => {
  const classes = useStyles();
  const [coleçãoUsuário, loading, error] = useDocument(
    db.doc(`users/${user.email}`)
  );

  const criaUsuárioNoBd = async (email, displayName, photoURL) => {
    const record = { displayName, photoURL };
    const [doc, error] = await criaRegistoNaColeção(db, 'users', email, record);
    if (error) console.log('Error writing document: ', error);
  };

  useEffect(() => {
    if (!loading && !coleçãoUsuário?.exists)
      criaUsuárioNoBd(user.email, user.displayName, user.photoURL);
  }, [coleçãoUsuário, loading]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarUsuárioCarregado
        drawerWidth={drawerWidth}
        displayName={user.displayName}
        photoURL={user.photoURL}
      />
      <ChatAtualProvider>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <NovoChat userEmail={user.email} />

          <Divider />
          <ListaDeChats userEmail={user.email} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ChatAtual />
        </main>
      </ChatAtualProvider>
    </div>
  );
};

export default UsuárioCarregado;
