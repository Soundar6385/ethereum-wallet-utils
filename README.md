# Ethereum Wallet Utils

## Overview
Ethereum Wallet Utils is a lightweight JavaScript library for managing Ethereum wallets. It provides functionalities for generating Ethereum wallets, encrypting and decrypting private keys, signing messages, and verifying signatures.

## Features
- Generate a new Ethereum wallet (address, private key, and mnemonic)
- Encrypt and decrypt private keys securely
- Sign messages using a private key
- Verify signed messages
- Built using `ethers.js`

## Installation

You can install the package using npm:

```sh
npm install ethereum-wallet-utils
```

Or using yarn:

```sh
yarn add ethereum-wallet-utils
```

## Usage

### Importing the Library

```javascript
import {
    generateWallet,
    encryptPrivateKey,
    decryptPrivateKey,
    signMessage,
    verifyMessage
} from 'ethereum-wallet-utils';
```

### Generate a New Ethereum Wallet

```javascript
const wallet = generateWallet();
console.log(wallet);
// Output: { address: '0x...', privateKey: '0x...', mnemonic: '...' }
```

### Encrypt a Private Key

```javascript
const encryptedKey = await encryptPrivateKey(wallet.privateKey, 'your-secure-password');
console.log(encryptedKey);
```

### Decrypt a Private Key

```javascript
const privateKey = await decryptPrivateKey(encryptedKey, 'your-secure-password');
console.log(privateKey);
```

### Sign a Message

```javascript
const message = "Hello, Ethereum!";
const signature = await signMessage(wallet.privateKey, message);
console.log(signature);
```

### Verify a Signed Message

```javascript
const isValid = verifyMessage(message, signature);
console.log(isValid);
// Output: 0x... (Recovered Ethereum address)
```

## Repository
- GitHub: [Ethereum Wallet Utils](https://github.com/Soundar6385/Ethereum-Wallet-Utils)

## Issues & Contributions
If you find any issues or would like to contribute, please open an issue or create a pull request on GitHub.


## 📄 License

This project is licensed under the [MIT License](LICENSE).

