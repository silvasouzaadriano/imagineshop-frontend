import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from "../../styles/utils"

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 12.5rem;
  background-color: #f4f4f4 ;
`

export const FooterContainer = styled.div`
  ${Container};
  display: grid;
  grid-template-columns: 130px auto 130px;

  padding: 2.5rem 0;
`

export const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-top: 8.125rem;
`

export const SocialNetworkList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
`

export const SocialNetworkIcon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: 1.875rem;
`