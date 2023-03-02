import Image from "next/image"
import Link from "next/link"

import Logo from '../../../public/images/logo.png'
import ShoppingCartLogo from '../../../public/images/carrinho.png'

import { MenuItem, MenuList, Navbar, StyledHeader } from './styles'


export default function Header () {
  const number = 0
  return (
    <StyledHeader>
      <Navbar>
        <Image src={Logo} width={200} height={100} alt="Logo"/>
        <MenuList>
          <MenuItem>
            <Link href="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">
              Sobre
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/shopping-cart">
              <Image src={ShoppingCartLogo} width={52} height={52} alt="shopping cart image"/>
            </Link>
          </MenuItem>
        </MenuList>
      </Navbar>
    </StyledHeader>
  )
}