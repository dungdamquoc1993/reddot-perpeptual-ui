import { useWeb3React } from '@web3-react/core';
import React, { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { config, getExplorerUrl } from '../config';

export type ExplorerLinkProps = {
  address: string | number;
  children: ReactNode;
  type?: 'address' | 'token' | 'tx' | 'blocks';
};

export const ExplorerLink: React.FC<ExplorerLinkProps> = ({ address, children, type }) => {
  const { chainId } = useWeb3React();
  const url = useMemo(() => {
    // return [getExplorerUrl(chainId), type || 'address', address].join('/');
    return '';
  }, [address, chainId, type]);

  return (
    <a target="_blank" href={url} rel="noreferrer">
      {children}
    </a>
  );
};

const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
