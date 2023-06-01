import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    padding-inline: 10em;
    img {
      width: 10%;
    }
  }

  button {
    border: none;
    background-color: transparent;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
`;
