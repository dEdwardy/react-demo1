import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from "./actionCreators";
import { GET_BANNER } from "./modules//banner/actionTypes";
import { getBanners } from "./modules/banner/actionCreator";
import axios from "../http";

function* mySaga() {
  // yield takeEvery(GET_MY_LIST, getList);
  yield takeEvery(GET_BANNER, getBanner);
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



function* getBanner() {
  const res = yield axios.get("/api/banner");
  console.log(res.data)
  const data = res.data.data;
  const action = getBanners();
  console.log(action)
  yield put(action);
}
export default mySaga;