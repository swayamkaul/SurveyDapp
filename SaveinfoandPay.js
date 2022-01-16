
const params = (new URL(document.location)).searchParams;
const resp = params.get('resp');
const responders = params.get('responders');

console.log('resp:',resp,'responders:',responders);

 import { providers } from "ethers";
 import { init } from "@textile/eth-storage";

const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");

superfluidInit=async function(){
const sf = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum),
});
await sf.initialize()

const walletAddress = await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [
      {
        eth_accounts: {}
      }
    ]
  });
      
  const user = sf.user({
      address: walletAddress[0],
      token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
  });

  await pool.createPool({ poolId: 1 });
  for(let i=0;i<responders.length;i++){
  await pool.giveShares({ poolId: 1, recipient: responders[i], shares: 100/ responders.length });
  }

  await pool.distributeToPool({ poolId: 1, amount: 1 });

}

superfluidInit();

textilee=async function(){

await window.ethereum.enable();
const provider = new providers.Web3Provider(window.ethereum);
const wallet = provider.getSigner();

const storage = await init(wallet);

const blob = new Blob(responses, { type: "text/plain" });
const file = new File([blob], "welcome.txt", {
  type: "text/plain",
  lastModified: new Date().getTime(),
});

await storage.addDeposit();

const { id, cid } = await storage.store(file);

const { request, deals } = await storage.status(id);
console.log(request.status_code);
console.log([...deals]);

}

textilee();
