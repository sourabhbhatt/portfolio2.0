import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // background-color: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.dark};
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.headings.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.headings.h1.fontWeight};
    color: ${({ theme }) => theme.colors.text.dark};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.headings.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.headings.h2.fontWeight};
    color: ${({ theme }) => theme.colors.text.dark};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.headings.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.headings.h3.fontWeight};
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

export default GlobalStyle;
