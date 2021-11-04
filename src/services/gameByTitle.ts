import { callAPI } from '../infra/AxiosHandler';
import { normalizeTitle, processMultipleResultGameInfo } from './shared/utils';
import config from '../config.json';
import { baseOptions } from '../domain/baseInterfaces';

const gameByTitle = async (title: string, options: baseOptions) => {
  if (typeof title !== 'string') {
    throw new Error('invalid game title');
  }

  const { limit = 10, language = 'en' } = options;

  const apiUrl = `${config.Api.urlBase}tumbler/BR/${language}/19/`;
  const request = `${apiUrl + encodeURIComponent(normalizeTitle(title))}?suggested_size=5&mode=game&mode=film&mode=tv&mode=live_event`;

  const { data } = await callAPI(request, { });

  const result = processMultipleResultGameInfo(data, limit);
  return result;
};

export {
  gameByTitle,
};
