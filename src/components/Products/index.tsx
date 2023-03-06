import Link from "next/link";
import Image from 'next/image';
import { ProductContainer, ProductItem, ProductList, ProductName, ProductPrice, ProductSplitPrice, Title } from "./styles";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  formattedPrice: string;
  splitPrice: string;
}

interface ProductProps {
  products: Product[];
}

export default function Products({ products }: ProductProps) {
  return (
    <ProductContainer>
      <Title>
        <span>De</span>staques
      </Title>
      <ProductList>
        {products && products.map(product => (
          <ProductItem key={product._id}>
            <Link href={`/products/${product._id}`}>
              <Image src={product.image} width={230} height={230} alt='Product image'/>
            </Link>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
            <ProductSplitPrice>10x de {product.splitPrice} sem juros</ProductSplitPrice>
          </ProductItem>
        ))}
      </ProductList>
    </ProductContainer>
  )
}