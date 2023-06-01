import styled from "styled-components";

export const MenuStyled = styled.nav`
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 3em 2em;
    height: 90vh;
    width: 100%;
    z-index: 3;
    background-color: ${({ theme }) => theme.colors.veryDarkViolet};
    background-image: url("/images/bg-pattern-mobile-nav.svg");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
    position: absolute;
    top: 6em;
    left: 0;
    display: ${({ open }) => (open ? "block" : "none")};
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: block;
  }

  div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
    font-size: 1.5em;
    font-weight: 700;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
      align-items: center;
      text-align: center;
      gap: 2em;
      font-size: 1em;
      a {
        color: ${({ theme }) => theme.colors.veryDarkViolet};

        &.border {
          border: 1px solid ${({ theme }) => theme.colors.veryDarkViolet};
          padding: 0.5em 2em;
        }

        &.border:hover {
          background-color: ${({ theme }) => theme.colors.veryDarkViolet};
          color: ${({ theme }) => theme.colors.veryLightGray};
        }
      }
    }
  }
`;
