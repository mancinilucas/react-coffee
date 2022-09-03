import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`
export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const LocationContainer = styled.div`
  display: flex;
  align-items: center;

  .map-icon {
    color: ${(props) => props.theme['purple-300']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-500']};
  }
`
