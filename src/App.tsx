import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/defaults";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/globas";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
