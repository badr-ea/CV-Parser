import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

type navbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Navbar({ darkMode, toggleDarkMode }: navbarProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Toolbar
        variant={isDesktop ? "regular" : "dense"}
        sx={{
          px: {
            md: 20,
            xs: 1,
          },
          justifyContent: "flex-end",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button variant="text" color="inherit">
            Acueill
          </Button>
          <Button variant="text" color="inherit">
            Présentation
          </Button>
          <Button variant="text" color="inherit">
            Contact
          </Button>
          <IconButton color="inherit" onClick={toggleDarkMode} edge="start">
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <IconButton color="inherit" onClick={toggleDarkMode} edge="start">
            {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
