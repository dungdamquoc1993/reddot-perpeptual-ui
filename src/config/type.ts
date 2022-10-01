export type ConnectorName = 'network' | 'injected' | 'walletconnect';

export enum ChainId {
  kovan = 42,
  aurora = 1313161554,
  ropsten = 3,
}

export type ChainConfig = {
  chainId: number;
  chainName: string;
  rpcUrl: string;
  explorerUrl: string;
  multicall: string;
  nativeToken: {
    symbol: string;
    name: string;
    decimals: number;
  };
  tokens: {
    [symbol: string]: {
      address: string;
      name?: string;
      decimals: number;
      logo?: string;
    };
  };
};

export type Configuration = {
  defaultChainId: ChainId;
  chainConfig: Partial<Record<ChainId, ChainConfig>>;
};
