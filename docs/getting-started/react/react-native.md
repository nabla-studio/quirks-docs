---
title: React Native
sidebar_position: 4
---

If you want to use quirks on react native, in addition to basic installation that you can follow [here](./installation.md), you need to follow additional steps.

## Installation

```bash
$ npm i @quirks/react-native
# or
$ pnpm add @quirks/react-native
# or
$ yarn add @quirks/react-native
# or
$ bun add @quirks/react-native
```

Also you need some additional packages to help with storage and polyfills:

```bash
$ npm i @craftzdog/react-native-buffer react-native-get-random-values react-native-quick-crypto @react-native-community/netinfo @react-native-async-storage/async-storage
# or
$ pnpm add @craftzdog/react-native-buffer react-native-get-random-values react-native-quick-crypto @react-native-community/netinfo @react-native-async-storage/async-storage
# or
$ yarn add @craftzdog/react-native-buffer react-native-get-random-values react-native-quick-crypto @react-native-community/netinfo @react-native-async-storage/async-storage
# or
$ bun add @craftzdog/react-native-buffer react-native-get-random-values react-native-quick-crypto @react-native-community/netinfo @react-native-async-storage/async-storage
```

If you use our default config you also need:

```bash
$ npm i react-native-mmkv 
# or
$ pnpm add react-native-mmkv 
# or
$ yarn add react-native-mmkv 
# or
$ bun add react-native-mmkv 
```

## Setup

Add quirks setup import inside your `index.ts` or `App.tsx`, it need to be included in a boot file to make sure that dependencies are imported.

```ts title="index.ts"
import "@quirks/react-native/setup";
```

Add babel preset:

```js title="babel.config.js"
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [..., '@quirks/react-native/babel'],
  };
};
```

## Generate config

To facilitate the integration of react native, the `generateConfig` utility can be used to create a setup that automatically implements all the basic configurations for RN; this setup is optional and can be customized if necessary.

```tsx title="App.tsx"
import { generateConfig } from "@quirks/react-native";
import { keplrMobile, leapMobile } from "@quirks/wallets";
import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import { QuirksConfig } from "@quirks/react";

const config = generateConfig({
  wallets: [keplrMobile, leapMobile],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
  walletConnectOptions: {
    providerOpts: {
      logger: "info",
      projectId: process.env.EXPO_PUBLIC_WC_PROJECT_ID,
      metadata: {
        name: "Quirks Demo",
        description: "Quirks universal dApp demo",
        url: "https://www.quirks.nabla.studio/",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
      },
    },
  },
})

function App() {
  return (
    <QuirksConfig config={config}>
        {...}
    </QuirksConfig>
  );
}

export default App;
```

## Android Fix

Currently there is an error in the react-native-mmkv library (recently fixed but still no new build generated), to fix it at the moment you need to import the following configuration inside the `build.gradle`.

```gradle title="android/app/build.gradle"
android {
    ...
    packagingOptions {
        pickFirst 'lib/x86/libcrypto.so'
        pickFirst 'lib/x86_64/libcrypto.so'
        pickFirst 'lib/armeabi-v7a/libcrypto.so'
        pickFirst 'lib/arm64-v8a/libcrypto.so'
    }
}
```

## Starter

A starter is available for easy integration at this [link](https://github.com/nabla-studio/quirks-mobile-dapp-starter).