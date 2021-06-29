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
