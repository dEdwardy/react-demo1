import { takeEvery, put, select, call,fork } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from "./actionCreators";
import { GET_BANNER } from "./modules//banner/actionTypes";
import { getBanners } from "./modules/banner/actionCreator";
import axios from "../http";

function* mySaga() {
  // yield takeEvery(GET_MY_LIST, getList);
  // yield takeEvery(GET_BANNER, getBanner);
  yield takeEvery(GET_BANNER, function*(){
    const banner = yield select(state => state.banner.banners);
    // const {  data } = yield call(axios.get,'http://rap2.taobao.org:38080/app/mock/255560/api/banner');
    
    const {  data } = yield axios.get('http://rap2.taobao.org:38080/app/mock/255560/api/banner');
    console.log(data.data.banner)
    console.log(GET_BANNER,banner)
  });
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
  const action = getBanners();
  console.log(action)
  yield put(action);
}
export default mySaga;