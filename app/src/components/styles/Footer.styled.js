import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  background-image: url("/images/bg-pattern-footer-mobile.svg");
  background-repeat: no-repeat;
  background-position: top;
  margin-top: 160px;
  padding: 5em 0;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    background-image: url("/images/bg-pattern-footer-desktop.svg");
    background-position: top left;
  }

  a {
    color: ${({ theme }) => theme.colors.veryDarkViolet};
    font-size: 1em;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
  span {
    text-transform: uppercase;
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.darkGrayishViolet};
    font-weight: 700;
  }
  .company-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-start;
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 10em;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 0.8em;
    img:hover {
      filter: brightness(0);
    }
  }

  hr {
    display: block;
    margin-inline: 2em;
    border: 1px solid ${({ theme }) => theme.colors.darkGrayishViolet};
    @media (min-width: ${({ theme }) => theme.desktop}) {
      margin-inline: 10em;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding-inline: 10em;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2em;
    div {
      display: flex;
      flex-direction: column;
      gap: 0.8em;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-start;
    }
  }
`;
