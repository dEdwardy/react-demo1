import axios from 'axios';

axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/255560'
axios.create({
  timeout: 5000
});

export default axios;