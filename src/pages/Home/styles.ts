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

  li {
    background-color: ${(props) => props.theme['gray-100']};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 19.375rem;
    padding: 0 1.25rem;

    img {
      width: 7.5rem;
      height: 7.5rem;
      position: relative;
      left: calc(50% - 7.5rem / 2);
      top: -1.25rem;
    }

    .product-category {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      span {
        background-color: ${(props) => props.theme['yellow-100']};
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span > p {
        font: bold 0.625rem/0.8rem 'Roboto', sans-serif;
        color: ${(props) => props.theme['yellow-500']};
        text-transform: uppercase;
      }
    }

    strong {
      margin-top: 1rem;
      font: bold 1.25rem/1.6 'Baloo 2', cursive;
      color: ${(props) => props.theme['brown-800']};
      text-align: center;
    }

    p {
      font: 0.875rem/1.3rem 'Roboto', sans-serif;
      color: ${(props) => props.theme['brown-300']};
      text-align: center;
    }

    .product-chart {
      width: 13rem;
      display: flex;
      align-items: center;
      margin: 1.5rem 0.25rem 1.25rem;

      div:first-child {
        width: 4.1875rem;
        height: 2rem;
        font: 0.875rem/1.3rem 'Roboto', sans-serif;
        color: ${(props) => props.theme['brown-500']};
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          margin-top: 0;
          font: 800 1.5rem/1.6rem 'Baloo 2', cursive;
          color: ${(props) => props.theme['brown-500']};
        }
      }

      .product-chart-quantity {
        background-color: ${(props) => props.theme['gray-300']};
        padding: 8.5px 8px;
        margin-left: 23px;
        width: 72px;
        height: 38px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 6px;

        button {
          border: none;
          background-color: ${(props) => props.theme['gray-300']};
        }

        .quantity-icon {
          color: ${(props) => props.theme['purple-500']};
        }
      }

      .chart-button {
        margin-left: 0.5rem;

        button {
          border: none;
          border-radius: 6px;
          width: 38px;
          height: 38px;
          background-color: ${(props) => props.theme['purple-500']};
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            color: ${(props) => props.theme['gray-100']};
          }
        }
      }
    }
  }
`
