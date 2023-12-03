---
title: useChains
sidebar_position: 3
---

```ts
const {
    accounts,
    accountName,
    getAddresses,
    getAddress,
    getChain
} = useChains();
```

#### Options

None

#### Returns

- **`accounts: Ref<AddressWithChain[]>`**
    - Returns the list of accounts by requesting them to the current connected wallet.
- **`accountName: Ref<undefined|string>`**
    - Returns the accountName associated with the chain, if the wallet is connected.
- **`getAddresses: (chainIds: string[]) => string[]`**
    - A function that returns the list of addresses based on an array of chainId.
- **`getAddress: (chainId: string) => string | undefined`**
    - A function that returns an address based on a chainId.
- **`getChain: (chainName: string) => Chain | undefined`**
    - A function that returns an object that contains information about the chain, as defined in the chain registry based on a chainName param.