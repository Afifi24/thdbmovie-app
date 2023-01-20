import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
--color-bg:#1f1f38;
--color-bg-variant:#2c2c6c;
--color-primary:#4db5ff;
--color-primary-variant:rgba(77,181,255,0.4);
--color-white:#fff;
--color-light:rgba(255,255,255,0.6);
--color-light-blue:  rgb(134, 253, 232);
--color-light-violet:  rgb(172, 182, 229);
--container-width-lg:80%;
--container-width-md:90%;
--transition:500ms;
  }
  body{
    background-color: var(--color-bg);
    color: var(--color-white);
    font-family: 'Montserrat', sans-serif;

  }
`;

export default GlobalStyle;
