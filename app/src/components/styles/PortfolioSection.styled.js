import styled from "styled-components";

export const PortfolioSectionStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.darkViolet};
  background-image: url("/images/bg-pattern-how-we-work-mobile.svg");
  background-repeat: no-repeat;
  background-position: top right;
  color: ${({ theme }) => theme.colors.veryLightGray};
  padding: 6em 1em;
  margin-inline: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    margin-top: 180px;
    margin-inline: 10em;
    background-image: url("/images/bg-pattern-how-we-work-desktop.svg");
    background-size: contain;
  }

  .flex-column {
    gap: 2em;
    .title {
      h2 {
        line-height: 0.9em;
      }
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-inline: 6em;
      h2 {
        font-size: 1.1em;
      }

      a {
        font-size: 1.5em;
        font-weight: 700;
      }

      a:hover {
        background-color: ${({ theme }) => theme.colors.veryLightGray};
        color: ${({ theme }) => theme.colors.veryDarkViolet};
      }
    }
  }
`;
