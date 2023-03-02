import Image from "next/image";
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import Logo from "../../../public/images/logo.png"
import { Contact, FooterContainer, ImagineContainer, SocialNetworkIcon, SocialNetworkList, StyledFooter } from "./styles";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <ImagineContainer>
            <Image src={Logo} width={130} height={60} alt="Logo" />
          </ImagineContainer>
          <Contact>
            Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
          </Contact>
          <SocialNetworkList>
            <li><SocialNetworkIcon icon={faFacebookSquare}/></li>
            <li><SocialNetworkIcon icon={faInstagram}/></li>
            <li><SocialNetworkIcon icon={faYoutube}/></li>
          </SocialNetworkList>
        </FooterContainer>
      </StyledFooter>
    </>
  )
}