import styled from "styled-components";

export const AttributesSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin-top: 80px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding-inline: 10em;
    align-items: flex-start;
    margin-top: 300px;
  }
  .flex-column {
    gap: 1em;
    img {
      width: 86px;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      h3 {
        margin-top: 30px;
        font-size: 1.8em;
      }
      p {
        font-size: 1.5em;
      }
    }
  }

  .title {
    hr {
      display: none;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
      flex-direction: column;
      padding-inline: 1em;
      hr {
        display: block;
        width: 40%;
        margin: 20px 0;
        border: 1px solid ${({ theme }) => theme.colors.grayishBlue};
      }
      h2 {
        font-size: 6em;
      }
    }
  }
  h2 {
    margin-top: 20px;
    font-size: 3em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .flex-column {
    padding: 2em;
  }
`;
