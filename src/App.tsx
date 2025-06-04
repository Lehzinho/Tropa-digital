import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/globas";
import { authRouter } from "./routes/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <RouterProvider router={authRouter} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
