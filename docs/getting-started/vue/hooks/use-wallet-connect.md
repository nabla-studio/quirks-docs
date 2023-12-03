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

- **`pairingURI: Ref<string|undefined>`**
    - Contains the uri for pairing with a wallet (generating the QR code for example).
- **`namespaces: Ref<{ cosmos: Namespace }>`**
    - Contains information about configured wallet connect namespaces.
- **`providerOpts: Ref<UniversalProviderOpts|undefined>`**
    - Contains options use for the provider.