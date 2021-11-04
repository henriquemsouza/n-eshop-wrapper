import { callAPI } from '../infra/AxiosHandler';
import { processMultipleResultGameInfo } from './shared/utils';
import config from '../config.json';
import { baseOptions } from '../domain/baseInterfaces';

const gameById = async (id: string, options: baseOptions) => {
  if (typeof id !== 'string') {
    throw new Error('invalid game id');
  }

  const { limit = 10, language = 'pt-br' } = options;

  const apiUrl = config.Api.urlBase;
  const request = `${apiUrl}container/BR/${language}/19/${id}`;

  const { data } = await callAPI(request, { });

  const result = processMultipleResultGameInfo(data, limit);
  return result;
};

export {
  gameById,
};
