---
title: Quick Start
sidebar_position: 2
---

Import and configure `QuirksConfig` context provider inside your app.tsx or root file.

```tsx
import { osmosis, osmosisAssetList } from "@nabla-studio/chain-registry";
import { QuirksConfig } from "@quirks/react";
import { Config } from "@quirks/store";
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

  return <button onClick={() => connect("keplrextension")} />;
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
    <div key={wallet.options.wallet_name}>
      <button
        onClick={() => {
          connect(wallet.options.wallet_name);
        }}
      >
        <img
          src={wallet.logoLight}
          alt={wallet.options.pretty_name}
          height="48px"
          width="48px"
        />
      </button>

      {!wallet.injected ? (
        <a
          href={
            wallet.options.platforms && wallet.options.platforms.length > 0
              ? wallet.options.platforms[0].install_link
              : '#'
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

- **[useConnect](./hooks/use-connect)**
- **[useChain](./hooks/use-chain)**
- **[useChains](./hooks/use-chains)**
- **[useConfig](./hooks/use-config)**
- **[useWalletConnect](./hooks/use-wallet-connect)**
- **[useWalletEvents](./hooks/use-wallet-events)**
