---
title: Server Side Rendering (Nuxt.js)
sidebar_position: 3
---

To use nuxt, we made a package that defines a nuxt module so that all hooks and utilities are automatically imported, let's start.

1. install quirks nuxt package:

```bash
$ npm i @quirks/nuxt
# or
$ pnpm add @quirks/nuxt
# or
$ yarn add @quirks/nuxt
# or
$ bun add @quirks/nuxt
```

2. add quirks module inside `nuxt.config.ts`:

```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  modules: ["@quirks/nuxt"],
});
```

3. add `quirks.ts` inside `plugins` folder:

```ts title="/plugins/quirks.ts"
import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import type { Config } from "@quirks/store";
import { keplrExtension, leapExtension } from "@quirks/wallets";

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(quirksPlugin, config);
});
```

4. You can start using it as described inside [quick start](./quick-start)
