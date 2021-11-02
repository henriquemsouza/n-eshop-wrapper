import { baseOptions } from '../domain/baseInterfaces';
import { callAPI } from '../infra/AxiosHandler';
import config from '../config.json';
import { processMultipleResultGameInfo } from './shared/utils';

const filter = async (options: baseOptions) => {
  const {
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

  const url = `${config.Api.baseUrl}STORE-MSF77008-TOPGAMES?size=${limit}`;

  const params = {
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

  const { data } = await callAPI(url, { params });
  return data;
};

const topGames = async (options: baseOptions) => {
  const filterResult = await filter({
    ...options,
  });

  const result = processMultipleResultGameInfo(filterResult, options.limit);
  return result;
};

export {
  topGames,
};
