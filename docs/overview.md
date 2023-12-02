---
title: Overview
description: Why quirks? Should I use that?
sidebar_position: 1
---

Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.

It was born with the idea of: **“Write once, use everywhere”**.

## Why

I don't like the current state of the libraries that allow dApps to be connected to Wallets:

1. Too many dependencies to import, impacting the weight of my final app too much
2. Anyone is often forced to use specific frameworks/libraries (often React)
3. No support for native mobile development, many difficulties in developing native dApps
4. Often relying on a specific library or framework, we were forced to use techniques of interactions with the adapter that went through specific patterns (such as hooks), wouldn't it be better if we could contact the wallets as if they were a service/server responding to our requests? So by simply writing promises?

**These are the reasons why Quirks was born and what the library solves.**

Also, going a little bit off topic but not too much either, I'd like to start talking about universal dApps, what if I can share the same web code with mobile code?

It is a very open topic in the developer community, there is definitely quite a bit of work to be done and at the moment there might be pitfalls in sharing code, but that doesn't take away from the fact that a library that by design can run on different frameworks and on mobile could forward help anyone develop a universal dApp.

## Solution

These are the basic pieces and principles we kept as we developed Quirks::

1. Framework agnostic (Support for React and Vue 3, more to come in the next future);
2. SSR Support (NextJS and NuxtJS);
3. Wallet Connect Support;
4. Mobile Support (React Native)
5. Tiny Bundle impact. (Using dynamic import a vendor chunk splitting). **If I don't use at the first one loading a resource, why load it from the start?**
6. Improve DX

## Full Features List

- Cross Framework
- React and NextJS support
- Vue and NuxtJS support
- Small bundles, with vendor chunk splitting
- Different wallet supports:
  1. Keplr
  2. Leap
  3. Cosmostation
  4. xDefi
  5. Station
- Fully typed and tree-shakeable
- Global state even outside the frameworks
- Web Broadcast API Support
- Wallet Connect Support

## Todo List

1. React Native full integration
2. IFrame support (using postmessage communication)
3. Web3 Modal Support
4. UI Kit (Cross Framework)

## Comparison

|                        |                             Quirks                             |                  [Cosmos Kit](https://cosmoskit.com/)                   | [Graz](https://graz.sh/) |
| :--------------------: | :------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: |
|   Framework Agnostic   |                               ✅                               |                             ❌                            |                             ❌                            |
|   Supported Frameworks   |                               React and Vue 3 (extendable)                               |                             React                          |                              React                             |
|  React Native Support  |                               🔜                               |                                   ❌                                    |                                   ❌                                    |
| Wallet Connect Support |                               ✅                               |                                   ✅                                    |                                   ✅                                    |
| Web Broadcast Support  |                               ✅                               |                                   ❌                                    |                                   ❌                                    |
|      SSR Support       |                               ✅                               |                                   ✅                                    |                                   ✅                                    |
|      Plugins       |                               🔜                               |                                   ❌                                    |                                   ❌                                   |
|      Bundle Size       | [2.3KB](https://bundlephobia.com/package/@quirks/react@0.3.10) | [16.7KB](https://bundlephobia.com/package/@cosmos-kit/react-lite@2.5.9) | [109.1KB](https://bundlephobia.com/package/graz@0.1.1)* |
| Vendor Chunk Splitting |                               ✅                               |                                   ❌                                    |                                   ❌                                    |

\* They offer several features, not only connecting and managing everything related to the wallet, this justifies the clear difference from other adapters.

I would like to point out that this table is only to give an overview, if anyone wants to change it or feels that there is incorrect information, please feel free to PR or contact us!