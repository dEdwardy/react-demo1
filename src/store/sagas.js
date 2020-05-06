import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from "./actionCreators";
import axios from "../http";

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  // axios.get('/api/list').then(res => {
  //     const data = res.data.data;
  //     const action = getListAction(data)
  //     put(action)
  //   })
  const res = yield axios.get("/api/list");
  const data = res.data.data;
  console.log(data)
  const action = getListAction(data);
  yield put(action);
}
export default mySaga;
