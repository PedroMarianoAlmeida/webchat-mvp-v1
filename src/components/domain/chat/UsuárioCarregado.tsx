import { useEffect } from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';

import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';

import { db } from './../../../config/firebaseConfig';

import AppBarUsuárioCarregado from './AppBarUsuárioCarregado';
import NovoChat from './NovoChat';
import ListaDeChats from './ListaDeChats';
import ChatAtual from './ChatAtual';

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

  useEffect(() => {
    if (!loading && !coleçãoUsuário?.exists) {
      db.collection('users')
        .doc(user.email)
        .set({
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
        .then(() => {
          //console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    }
  }, [coleçãoUsuário, loading]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarUsuárioCarregado drawerWidth={drawerWidth} />
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
        <NovoChat />

        <Divider />
        <ListaDeChats />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ChatAtual />
      </main>
    </div>
  );
};

export default UsuárioCarregado;
