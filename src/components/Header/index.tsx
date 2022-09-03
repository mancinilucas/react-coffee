import mainLogo from '../../assets/main-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  LocationContainer,
  NavigationContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={mainLogo} alt="Logo" />
      </div>
      <NavigationContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" className="map-icon" />
          <span>Itamaraju, BA</span>
        </LocationContainer>
        <div>
          <ShoppingCart size={18} weight="fill" className="chart-icon" />
        </div>
      </NavigationContainer>
    </HeaderContainer>
  )
}
