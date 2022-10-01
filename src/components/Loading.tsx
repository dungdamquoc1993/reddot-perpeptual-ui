// import imgLoading from '../assets/images/loading.svg';
import logo from '../logo.svg';

import styled from 'styled-components';

const Loading: React.FC = () => {
  return (
    <StyledContainer>
      <StyledImage src={logo} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-top: 50px;
`;

const StyledImage = styled.img`
  display: block;
  margin: auto;
  width: 300px;
  height: 300px;
`;

export default Loading;
