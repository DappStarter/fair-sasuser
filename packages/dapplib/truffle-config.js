require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area frame foot current rifle still hole impulse light army genius'; 
let testAccounts = [
"0x8595d5649b949a3a8e9554b7ba66cd7df622e647772d1fe9acad70b103c3b5f0",
"0x1ddc0387b474540e2ba23e294e332009f8606f81cd459a4b3a66ea94ee45ad06",
"0xd78d46b51d158d53b86290c09e7d22bd95faaeb6f7fc762c71b84725e6ed6dcc",
"0x8d0f6a5429e9ab655a9371d2653a82b1dbb39cc978233fbe39cdc4f42fe8d409",
"0xc1dbaa62817a862c02453e3af58b14e3d25dd4489a5b14cf042d057d9eb393b6",
"0xc22963973bb0c6be6a37c3b15f2c16024c3bce4db3861cd1b6bd47e8f2d15ee0",
"0xb83bd864916011b419cf516315fab0203ff9a76e00a854d8ad6697abcbe8e37b",
"0x4869ab69020bd889748ebe23ba2012e39f9439bf143086ddd3ee37ad1b898f4c",
"0x74db2cf4ba9e851e9a99e555e7adae1372b07643dca13cd815987cfff8024115",
"0x8ea5251349f26bf0be18d57f9ed4d28e8f3a0418b4694b4a3804fead46a6d523"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


