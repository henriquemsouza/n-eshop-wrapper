import Axios from 'axios';

const callAPI = (url: string, params = {}) => Axios.get(url, params);

export {
  callAPI,
};
