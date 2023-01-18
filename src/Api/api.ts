import axios from 'axios';

const apiCreate = axios.create({
  baseURL: 'http://kdt.frontend.3rd.programmers.co.kr:5001',
});

export default apiCreate;
