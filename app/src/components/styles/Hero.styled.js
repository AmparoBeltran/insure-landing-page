import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row-reverse;
  }

  .image-intro-mobile {
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }

  .image-intro-desktop {
    display: none;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: block;
      position: absolute;
      z-index: 1;
      bottom: 0;
      right: 170px;
      width: 700px;
    }
  }

  .hero {
    background-color: ${({ theme }) => theme.colors.darkViolet};
    color: ${({ theme }) => theme.colors.veryLightGray};
    position: relative;
    &::before {
      content: "";
      width: 168px;
      aspect-ratio: 168/165;
      background-image: url(/images/bg-pattern-intro-left-mobile.svg);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0% 0%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url(/images/bg-pattern-intro-right-desktop.svg);
        width: 436px;
        aspect-ratio: 436/593;
        right: 0;
        left: unset;
      }
    }

    &::after {
      content: "";
      width: 124px;
      aspect-ratio: 124/330;
      background-image: url(/images/bg-pattern-intro-right-mobile.svg);
      background-repeat: no-repeat;
      background-size: 100%;
      position: absolute;
      top: 66%;
      right: 0px;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url(/images/bg-pattern-intro-left-desktop.svg);
        width: 195px;
        aspect-ratio: 195/504;
        left: 0px;
        top: 80%;
      }
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      align-items: flex-start;
      width: 100vw;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em 2em;
    position: relative;
    z-index: 2;
    hr {
      display: none;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 1000px;
      padding-inline-start: 10em;
      padding-bottom: 7em;
      align-items: flex-start;
      gap: 3em;
      margin-top: 60px;
      p {
        font-size: 1.6em;
      }
      hr {
        display: block;
        width: 30%;
        margin: 20px 0;
        border: 1px solid ${({ theme }) => theme.colors.veryLightGray};
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    a {
      font-size: 1.5em;
      font-weight: 700;
    }
  }
  a.border {
    :hover {
      background-color: ${({ theme }) => theme.colors.veryLightGray};
      color: ${({ theme }) => theme.colors.veryDarkViolet};
    }
  }
`;
