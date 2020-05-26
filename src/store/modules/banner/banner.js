import { takeEvery, put } from "redux-saga/effects";
import { GET_BANNER } from "./actionTypes";
import getBanners from "./actionCreators";
import axios from "../http";

export default function* bannerSaga() {
  yield takeEvery(GET_BANNER, getBannerList);
}

function* getBannerList() {
  const res = yield axios.get("/api/banner");
  console.log(res.data)
  const data = res.data.data;
  const action = getBanners();
  console.log(action)
  yield put(action);
}