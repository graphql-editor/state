# State management for slothking frontend

Hello from [slothking.online](https://slothking.online)
Communicate with slothking backend without writing communication libs. Based on great lib [unstated](https://github.com/jamiebuilds/unstated)

## Installation

```sh
$ npm install @slothking-online/state
```

## Usage

```tsx
import { SlothContainer } from "@slothking-online/state";
import { Subscribe } from "unstated";
type MyState = {
  someValue: string;
  someOther: number[];
};

const appName = "superManager";
const myContainer = new SlothContainer<MyState>(appName);

fetch("myApiFunction/").then(myContainer.set);

const MyReactComponent = () => (
  <Subscribe to={[myContainer]}>
    {(con: typeof myContainer) => <div>{con.state.someValue}</div>}
  </Subscribe>
);
```

## Usage with slothking generated api

```tsx
import { SlothContainer } from "@slothking-online/state";
import { Subscribe } from "unstated";
import { userExtensionState } from './api';

const appName = "superManager";
const myContainer = new SlothContainer<userExtensionState>(appName);

api.user.endpoints.login(props:{username:'aaa',password:'ppp'}).then(myContainer.set)

const MyReactComponent = () => (
  <Subscribe to={[myContainer]}>
    {(con: typeof myContainer) => { return con.state.valid ? <div>User logged in</div> : <div>User logged out</div>}}
  </Subscribe>
);
```
