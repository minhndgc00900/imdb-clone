import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  @media only screen and (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1366px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const Loading = styled.h4`
  text-align: center;
`;
