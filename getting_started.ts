import { Web3 } from "web3";

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  const blockNumber = await web3.eth.getBlockNumber();
  console.log("Current block:", blockNumber);
}

main();

//web3.eth.getBlock()
//web3.eth.getBalance(address)
//web3.eth.getChainId()
//etc
