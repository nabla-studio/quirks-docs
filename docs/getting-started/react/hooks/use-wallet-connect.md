---
title: useWalletConnect
sidebar_position: 5
---

```ts
const {
    pairingURI,
    namespaces,
    providerOpts
} = useWalletConnect();
```

#### Options

None

#### Returns

- **`pairingURI: string|undefined`**
    - Contains the uri for pairing with a wallet (generating the QR code for example).
- **`namespaces: { cosmos: Namespace }`**
    - Contains information about configured wallet connect namespaces.
- **`providerOpts: UniversalProviderOpts|undefined`**
    - Contains options use for the provider.