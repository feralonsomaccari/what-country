import React from "react";
import Home from "./components/Home/Home";
import MainTheme from "./themes/MainTheme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div id="app">
      <ThemeProvider theme={MainTheme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
