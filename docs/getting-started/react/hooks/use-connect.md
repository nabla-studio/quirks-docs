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
- **`status: ConnectionState`**
    - Will be:
        - **`DISCONNECTED`**, if the wallet isn't connected.
        - **`WAITING`**, if the wallet connection is on a pending status.
        - **`CONNECTED`**, if the wallet has been connected.
        - **`REJECTED`**, if the connection to the wallet was refused or failed
- **`connected: boolean`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`waiting: boolean`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`disconnected: boolean`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`rejected: boolean`**
    - A derived boolean from the `status` variable above, provided for convenience.
- **`wallet: Wallet`**
    - Instance of the currently connected wallet.
- **`walletName: string`**
    - The name of the connected wallet.