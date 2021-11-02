/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from './config.json';
import { baseOptions, completeOptions } from './domain/baseInterfaces';
import { callAPI } from './infra/AxiosHandler';


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


const filter = (options: completeOptions) => {
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
  
