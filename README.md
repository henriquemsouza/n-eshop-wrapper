
# A not official PSN API Wrapper 


The currently existing services are


| SERVICES|  DESCRIPTION|
|--|--|
| topGames  | Returns the top games on psn at the moment  |
| gameByTitle  | Search the game by name |
| gameById  | Search the game by id  |

**  by default each service returns only 10 items 

## Install
```sh
 npm i psn-wrapper --save
 ```


___
## how to use
### topGames
```typescript
import { topGames } from 'psn-wrapper';

const top = async () => {
  const result = await topGames({ limit: 20 });
  console.log(result);
};

 ```

### gameByTitle
```typescript
import { gameByTitle } from 'psn-wrapper';

const games = async () => {
  const result = await gameByTitle('House of Ashes ', 20);
  console.log(result);
};
 ```

### gameById
```typescript
import { gameById } from 'psn-wrapper';

const games = async () => {
  const result = await gameById('UP0700-CUSA08789_00-SHINOBISTRIKER01', 20);
  console.log(result);
};
 ```

 ___

### Response sample
```typescript
[
  {
    id: 'UP0700-CUSA08789_00-SPASS4CHARAITACH',
    title: 'NTBSS Pacote de treinamento de personagem mestre - Itachi Uchiha (Reanimação)',
    url: 'https://store.playstation.com/#!/en-us/games/cid=UP0700-CUSA08789_00-SPASS4CHARAITACH',
    price: 'R$21,50',
    strikePrice: null,
    onSale: false,
    discount: null,
    psPlusPrice: null,
    lastUpdated: 1635994800000,
    image: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP0700-CUSA08789_00-SPASS4CHARAITACH/image?w=225&h=225',
    details: { platforms: [Array] }
  }
]
```

## use as package from git
```sh
 "psn-wrapper": "ssh://git@github.com:henriquemsouza/psn-wrapper.git"
 ```

