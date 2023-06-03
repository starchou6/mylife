import { ethers } from "ethers";

// 连接以太坊
const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/Raan--soOdX6A-jKRNWNv1_o_I29KvjE`)

export const test = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`);
}

export const getBalance = async (address) => {
    const balance = await provider.getBalance(address);
    console.log(`ETH Balance of ${address} : ${ethers.utils.formatEther(balance)} ETH`);
}