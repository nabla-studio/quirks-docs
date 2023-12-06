---
title: Configurations
sidebar_position: 6
---

As seen previously, in order to initialize quirks it is necessary to pass an object with a valid configuration, currently the library supports several configuration parameters in order to customize different layers (For example, choose the type of storage, the wallets to be used, etc.).

Below we will look in detail at all the items that make up the [`Config`](https://github.com/nabla-studio/quirks/blob/main/packages/store/src/types/options.ts#L26) type.

```ts
const config: Config = {
  wallets: [
    keplrExtension,
    leapExtension,
    cosmostationExtension,
    xdefiExtension,
    universalWalletConnect,
  ],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
  persistOptions: ssrPersistOptions,
  walletConnectOptions: {
    providerOpts: {
      logger: 'info',
      projectId: '...',
      metadata: {
        name: 'React App',
        description: 'React App for WalletConnect',
        url: 'https://walletconnect.com/',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      },
    },
  },
};
```

#### Options

- **`wallets: Wallet[]`**
    - **Required**
    - An array of wallets that you intend to use, imported from `@quirks/wallets`.
- **`chains: Chain[]`**
    - **Required**
    - An array of chains that you intend to use, imported from `@nabla-studio/chain-registry`.
- **`assetsLists: AssetLists[]`**
    - **Required**
    - An array of asset lists associeted with chains data that you intend to use, imported from `@nabla-studio/chain-registry`.
- **`autoConnect: boolean`**
    - Optional
    - default to **`true`**.
    - If a session with quirks was previously initialized and is present in the store then the latter is restored, this may result in the modal popup of the last connected wallet (As in the case of Keplr).
- **`autoSuggestions: boolean`**
    - Optional
    - default to **`true`**.
    - Automatically suggest chains using the provided ones, is useful if you want to add a chain not natively supported by a wallet to it.
- **`signOptions: SignOptions`**
    - Optional
    - An object containing preferences to be sent to the connected wallet for sign operations.
    - Structured as follows:
        - **preferNoSetFee**
            - Optional
            - default to **`false`**
            - Not supported by all wallets
            - If set to true, the wallet will prioritize the frontend-suggested fee rather than overriding the tx fee setting of the signing page.
        - **preferNoSetMemo**
            - Optional
            - default to **`true`**
            - Not supported by all wallets
            - If set to true, the wallet will not override the memo and set fix memo as the front-end set memo.
        - **disableBalanceCheck**
            - Optional
            - default to **`true`**
            - Not supported by all wallets
            - Prevents account balance check.
- **`signerOptions: SignerOptions`**
    - Optional
    - Allow signing and broadcasting configuration based on your needs.
    - Structured as follow:
        - **`stargate?: (chain: Chain) => Promise<StargateClientOptions | undefined>`**
            - Optional
            - Allows a set of custom parameters to be sent for when the signed tx is broadcast.
            - For more details check [cosmjs repo](https://github.com/cosmos/cosmjs/blob/b922729093a9158b9e6152e5ca23b2426e0bbc51/packages/stargate/src/stargateclient.ts#L194)
        - **`signingStargate?: ( chain: Chain ) => Promise<SigningStargateClientOptions | undefined>`**
            - Optional
            - Allows a set of custom parameters to be sent for when the tx is signed, which is useful for defining custom amino and registry types.
            - Used for `sign` utility.
            - For more details check [cosmjs repo](https://github.com/cosmos/cosmjs/blob/b922729093a9158b9e6152e5ca23b2426e0bbc51/packages/stargate/src/signingstargateclient.ts#L84)
        - **`signingCosmwasm?: ( chain: Chain ) => Promise<SigningStargateClientOptions | undefined>`**
            - Optional
            - Allows a set of custom parameters to be sent for when the tx is signed, which is useful for defining custom amino and registry types.
            - Used for `signCW` utility.
            - For more details check [cosmjs repo](https://github.com/cosmos/cosmjs/blob/b922729093a9158b9e6152e5ca23b2426e0bbc51/packages/stargate/src/signingstargateclient.ts#L84)
- **`persistOptions: PersistOptions<AppState>`**
    - Optional
    - Default to **`defaultPersistOptions`**, by default we use localstorage from Web API, we also have a storage for SSR (**`ssrPersistOptions`**) all exported from **`@quirks/store`** package.
    - This option is very helpful if you wanna use quirks on react native for example, so you can provide a differente storage for example [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv).
    - This config is based on [zustand middleware](https://docs.pmnd.rs/zustand/integrations/persisting-store-data#options)
- **`walletConnectOptions: { providerOpts: UniversalProviderOpts; namespaces?: { cosmos: Omit<Namespace,'chains'> };
  }`**
    - Optional
    - Required if you use wallet connect
    - Structured as follow:
        - **`providerOpts: UniversalProviderOpts`**
            - **Required**
            - It is based on the universal providers configuration of wallet connect, allows us to define the metadata of our app and customize some behaviors.
            - Structured as follow:
                - **`projectId: string`**
                    - **Required**
                    - Your dApp project id, you can generate it from wallet [connect dashboard](https://cloud.walletconnect.com/sign-in).
                - **`metadata?: Metadata`**
                    - Optional
                    - Although optional it is recommended to populate the metadata since in wallets this information is used to show the connection to the user
                    - Your dApp metadata, for example dApp name, icon, description url and redirect for deeplink.
                - **`logger?: string`**
                    - Optional
                    - Can be:
                        - **`info`**, if you wanna log wallet connect behaviour inside your console.
                - **`client?: SignClient`**
                    - Optional
                    - If not provided, it'll be initialized inside our worflow.
                    - It's an instance of `SignClient` from `@walletconnect/sign-client`.
                - **`relayUrl?: string`**
                    - Optional
                    - Default to **`wss://relay.walletconnect.com`**.
                    - Useful if you wanna provide a custom Relay Server URL.
                - **`storage?: IKeyValueStorage`**
                    - Optional
                    - Default to **`localstorage`**.
                    - This option is very helpful if you wanna use quirks on react native for example, so you can provide a differente storage for example [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv).
                - **`name?: string`**
                    - Optional
                    - Customize sign client name.
                - **`disableProviderPing?: boolean`**
                    - Optional
                    - Default to **`false`**.
        - **`namespaces?: { cosmos: Omit<Namespace, 'chains'> }`**
            - Optional
            - Default to cosmos chains setup.
            - It enable custom namespace configuration, if provided for cosmos it'll merge object data with default cosmos setup, it's useful if you wanna provide extra events, methods ecc.
            - For more details about namespace check the [official docs](https://specs.walletconnect.com/2.0/specs/clients/sign/namespaces).