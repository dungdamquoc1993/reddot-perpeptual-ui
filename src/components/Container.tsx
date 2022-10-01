import styled from 'styled-components';
import { screenUp } from '../utils/styles';

export const StyledContainer = styled.div`
  display: block;
  position: relative;
  width: min(100% - 1.5rem, 1070px);
  margin-inline: auto;
  padding-top: 1.25rem;
  margin-bottom: 4rem;
  ${screenUp('lg')`
    padding-top: 2rem;
  `}
`;

export const StyledBankContainer = styled.div`
  display: block;
  position: relative;
  width: min(100% - 1.5rem, 552px);
  margin-inline: auto;
  padding-top: 1.25rem;
  margin-bottom: 4rem;
  ${screenUp('lg')`
    padding-top: 2rem;
  `}
`;
