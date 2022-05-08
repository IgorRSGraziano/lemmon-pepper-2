import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "services/styles.json";

export const GlobalStyle = createGlobalStyle`
html,
body {
  cursor: default;
  padding: 0;
  margin: 0;
  background-color: ${colors.primaryPageBackground};
  color: ${colors.primaryTextColor};
  font-family: ${fonts.primaryFont}
}

a {
  color: inherit;
  text-decoration: none;
}

ul, li {
  list-style: none;
}

* {
  box-sizing: border-box;
}
`;

export const defaultContainer = (bgColor?: string, height?: string): string => `
  ${bgColor ? `background-color: ${bgColor};` : ""}
  ${height ? `height: ${height};` : ""}
  width: 100vw;
  margin: auto;
`;

export const defaultContent: string = `
  max-width: 1300px;
  margin: auto;
  padding: 0 25px;
`;

export const rem = (px: number): string => `${px / 16}rem`;
