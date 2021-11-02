import { baseOptions, completeOptions } from "../domain/baseInterfaces";
import { callAPI } from "../infra/AxiosHandler";
import config from '../config.json';


const topGames = async (query: unknown, options: baseOptions) => {
    const filterResult = await filter({
      search: query,
      ...options,
    });
    // console.log("filterResult", filterResult)
  
    const result = processMultipleResultGameInfo(filterResult, options.limit)
    return result
  };
  
const  processMultipleResultGameInfo = (results: any, maxResults = 10) => {
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
return  validatedResults
}

const parseBasicGameInfo = (game: any) =>{
const pricing = game.default_sku;

const normalPrice = pricing.display_price !== 'Free' ? pricing.display_price : '0.00';
const onSale = pricing.rewards.length > 0 && pricing.rewards[0].reward_source_type_id === 2;

const info = {
    _id: game.id,
    title: game.name,
    url: `https://store.playstation.com/#!/en-us/games/cid=${game.id}`,
    price: normalPrice,
    strikePrice: null,
    onSale: onSale,
    discount: null,
    psPlusPrice: null ,
    lastUpdated: new Date(new Date().toDateString()).getTime(),
    image: `https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/${game.id}/image?w=225&h=225`,
    details: { platforms: game.playable_platform }
};


if (onSale) {
    const saleInfo = pricing.rewards[0];

    if (!saleInfo.isPlus) {
        if (Number.isNaN(saleInfo.display_price.slice(1))) {
            info.price = saleInfo.display_price !== 'Free' ? parseFloat(saleInfo.display_price.slice(1)) : '0.00';
        }
        info.strikePrice = normalPrice;
    } else {

        // info.psPlusPrice = saleInfo.display_price !== 'Free' ? parseFloat(saleInfo.display_price.slice(1)) : '0.00';
    }
    // info.discount = parseInt(saleInfo.discount, 10);
}

return info;
}

const validateId = (gameId: string) => {
const idValidation = /UP\d{4}-\w{9}_00-\w{16}/g;
return idValidation.test(gameId.toString());
}

const filter = async (options: completeOptions) => {
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
  
    const url = `${config.nintendoApi.url}STORE-MSF77008-TOPGAMES?size=${limit}`;
  
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
  
   const {data}= await callAPI(url, {params});
   return data
};

  export {
    topGames
  }
  
