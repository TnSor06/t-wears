import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAjdJ1P5FCAkhpb39f_a6ydX3Ycs7-7YdA",
  authDomain: "t-wears.firebaseapp.com",
  databaseURL: "https://t-wears.firebaseio.com",
  projectId: "t-wears",
  storageBucket: "t-wears.appspot.com",
  messagingSenderId: "125309830307",
  appId: "1:125309830307:web:c0bddd59a78ff22548eb16",
  measurementId: "G-M3NG31QG4C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

// Creates a user data from auth to store in db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // Query in firestore

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionSnapshotToMap = (collections) => {
  // Map Gives Array
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });
  // Converting Array to Object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const AddCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // In Firebase-> Collection(user)->Document(RandomID)->Fields+AdditonalCollection
  // collection Ref creates a new Collection in firebase
  const collectionRef = firestore.collection(collectionKey);
  // Batch write: Group all calls in one request such that failure is
  // retracted back with any issue in case single request fail
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // newDocRef is new UID AutoGeneratted
    batch.set(newDocRef, obj);
  });
  await batch.commit();
};

export default firebase;
