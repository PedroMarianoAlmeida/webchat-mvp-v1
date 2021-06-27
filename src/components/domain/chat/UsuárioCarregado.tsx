import { useEffect } from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';

import { db } from './../../../config/firebaseConfig';

const UsuárioCarregado = ({ user }) => {
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

  return <h1>Usuário Carregado</h1>;
};

export default UsuárioCarregado;
