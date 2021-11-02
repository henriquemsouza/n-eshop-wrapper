import Axios from 'axios';
// import config from '../config.json';


const callAPI = (url: string, params = {}) => {
    return Axios.get(url, params)
    //   .then(response => {
    //     if (response.data) return response.data;
    //     throw config.nintendoApi.errors.notFound;
    //   })
    //   .then(json => {
    //     return Promise.resolve(json);
    //   })
    //   .catch(err => Promise.reject(err));
};

export {
    callAPI
}
  
