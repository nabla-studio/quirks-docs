---
title: Packages Structure
sidebar_position: 2
---

The library currently consists of 7 different packages:

- **@quirks/core**, defines all logic and data structures of quirks, such as classes for wallets.
- **@quirks/store**, implement core logic using zustand to have a responsive and global state manager.
- **@quirks/wallets**, contains the implementation of providers for both web and mobile wallets.
- **@quirks/react**, exposes the store using react hooks and providing utilities.
- **@quirks/vue**, exposes the vue using react hooks and providing utilities.
- **@quirks/nuxt**, implements vue hooks with autocomplete and ssr management for nuxt.
- **@nabla-studio/chain-registry**, contains all the information of the chains and their assets as defined within the cosmos chain registry, unlike other packages we do not export all the information into one object but the elements are split so as to enable three-shake and avoid importing data not needed by the app but only what is required.
- **@nabla-studio/wallet-registry**, contains all the information of the wallets as defined within the cosmos wallet registry, unlike other packages we do not export all the information into one object but the elements are split so as to enable three-shake and avoid importing data not needed by the app but only what is required.