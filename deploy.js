const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const mnemonic = 'tomato rate sheriff course end labor topic above curious this rail group'

const web3 = new Web3(new HDWalletProvider(
    mnemonic,
    'https://rinkeby.infura.io/v3/ff9cefedf8924477a6d236e5e36fc06b',

));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
}
deploy();