import { ChainConfig } from './type';

export const kovan: ChainConfig = {
  chainId: 42,
  rpcUrl: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  explorerUrl: 'https://kovan.etherscan.io',
  chainName: 'kovan',
  multicall: '0xf2211cf50cbE6Ac3b0865e6D7C283F4FbE114B88',
  nativeToken: {
    symbol: 'ETH',
    name: 'ETH',
    decimals: 18,
  },
  tokens: {
    WETH: {
      address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
      decimals: 18,
      name: 'WETH',
    },
  },
};
