import Image, { StaticImageData } from "next/image";
import { BannerContainer } from "./styles";

interface BannerProps {
  image: StaticImageData;
  width: number;
  height: number;
}

export default function Banner({ image, width, height}: BannerProps) {
  return(
    <BannerContainer>
      <Image src={image} width={width} height={height} alt="Banner"/>
    </BannerContainer>
  )
}