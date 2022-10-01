import React from 'react';
import styled from 'styled-components';
import NO_NAME from '../assets/tokens/NO_NAME.png';
import WETH from '../assets/tokens/WETH.png';
import WBTC from '../assets/tokens/WBTC.png';
import USDT from '../assets/tokens/USDT.png';
import USDC from '../assets/tokens/USDC.png';

export type TokenSymbolProps = {
  symbol: string;
  size?: string;
  autoHeight?: boolean;
};

const logosBySymbol: { [title: string]: string } = {
  DEFAULT: NO_NAME,
  WETH: WETH,
  WBTC: WBTC,
  USDT: USDT,
  USDC: USDC,
};

export const TokenSymbol: React.FC<TokenSymbolProps> = ({ symbol, size = 32 }) => {
  return (
    <StyledImage
      className="token-symbol"
      src={logosBySymbol[symbol?.toUpperCase()] || logosBySymbol.DEFAULT}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  );
};

const StyledImage = styled.img`
  display: inline-block;
  border-radius: 100%;
`;
