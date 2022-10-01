import { Interface } from '@ethersproject/abi';
import IERC20Abi from './IERC20.json';
import { IERC20Interface } from '../typechain/IERC20';

export const erc20Interface = new Interface(IERC20Abi) as IERC20Interface;
