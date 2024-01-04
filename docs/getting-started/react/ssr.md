---
title: Server Side Rendering (Next.js)
sidebar_position: 3
---

If you wanna use Next.js, you need to use an extra provider to avoid any hydration errors.

## Usage with App Dir

1. Create a `providers.tsx`:

```tsx title="/app/providers.tsx"
"use client";

import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import { QuirksConfig, QuirksNextProvider } from "@quirks/react";
import { Config } from "@quirks/store";
import { keplrExtension, leapExtension } from "@quirks/wallets";
import { PropsWithChildren } from "react";

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksNextProvider>
      <QuirksConfig config={config}>
        {children}
      </QuirksConfig>
    </QuirksNextProvider>
  );
};
```

2. Import it inside your `layout.tsx`:

```tsx title="/app/layout.tsx"
import { ReactNode } from "react";
import { Provider } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

3. You can start using it as described inside [quick start](./quick-start)

## Usage with Pages Dir

1. Add the providers inside your `_app.tsx`:

```tsx title="/pages/_app.tsx"
import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import { QuirksConfig, QuirksNextProvider } from "@quirks/react";
import { Config } from "@quirks/store";
import { keplrExtension, leapExtension } from "@quirks/wallets";
import type { PropsWithChildren } from "react";
import type { AppProps } from "next/app";

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
};

function App({ Component, pageProps }: AppProps) {
    return <QuirksNextProvider>
      <QuirksConfig config={config}>
        <Component {...pageProps} />
      </QuirksConfig>;
    </QuirksNextProvider>
}
```

2. You can start using it as described inside [quick start](./quick-start)