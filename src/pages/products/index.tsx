import Banner from '@/components/Banner'
import ProductList from '@/components/Products'

import BannerImage from '../../../public/images/banner.png'
import { Main } from './styles'


export default function Products({ productList }: any) {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
      <ProductList products={productList} />
    </Main>
  )
}
