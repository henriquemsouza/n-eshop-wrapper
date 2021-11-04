import { baseOptions } from '../domain/baseInterfaces';
import { callAPI } from '../infra/AxiosHandler';
import config from '../config.json';
import { processMultipleResultGameInfo } from './shared/utils';

const filter = async (options: baseOptions) => {
  const {
    limit = 10,
    language = 'pt-br',
  } = options;

  const baseUrl = `${config.Api.urlBase}container/BR/${language}/19/`;

  const url = `${baseUrl}STORE-MSF77008-TOPGAMES?size=${limit}`;

  const params = {
    limit,
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
