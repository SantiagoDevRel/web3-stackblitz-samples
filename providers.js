const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

async function main() {
  console.log("Before setting options:", web3.currentProvider);

  web3.setProvider("https://binance.llamarpc.com");

  web3.currentProvider.httpProviderOptions = {
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  console.log("After setting options:", web3.currentProvider);
}

main();
