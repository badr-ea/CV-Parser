import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useTheme } from "@mui/material/styles";
import { useMyContext } from "../MyContextProvider";
import { useNavigate } from "react-router";

interface NavbarProps {
  isHome?: boolean;
}

export default function Navbar({ isHome = false }: NavbarProps) {
  const theme = useTheme();
  const { values, setValues } = useMyContext();
  const darkMode = values.darkMode;
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const { heroRef, featuresRef } = useMyContext().refs;
  const [open, setOpen] = useState(false);

  const scrollToSection = (ref: React.MutableRefObject<any>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setValues((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
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
          {isHome ? (
            <>
              <Button
                variant="text"
                color="inherit"
                onClick={() => scrollToSection(heroRef)}
              >
                Acueill
              </Button>
              <Button
                variant="text"
                color="inherit"
                onClick={() => scrollToSection(featuresRef)}
              >
                Présentation
              </Button>
              <Button variant="text" color="inherit">
                Contact
              </Button>{" "}
            </>
          ) : (
            <IconButton color="inherit" onClick={() => navigate("/CV-Parser")}>
              <HomeIcon />
            </IconButton>
          )}
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
          {isHome ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => navigate("/CV-Parser")}>
              <HomeIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
      <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Button
            variant="text"
            color="inherit"
            sx={(theme) => ({
              width: "100%",
              "&:hover": { color: theme.palette.info.main },
            })}
            onClick={() => scrollToSection(heroRef)}
          >
            Acueill
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={(theme) => ({
              width: "100%",
              "&:hover": { color: theme.palette.info.main },
            })}
            onClick={() => scrollToSection(featuresRef)}
          >
            Présentation
          </Button>
          <Button
            variant="text"
            color="inherit"
            sx={(theme) => ({
              width: "100%",
              "&:hover": { color: theme.palette.info.main },
            })}
          >
            Contact
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
