import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import { Dict } from "./Components/Dict";
import {
  createTheme,
  ThemeProvider,
  ThemeProviderProps,
} from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <Dict />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
