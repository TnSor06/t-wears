// Holds all saga code related to shop

// Importing effects from saga
import { all, call, put, takeLatest } from "redux-saga/effects";
// takeEvery listens to every action of specific types that we pass to it
// call is the effect inside gen function that invokes a method to yield
// put is replacement of dispatch in sagas

// fetchCollectionAsync action into saga using generator function
import { shopActionTypes } from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

// Sagas run concurrently in a way that it does not pause the execution
// We do not wait for the code to finish and allow non-blocking call
// Also we can cancel the task/saga-action

// COnverting thunk to saga
export function* fetchCollectionsAsync() {
  // does all async work
  // Here we pass code from action to sagas to handle logic and actions just oass data to redux based on type and failure

  // All code from fetchCollectionsStartAsync in action
  try {
    const collectionRef = firestore.collection("collections");
    // Rather then opting for promise we use generator function
    const snapshot = yield collectionRef.get(); // like async/ await
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot); // call(fun_name, parameters...)
    // Yield allows us to defer control back to saga incase it can cancel. So adding yield makes it easy to test or defer control to saga
    // Saga do not dispatch action using dispatch keyword but use put
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  // Pause when sepcific action type comes in
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
  // First arg is to listen for that tpye and next is calling another gen funcction
  // to be executed on yield
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
