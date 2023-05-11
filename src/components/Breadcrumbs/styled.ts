import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BreadCrumbProps {
  isactive: boolean;
}

export const BreadCrumb = styled(Link)`
  color: ${({ isactive }: BreadCrumbProps) =>
    isactive ? '#000000' : '#cccccc'};
  pointer-events: ${({ isactive }: BreadCrumbProps) =>
    isactive ? 'none' : 'auto'};
  text-decoration: none;
`;

export const Arrow = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
