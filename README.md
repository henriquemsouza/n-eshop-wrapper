
# A not official PSN API Wrapper 


The currently existing services are


| SERVICES|  DESCRIPTION|
|--|--|
| topGames  | returns the top games on psn at the moment, by default returns only 10 items  |
| gameByTitle  | search the game by name, by default returns only 10 items  |

## Install
```sh
 npm i psn-wrapper --save
 ```



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

## use as package from git
```sh
 "psn-wrapper": "ssh://git@github.com:henriquemsouza/psn-wrapper.git"
 ```

