/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Axios from 'axios';
import config from './config.json';


const callAPI = (url: string, params = {}) => {
    return Axios.get(url, params)
      .then(response => {
        if (response.data) return response.data;
        throw config.nintendoApi.errors.notFound;
      })
      .then(json => {
        return Promise.resolve(json);
      })
      .catch(err => Promise.reject(err));
  };
  
  const game = (id: unknown) => {
    const url = config.nintendoApi.url + config.nintendoApi.routes.game;
  
    return callAPI(url);
  };
  
  const search = (query: unknown, options: baseOptions) => {
    return filter({
      search: query,
      ...options,
    });
  };

  export interface baseOptions  {
    sort?: any,
    direction?: any,
    system?: any,
    limit?: any,
    availability?: any,
    offset?: any,
    category?: any,
    price?: any,
    number?: any,
  }

  export interface options  {
    search: any,
    sort?: any,
    direction?: any,
    system?: any,
    limit?: any,
    availability?: any,
    offset?: any,
    category?: any,
    price?: any,
    number?: any,
  }
  
  const filter = (options: options) => {
    const {
      search,
      sort,
      direction,
      system = 'switch',
      limit = 10,
      availability,
      offset,
      category,
      price,
      number,
    } = options;
  
    const url = config.nintendoApi.url + config.nintendoApi.routes.search;
    const params = {
      search,
      system,
      sort,
      direction,
      limit,
      offset,
      availability,
      category,
      price,
      number,
    };
  
    return callAPI(url, {params});
  };
  
 export {
    game,
    search,
    filter,
  };
  
