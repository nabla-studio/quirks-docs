---
title: Quick Start
sidebar_position: 2
---

Import and configure `QuirksConfig` context provider inside your app.tsx or root file.

```tsx
import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import { QuirksConfig } from "@quirks/react";
import { Config, ssrPersistOptions } from "@quirks/store";
import { keplrExtension, leapExtension } from "@quirks/wallets";
import { PropsWithChildren } from "react";

const config: Config = {
  wallets: [keplrExtension, leapExtension],
  chains: [osmosis],
  assetsLists: [osmosisAssetList],
};

export const App = ({ children }: PropsWithChildren<unknown>) => {
  return <QuirksConfig config={config}>{children}</QuirksConfig>;
};
```

## How to connect a wallet

```tsx
import { useConnect } from "@quirks/react";

export const ConnectionButton = () => {
  const { connect, disconnect, connected } = useConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return <button onClick={() => connect("keplr-extension")} />;
};
```

## How to allow user to choose a wallet

```tsx
import { useConfig, useConnect } from "@quirks/react";

export const WalletsConnector = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return wallets.map((wallet) => (
    <div key={wallet.options.name}>
      <button
        onClick={async () => {
          await connect(wallet.options.name);
        }}
      >
        <img
          src={wallet.options.logoUrls?.light?.svg}
          alt={wallet.options.prettyName}
          height="48px"
          width="48px"
        />
      </button>

      {!wallet.injected ? (
        <a
          href={
            wallet.options.downloads && wallet.options.downloads.length > 0
              ? wallet.options.downloads[0].link
              : "#"
          }
          target="_blank"
        >
          Install
        </a>
      ) : null}
    </div>
  ));
};
```

### Available Hooks

- **[useConnect](./hooks#useconnect)**
- **[useChain](./hooks#usechain)**
- **[useChains](./hooks#usechains)**
- **[useConfig](./hooks#useconfig)**
- **[useWalletConnect](./hooks#usewalletconnect)**
