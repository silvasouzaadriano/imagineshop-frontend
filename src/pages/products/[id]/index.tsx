import Image from 'next/image';
import Banner from "@/components/Banner";
import {
  ProductContainer,
  ProductDetail,
  ImageContainer,
  ProductName,
  ProductPrice,
  ProductSplitPrice,
  Button,
  SummaryTitle,
  Summary
} from './styles';

import BannerImage from '../../../../public/images/banner2.png';
import FakeProductImage from '../../../../public/images/celular1.png';

export default function ProductId() {
  return (
    <ProductContainer>
      <Banner image={BannerImage} width={1140} height={145} />
      <ProductDetail>
        <ImageContainer>
          <Image src={FakeProductImage} width={200} height={200} alt={'Fake product name'} />
        </ImageContainer>
        <div>
          <ProductName>Celular 1</ProductName>
          <ProductPrice>R$ 10,00</ProductPrice>
          <ProductSplitPrice>10x de R$ 10,00 sem juros</ProductSplitPrice>
          <Button>Adicionar ao carrinho</Button>
          <small>
            Meu Celular 1
          </small>
        </div>
      </ProductDetail>
      <SummaryTitle><span>Inf</span>ormações do produto</SummaryTitle>
      <Summary>
        Este é o meu Celular 1
      </Summary>
    </ProductContainer>
  )
}