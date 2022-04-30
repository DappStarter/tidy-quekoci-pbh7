require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle foot blanket razor pumpkin unaware hard light army gentle'; 
let testAccounts = [
"0x0e84a8bec5c0b3bec977f7435674b9dd175c20d385b14b4c6c773bb633d79248",
"0x2905fe9b958664b0e67d95275931203c2fce793db35885e989bfef549669f6c3",
"0xb2a809c4c04d43dc6f9aa1dc6b3ee6d24e6c11df499101e2fd562ef186df45fb",
"0xe9a990eaf88316462579016636edca924bfeefa36b575443e61c5db8520c9ae5",
"0xfc7740cc054ec9b02383efdf7ba128e3decf0fbeb0d5a6ce1e034c0a56d087ea",
"0xa483e414e3e5b0d2a287477c04bde0b56429b98ab89b673b6a1c7ed2aa30d46c",
"0x1bcba569c70adc2476be6e0a5a59c266f9072f85620880491c96412f0d58d2dd",
"0xf65b23fb608c4d186bdd02d7bf10696f2524be4dd2158dec39d913b7fea39932",
"0x838ee22bb5ff19af96246aeee49512bf2f785508e6303a650f443c7efa0d96b4",
"0x5f19e7375a9ebc868e00b89293768317f3144b25130c1e6a95c9b49ebd1a342b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

