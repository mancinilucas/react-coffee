import { HomeContainer, IntroCards, IntroContainer, IntroInfo } from './styles'

import heroImg from '../../assets/hero.svg'
import coffeeCard from '../../assets/coffee-card.svg'
import coffeIcon from '../../assets/coffee-icon.svg'
import chartIcon from '../../assets/chart-icon.svg'
import timerIcon from '../../assets/timer-icon.svg'
import packageIcon from '../../assets/package-icon.svg'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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

      <div className="vitrine">
        <h2>Nossos cafés</h2>
        <div>
          <ul>
            <li>
              <img src={coffeeCard} alt="" />
            </li>
            <li>
              <img src={coffeeCard} alt="" />
            </li>
            <li>
              <img src={coffeeCard} alt="" />
            </li>
            <li>
              <img src={coffeeCard} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </HomeContainer>
  )
}
