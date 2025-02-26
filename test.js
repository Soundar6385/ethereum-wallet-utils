import { generateWallet, encryptPrivateKey, decryptPrivateKey, signMessage, verifyMessage } from './src/index.js';

const test = async () => {
    console.log("Testing Ethereum Wallet Utils...");

    const wallet = generateWallet();
    console.log("Generated Wallet:", wallet);

    const password = "strongpassword";
    const encryptedKey = await encryptPrivateKey(wallet.privateKey, password);
    console.log("Encrypted Private Key:", encryptedKey);

    const decryptedKey = await decryptPrivateKey(encryptedKey, password);
    console.log("Decrypted Private Key matches:", decryptedKey === wallet.privateKey);

    const message = "Hello, Ethereum!";
    const signature = await signMessage(wallet.privateKey, message);
    console.log("Signed Message:", signature);

    const verifiedAddress = verifyMessage(message, signature);
    console.log("Verified Address matches:", verifiedAddress === wallet.address);
};

test().catch(console.error);
