import axios from 'axios';

axios.defaults.baseURL = 'https://www.fastmock.site/mock/d351513ee20dc1a6624cc20e8a74d918/react01'
axios.create({
    timeout: 5000
  });

  export default axios;