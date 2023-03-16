import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import { IProduct } from '@/types'

import {
  Main,
  Title,
  SubTitle,
  ShoppingCartContainer,
  Separator,
  ButtonContainer,
  DeleteIcon,
  Product,
  ProductName,
  ProductPrice,
  ShoppingCartPayment,
  PaymentTitle,
  PaymentValue,
  PaymentShipping,
  PaymentTotal,
  LoginTitle,
  InputGroup,
  Button
} from './styles'

export default function ShoppingCart() {
  const { 
    getProducts,
    deleteProduct,
    getTotalValue,
    getTotalProducts,
    getShippingValue,
    clearAll
  } = useContext(ShoppingCartContext)

  const [products, setProducts] = useState<IProduct[]>([])
  const [refresh, setRefresh] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const values = getProducts();
    setProducts(values);
  }, [getProducts, refresh])

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setRefresh(oldValue => oldValue + 1);
  }

  const getTokenLogin = async (api: string, email: string, password: string): Promise<string | null> => {
    const result = await fetch(`${api}/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' }
    });
    if (result.status !== 200) {
      return null;
    }
    const { token } = await result.json();
    return token;
  }

  const sellProducts = async (api: string, token: string, products: string[]): Promise<string | null> => {
    const result = await fetch(`${api}/products/sell`, {
      method: 'POST',
      body: JSON.stringify({ products }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (result.status !== 200) {
      return null;
    }
    return 'success';
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const api = 'http://localhost:8080';
    const token = await getTokenLogin(api, email, password);
    if (!token) {
      alert("Login inválido")
      setEmail('')
      setPassword('')
      return;
    }
    const productIds: string[] = [];
    products.map(product => productIds.push(product._id));
    const sell = await sellProducts(api, token, productIds)
    if (!sell) {
      alert("Compra inválida")
      setEmail('')
      setPassword('')
      return;
    }
    clearAll();
    router.push('/success');
  }

  return (products && products.length > 0 ? (
    <>
      <Head>
        <title>ImagineShop - Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Main>
        <Title>Meu Carrinho</Title>
        <SubTitle>Produtos</SubTitle>
        <ShoppingCartContainer>
          <section>
            <Separator></Separator>
            {
              products && products.map((product, index) => (
                <div key={index}>
                  <ButtonContainer>
                    <button onClick={() => handleDeleteProduct(product._id)}>
                      <DeleteIcon icon={faX}></DeleteIcon>
                    </button>
                  </ButtonContainer>
                  <Product>
                    <div>
                      <Image src={product.image} width={180} height={180} alt={product.name} />
                    </div>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </Product>
                  <Separator></Separator>
                </div>
              ))
            }
          </section>
          <section>
            <ShoppingCartPayment>
              <PaymentTitle>1. Resumo do pedido</PaymentTitle>
              <PaymentValue><span>{products.length} Produtos</span> <span>{getTotalProducts()}</span></PaymentValue>
              <PaymentShipping><span>Frete</span> <span>{getShippingValue()}</span></PaymentShipping>
              <PaymentTotal><span>Total</span> <span>{getTotalValue()}</span></PaymentTotal>
              <Separator></Separator>
              <LoginTitle>2. Login</LoginTitle>
              <InputGroup>
                <span>E-MAIL:</span>
                <input type="text" value={email || ''} onChange={(e) => setEmail(e.currentTarget.value)} />
              </InputGroup>
              <InputGroup>
                <span>SENHA:</span>
                <input type="password" value={password || ''} onChange={(e) => setPassword(e.currentTarget.value)} />
              </InputGroup>
              <Button type='submit' onClick={handleSubmit}>
                Continuar
              </Button>
            </ShoppingCartPayment>
          </section>
        </ShoppingCartContainer>
      </Main>
    </>
  ) : (
    <>
      <Head>
        <title>ImagineShop - Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Main>
        Sem produto
      </Main>
    </>
  ))
}
