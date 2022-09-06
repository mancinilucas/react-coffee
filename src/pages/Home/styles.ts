import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  padding: 5.75rem 0;

  img {
    width: 29.75rem;
  }
`
export const IntroInfo = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;

  h1 {
    font: bold 3rem/62.4px 'Baloo 2', cursive;
    color: ${(props) => props.theme['brown-900']};
  }

  p {
    font: 1.25rem/26px 'Roboto', sans-serif;
    color: ${(props) => props.theme['brown-800']};
    margin-bottom: 4rem;
  }
`

export const IntroCards = styled.div`
  width: 35.4rem;
  .card-template {
    display: grid;
    grid-template-columns: 231px 294px;
    grid-template-rows: repeat(2, 32px);
    grid-column-gap: 40px;
    grid-row-gap: 20px;
  }

  .card1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .card2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .card3 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .card4 {
    grid-area: 2 / 2 / 3 / 3;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  ul li img {
    width: 2rem;
    height: 2rem;
  }
`
