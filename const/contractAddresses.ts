/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Ethereum } from "@thirdweb-dev/chains";
export const NETWORK = Ethereum;
export const clientID = "39c33483859c464d122c124e3693ca2e";
export const secretKey = "IJaUJfftZ0mMMRAf4tFSF53tJcIXhLQxm9LDU2o8n8w4J1iOVShMW7DYYN4MMKzb3C8SKwVFGy6eXOup1-SDzw";


// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xBC1221FbF0BCb88E59bD48f2066aCa7731068509";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xA46b048B089bb8ea1B5A371Be31dE934C288afb2";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://https://etherscan.io/";
