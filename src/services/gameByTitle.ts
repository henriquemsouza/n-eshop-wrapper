import { callAPI } from '../infra/AxiosHandler';
import { normalizeTitle, processMultipleResultGameInfo } from './shared/utils';
import config from '../config.json';

const gameByTitle = async (title: string, limit = 10) => {
  if (typeof title !== 'string') {
    throw new Error('invalid game title');
  }

  const apiUrl = config.Api.urlContainer;
  const request = `${apiUrl + encodeURIComponent(normalizeTitle(title))}?suggested_size=5&mode=game&mode=film&mode=tv&mode=live_event`;

  const { data } = await callAPI(request, { });

  const result = processMultipleResultGameInfo(data, limit);
  return result;
};

export {
  gameByTitle,
};
