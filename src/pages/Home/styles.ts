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
    font: bold 3rem/3.9rem 'Baloo 2', cursive;
    color: ${(props) => props.theme['brown-900']};
    margin-bottom: 1rem;
  }

  p {
    font: 1.25rem/1.6rem 'Roboto', sans-serif;
    color: ${(props) => props.theme['brown-800']};
    margin-bottom: 4rem;
  }
`

export const IntroCards = styled.div`
  width: 35.4rem;
  .card-template {
    display: grid;
    grid-template-columns: 14.5rem 18.375rem;
    grid-template-rows: repeat(2, 2rem);
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme['brown-500']};
      line-height: 1.3rem;
    }
  }

  ul li img {
    width: 2rem;
    height: 2rem;
  }
`

export const ShowcaseContainer = styled.div`
  margin-bottom: 9.8125rem;
  h2 {
    font: bold 2rem/2.6rem 'Baloo 2', cursive;
    color: ${(props) => props.theme['brown-800']};
    margin-bottom: 3.375rem;
  }

  .showcase-template {
    display: grid;
    grid-template-columns: repeat(4, 16rem);
    grid-template-rows: repeat(4, 19.375rem);
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }
`
