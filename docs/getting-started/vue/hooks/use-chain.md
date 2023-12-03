---
title: useChain
sidebar_position: 2
---

```ts
const {
    chain,
    address,
    accountName,
    getOfflineSigner,
    getOfflineSignerOnlyAmino,
    getOfflineSignerAuto,
    signAmino,
    signDirect
} = useChain(chainName);
```

#### Options

- **`chainName: string`**
    - **Required**
    - The name of the chains whose information is to be obtained, for example: "osmosis" or "osmosistestnet".

#### Returns

- **`chain: Chain`**
    - An object that contains information about the chain, as defined in the chain registry.
- **`address: Ref<string|undefined>`**
    - Returns the address associated with the chain, if the wallet is connected.
- **`accountName: Ref<string|undefined>`**
    - Returns the accountName associated with the chain, if the wallet is connected.
- **`getOfflineSigner: () => Promise<OfflineAminoSigner & OfflineDirectSigner>`**
    - Returns the required signer for use with cosmjs.
- **`getOfflineSignerOnlyAmino: () => Promise<OfflineAminoSigner>`**
    - Returns the required signer for use with cosmjs.
- **`getOfflineSignerAuto: () => Promise<OfflineDirectSigner>`**
    - Returns the required signer for use with cosmjs.
- **`signAmino: (signDoc: StdSignDoc) => Promise<AminoSignResponse>`**
    - Allows a signature to be made using the Amino signer.
- **`signDirect: (signDoc: SignDoc) => Promise<DirectSignResponse>`**
    - Allows a signature to be made using the Direct signer.