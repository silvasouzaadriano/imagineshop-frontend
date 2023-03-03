import Banner from '@/components/Banner'
import Products from '@/components/Products'

import BannerImage from '../../../public/images/banner.png'
import { Main } from './styles'


export default function Dashboard({ productList }: any) {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
      <Products products={productList} />
    </Main>
  )
}
