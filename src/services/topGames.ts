import { baseOptions } from '../domain/baseInterfaces';
import { callAPI } from '../infra/AxiosHandler';
import config from '../config.json';
import { baseInfo } from '../domain/topGamesInterfaces';

const validateId = (gameId: string) => {
  const idValidation = /UP\d{4}-\w{9}_00-\w{16}/g;
  return idValidation.test(gameId.toString());
};

function calculatePrice(displayPrice: any): any {
  const result = displayPrice !== 'Free' ? parseFloat(displayPrice.slice(1)) : '0.00';
  return result;
}

const parseBasicGameInfo = (game: any) => {
  const pricing = game.default_sku;

  const normalPrice = pricing.display_price !== 'Free' ? pricing.display_price : '0.00';
  const onSale = pricing.rewards.length > 0 && pricing.rewards[0].reward_source_type_id === 2;

  const info: baseInfo = {
    _id: game.id,
    title: game.name,
    url: `https://store.playstation.com/#!/en-us/games/cid=${game.id}`,
    price: normalPrice,
    strikePrice: null,
    onSale,
    discount: null,
    psPlusPrice: null,
    lastUpdated: new Date(new Date().toDateString()).getTime(),
    image: `https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/${game.id}/image?w=225&h=225`,
    details: { platforms: game.playable_platform },
  };

  if (onSale) {
    const saleInfo = pricing.rewards[0];

    if (!saleInfo.isPlus) {
      if (Number.isNaN(saleInfo.display_price.slice(1))) {
        info.price = calculatePrice(saleInfo.display_price);
      }
      info.strikePrice = normalPrice;
    } else {
      info.psPlusPrice = calculatePrice(saleInfo.display_price);
    }
    info.discount = parseInt(saleInfo.discount, 10);
  }

  return info;
};

const processMultipleResultGameInfo = (results: any, maxResults = 10) => {
  const validatedResults = [];

  // eslint-disable-next-line no-prototype-builtins
  if (results.hasOwnProperty('links') && Array.isArray(results.links)) {
    const games = results.links;

    for (let i = 0; i < games.length; i++) {
      if (validatedResults.length >= maxResults) {
        break;
      }
      try {
        if (!validateId(games[i].id)) {
          continue;
        }
        validatedResults.push(parseBasicGameInfo(games[i]));
      } catch (e) {
        continue;
      }
    }
  }
  return validatedResults;
};

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
