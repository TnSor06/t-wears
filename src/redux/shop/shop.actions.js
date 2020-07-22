import { shopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (error) => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error,
  };
};

// Actual function to pass the component
// thunk works on here as we have pass to the middleware
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    // Call dispatchStart method
    dispatch(fetchCollectionsStart());

    // All code from ComponentDidMount
    const collectionRef = firestore.collection("collections");
    // Promise Pattern
    // cannot work on Observer pattern
    collectionRef
      .get()
      .then(async (snapshot) => {
        // No longer live updates here
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error));
      });
  };
};
