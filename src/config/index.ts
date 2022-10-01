import { kovan } from './kovan';
import { ChainConfig, ChainId, Configuration } from './type';
import { get, mapValues } from 'lodash';

export const config: Configuration = {
  chainConfig: {
    [ChainId.kovan]: kovan,
  },
  defaultChainId: ChainId.kovan,
};

export const supportedChainIds = Object.keys(config.chainConfig).map((t) => +t);

export const networkUrls = mapValues(config.chainConfig, (t) => t?.rpcUrl);

export const getNativeTokenSymbol = (chainId: number) => {
  return get(config.chainConfig, [chainId, 'nativeToken', 'symbol']);
};

export const getExplorerUrl = (chainId: ChainId) => {
  return get(config.chainConfig, [chainId, 'explorerUrl']);
};
