const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
    interface,
    bytecode
} = require('./compile.js');
const mnemonic = 'tomato rate sheriff course end labor topic above curious this rail group'

const web3 = new Web3(new HDWalletProvider(
    mnemonic,
    'https://rinkeby.infura.io/v3/ff9cefedf8924477a6d236e5e36fc06b',
    0, 3

));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log('Contract is deployed by the manager with address ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: '0x' + bytecode
        })
        .send({
            gas: '2000000',
            from: accounts[0]
        })

    console.log('Contract deployed to address', result.options.address);
    //0xB0BC553Ce8815f62DbC24539d5d738ffD9f1011d
}
deploy();