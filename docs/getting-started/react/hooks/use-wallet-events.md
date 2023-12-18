---
title: useWalletEvents
sidebar_position: 6
---

```ts
useWalletEvents("name", () => {});
```

It is a utility to allow subscription to quirks events, in order to perform custom actions.

#### Options

- **`eventName: string`**
  - Name of the event you want to subscribe to
  - Can be:
    - **`keystorechange`**, it is called when the user changes the account they are operating under.
    - **`chainChanged`**, it is called when the user changes the chain on wallet connect.
    - **`accountsChanged`**, it is called when the user changes the account on wallet connect.
    - **`display_uri`**, it is called when wallet connect generates the connection uri.
    - **`session_ping`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_update`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_delete`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_proposal`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_extend`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_expire`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_request`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`session_request_sent`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
    - **`proposal_expire`**, life cycle event of wallet connect, it is advisable to refer to their documentation for more details.
- **`fn: (value: unknown) => void`**
  - Callback that is called when the event is emitted.

#### Returns

None
