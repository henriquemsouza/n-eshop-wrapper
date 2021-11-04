import { callAPI } from '../infra/AxiosHandler';
import { processMultipleResultGameInfo } from './shared/utils';
import config from '../config.json';

const gameById = async (id: string, limit = 10) => {
  if (typeof id !== 'string') {
    throw new Error('invalid game id');
  }

  const apiUrl = config.Api.baseUrl;
  const request = `${apiUrl}${id}`;

  const { data } = await callAPI(request, { });

  const result = processMultipleResultGameInfo(data, limit);
  return result;
};

export {
  gameById,
};
