import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import { useMyContext } from "./MyContextProvider";
import Form from "./components/Form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import FormPage from "./pages/FormPage";

function App() {
  const darkMode = useMyContext().values.darkMode;

  console.log(darkMode);

  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <CssBaseline />
          <ScrollToTop />
          <Routes>
            <Route path="/CV-Parser" element={<HomePage />} />
            <Route path="/formulaire" element={<FormPage />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
