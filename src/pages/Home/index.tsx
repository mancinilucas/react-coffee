import { Header } from '../../components/Header'
import { ProductList } from '../../assets/coffee/productList'

import {
  HomeContainer,
  IntroCards,
  IntroContainer,
  IntroInfo,
  ShowcaseContainer,
} from './styles'

import heroImg from '../../assets/hero.svg'
import coffeIcon from '../../assets/coffee-icon.svg'
import chartIcon from '../../assets/chart-icon.svg'
import timerIcon from '../../assets/timer-icon.svg'
import packageIcon from '../../assets/package-icon.svg'

interface ProductListProps {
  id: number
  title: string
  description: string
  category: string[]
  price: number
  image: string
}

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <IntroContainer>
          <IntroInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <IntroCards>
              <ul className="card-template">
                <li className="card1">
                  <img src={chartIcon} alt="" />
                  <span>Compra simples e segura</span>
                </li>
                <li className="card2">
                  <img src={timerIcon} alt="" />
                  <span>Entrega rápida e rastreada</span>
                </li>
                <li className="card3">
                  <img src={packageIcon} alt="" />
                  <span>Embalagem mantém o café intacto</span>
                </li>
                <li className="card4">
                  <img src={coffeIcon} alt="" />
                  <span>O café chega fresquinho até você</span>
                </li>
              </ul>
            </IntroCards>
          </IntroInfo>

          <div>
            <img src={heroImg} alt="" />
          </div>
        </IntroContainer>

        <ShowcaseContainer>
          <h2>Nossos cafés</h2>
          <div>
            {ProductList.map((product: ProductListProps) => {
              return (
                <ul key={product.id} className="showcase-template">
                  <li>
                    <img src={product.image} alt="" />
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                  </li>
                </ul>
              )
            })}
          </div>
        </ShowcaseContainer>
      </HomeContainer>
    </>
  )
}
