const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

let mnemonic;

if (fs.existsSync('secrets.json')) {
  const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  ({ mnemonic } = secrets);
} else {
  console.log('no secrets.json found. You can only deploy to ganache.');
  mnemonic = '';
}

module.exports = {
  networks: {
    ganache: {
      provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 20000000000,
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 20000000000,
    },
  },
};
