import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '../../styles/utils';

export const Main = styled.main`
  ${Container};
  color: #000;
`;

export const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 5.625rem 0;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
`;

export const ShoppingCartContainer = styled.div`
  display: grid;
  grid-template-columns: 780px auto;
  gap: 1.5rem;
  min-height: 800px;
`;

export const Separator = styled.hr`
  border: 1px solid #c8c9c3;
  border-radius: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.8rem 0;

  button {
    border: unset;
    background: unset;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: auto 350px auto;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  place-self: start end;
`;
