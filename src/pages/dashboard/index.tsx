import Banner from '@/components/Banner'

import BannerImage from '../../../public/images/banner.png'
import { Main } from './styles'

export default function Dashboard() {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
    </Main>
  )
}
