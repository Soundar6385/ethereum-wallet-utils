import { Wallet, verifyMessage as verifyMessageRaw } from 'ethers';

// Generate a new Ethereum wallet
export const generateWallet = () => {
    const wallet = Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase
    };
};

// Encrypt a private key with a password
export const encryptPrivateKey = async (privateKey, password) => {
    const wallet = new Wallet(privateKey);
    return await wallet.encrypt(password);
};

// Decrypt a private key with a password
export const decryptPrivateKey = async (json, password) => {
    const wallet = await Wallet.fromEncryptedJson(json, password);
    return wallet.privateKey;
};

// Sign a message with a private key
export const signMessage = async (privateKey, message) => {
    const wallet = new Wallet(privateKey);
    return await wallet.signMessage(message);
};

// Verify a signed message
export const verifyMessage = (message, signature) => {
    return verifyMessageRaw(message, signature);
};
