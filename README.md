
# A not official PSN API Wrapper 


The currently existing services are


| SERVICES|  DESCRIPTION|
|--|--|
| topGames  | returns the top games on psn at the moment, by default returns only 10 items  |

## Install
```sh
 npm i psn-wrapper
 ```



## how to use
### topGames
```typescript
import { topGames } from '../src';

const top = async () => {
  const result = await topGames({ limit: 20 });
  console.log(result);
};

 ```

## user as package from git
```sh
 "psn-wrapper": "ssh://git@github.com:henriquemsouza/psn-wrapper.git"
 ```

