import Banner from '@/components/Banner'
import Products from '@/components/Products'

import BannerImage from '../../../public/images/banner.png'
import Celular1 from '../../../public/images/celular1.png'
import Celular2 from '../../../public/images/celular2.png'
import Celular3 from '../../../public/images/celular3.jpg'
import { Main } from './styles'

const productsAPI = [
  {
    _id: "1",
    name: "Celular1",
    image: Celular1,
    price: 10,
    formattedPrice: "R$ 10.00",
    splitPrice: "R$ 10.00"
  },
  {
    _id: "2",
    name: "Celular2",
    image: Celular2,
    price: 15,
    formattedPrice: "R$ 15.00",
    splitPrice: "R$ 15.00"
  },
  {
    _id: "3",
    name: "Celular3",
    image: Celular3,
    price: 20,
    formattedPrice: "R$ 20.00",
    splitPrice: "R$ 20.00"
  },
  {
    _id: "4",
    name: "Celular1",
    image: Celular1,
    price: 10,
    formattedPrice: "R$ 10.00",
    splitPrice: "R$ 10.00"
  },
  {
    _id: "5",
    name: "Celular2",
    image: Celular2,
    price: 15,
    formattedPrice: "R$ 15.00",
    splitPrice: "R$ 15.00"
  },
  {
    _id: "6",
    name: "Celular3",
    image: Celular3,
    price: 20,
    formattedPrice: "R$ 20.00",
    splitPrice: "R$ 20.00"
  }
]

export default function Dashboard() {
  return (
    <Main>
      <>
      <Banner image={BannerImage} width={1140} height={325} />
      <Products products={productsAPI} />
      </>
      
      
    </Main>
  )
}
