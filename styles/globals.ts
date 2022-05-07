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

* {
  box-sizing: border-box;
}
`;
