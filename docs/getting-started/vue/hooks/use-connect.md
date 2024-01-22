---
title: useConnect
sidebar_position: 1
---

```ts
const {
    connect,
    disconnect,
    status,
    connected,
    waiting,
    disconnected,
    rejected
} = useConnect();
```

#### Options

None

#### Returns

- **`connect: (walletName: string) => void`**
    - A function to connect a specific wallet.
- **`disconnect: () => void`**
    - A function to disconnect the current wallet.
- **`status: Ref<ConnectionState>`**
    - Will be:
        - **`DISCONNECTED`**, if the wallet isn't connected.
        - **`WAITING`**, if the wallet connection is on a pending status.
        - **`CONNECTED`**, if the wallet has been connected.
        - **`REJECTED`**, if the connection to the wallet was refused or failed
- **`connected: Ref<boolean>`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`waiting: Ref<boolean>`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`disconnected: Ref<boolean>`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`rejected: Ref<boolean>`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`wallet: Ref<Wallet>`**
    - Instance of the currently connected wallet.
- **`walletName: Ref<string>`**
    - The name of the connected wallet.