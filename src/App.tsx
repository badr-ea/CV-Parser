import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Features />
    </ThemeProvider>
  );
}

export default App;
