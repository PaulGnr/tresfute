export const getDataFromDoc = (firestore, collection, doc) => {
  const data = firestore.collection(collection).doc(doc).get()
                  .then(doc => {
                    return doc.data();
                  })
                  .catch(err => {
                    console.log(err)
                  })
  return data
}

export const getSpecificDataFromDoc = (firestore, collection, doc, specificData) => {
  const data = firestore.collection(collection).doc(doc).get()
                  .then(doc => {
                    return doc.data()[specificData];
                  })
                  .catch(err => {
                    console.log(err)
                  })
  return data
}