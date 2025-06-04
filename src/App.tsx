import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/defaults";

function App() {
  return <ThemeProvider theme={DefaultTheme}></ThemeProvider>;
}

export default App;
