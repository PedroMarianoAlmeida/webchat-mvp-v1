import firebase from 'firebase/app';

export const verificarSeRegistroExiste = async (
  dbObject,
  coleção: string,
  registro: string
) => {
  var docRef = dbObject.collection(coleção).doc(registro);
  //I discover this structure for async js in https://www.youtube.com/watch?v=ITogH7lJTyE
  try {
    const doc = await docRef.get();
    if (doc.exists) return [true, null];
    else return [false, null];
  } catch (error) {
    return [null, error];
  }
};

export const criaRegistoNaColeção = async (
  dbObject,
  coleção: string,
  chave: string,
  registro: object
) => {
  try {
    const doc = await dbObject.collection(coleção).doc(chave).set(registro);
    return [doc, null];
  } catch (error) {
    return [null, error];
  }
};

export const criaNovoChat = async (data) => {
  const [usuárioBuscadoExiste, erro] = await verificarSeRegistroExiste(
    data.db,
    'users',
    data.email
  );
  if (erro) return { ok: false, message: 'Erro, por favor tente mais tarde' };
  else {
    if (usuárioBuscadoExiste) {
      const emailsOrdenados = [data.userEmail, data.email].sort().join('-');

      const [chatBuscadoExiste, erro] = await verificarSeRegistroExiste(
        data.db,
        'chats',
        emailsOrdenados
      );

      if (erro)
        return { ok: false, message: 'Erro, por favor tente mais tarde' };
      else {
        if (chatBuscadoExiste)
          return {
            ok: false,
            message: 'Você já inicou conversa com essa pessoa',
          };
        else {
          criaRegistoNaColeção(data.db, 'chats', emailsOrdenados, {
            conversation: [],
          });
          data.db
            .collection('users')
            .doc(data.userEmail)
            .update({
              chats: firebase.firestore.FieldValue.arrayUnion(data.email),
            });
          data.db
            .collection('users')
            .doc(data.email)
            .update({
              chats: firebase.firestore.FieldValue.arrayUnion(data.userEmail),
            });
          return { ok: true, message: 'success' };
        }
      }
    } else return { ok: false, message: 'Usuário não cadastrado' };
  }
};
