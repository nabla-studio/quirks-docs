---
title: useConfig
sidebar_position: 4
---

```ts
const {
    wallets,
    chains,
    assetsLists
} = useConfig();
```

#### Options

None

#### Returns

- **`wallets: Ref<Wallet<unknown, unknown>[]>`**
    - Returns the list of accounts by requesting them to the current connected wallet.
- **`chains: Ref<Chain[]>`**
    - Returns the accountName associated with the chain, if the wallet is connected.
- **`assetsLists: Ref<AssetLists[]>`**
    - A function that returns the list of addresses based on an array of chainId.