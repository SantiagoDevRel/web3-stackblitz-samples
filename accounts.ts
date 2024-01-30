import { Web3 } from "web3";

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  //create a new account
  const account = web3.eth.accounts.create();
  console.log("Account:", account);

  //create a wallet with 1 account inside
  const wallet = web3.eth.accounts.wallet.create(1);
  console.log("Wallet:", wallet);

  //hash message
  //"\\x19Ethereum Signed Message:\\n" + message.length + message
  console.log("Hash:", web3.eth.accounts.hashMessage("Hello web3"));

  //sign message
  console.log("Signature:", account.sign("Hello web3"));
}

main();

//web3.eth.accounts.signTransaction()
//web3.eth.accounts.wallet.clear()
//etc
