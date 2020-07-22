// Issues and calls all sagas
import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export function* rootSaga() {
  // All takes array of sagas
  // so dont need to apply run function for each sagas
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
