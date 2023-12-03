---
title: Signing
sidebar_position: 4
---

As described before, it is possible to globally access the state of quirks, regardless of the framework used.To facilitate the construction of functions that deal with signing a transaction, we have built a set of utilities within `@quirks/store`:

- **getAddress**, return the current account address by chainName
- **getChain**, return chain info by chainName
- **getOfflineSigner**, return a valid signer class by chainId and signerType (auto, amino or direct)
- **sign**, signs a transaction using CosmJS Stargate Client on a given chainName. Allows specifying messages, fee, signer type, and memo.
- **signCW**, signs a CosmWasm transaction using CosmJS Stargate Client on a given chainName. Allows specifying messages, fee, signer type, and memo.
- **signArbitrary**, signs an arbitrary message using the wallet on a given chainId. Allows specifying the signer and message data. (Usefull for use case such as auth token generation).
- **broadcast**, broadcasts a TxRaw transaction on a given chainName. Optional parameters allow specifying timeout and poll interval.
- **broadcastSync**, broadcasts a TxRaw transaction synchronously on a given chainName. It doesn't wait for a response, using polling, but returns the hash of the transaction. (Usefull for use case where you wanna trace the tx using a different method, for example websocket or a state machine).

## How to sign a send message

In this use case we wanna sign a send message, we'll use `osmojs` library to compose the message, but you can use whichever library is most convenient for you.

1. Install `osmojs`

```bash
$ npm i osmojs
# or
$ pnpm add osmojs
# or
$ yarn add osmojs
# or
$ bun add osmojs
```

2. Connect a wallet using methods described under `Getting Started` section, based on your framework.

3. Create an `send` function, just for example purposes we will do a send on the same connected address and Osmosis chain:

```ts title="/services/send.ts"
import { sign, getAddress, broadcast } from "@quirks/store";

export const send = async () => {
  const cosmos = (await import("osmojs")).cosmos;
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

  const address = getAddress("osmosis");

  const msg = send({
    amount: [
      {
        denom: "uosmo",
        amount: "1",
      },
    ],
    toAddress: address,
    fromAddress: address,
  });

  const txRaw = await sign("osmosis", [msg]);

  const res = await broadcast("osmosis", txRaw);

  return res;
};
```

As you note, osmojs is imported using dynamic imports, this is to optimize bundle size, for further discussion go [here](./performance).

4. Invoke the function from anywhere in the app you want to use it, for example:

```tsx
import { send } from "services/send";

export const SendComponent = () => {
  return <button onClick={send}>Send</button>;
};
```

To track the states of transactions and in general of your dapp, it is recommended to use [tanstack query](https://tanstack.com/query/latest), I'll provide some come examples in the future.