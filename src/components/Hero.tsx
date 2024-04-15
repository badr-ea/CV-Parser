import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import HeroImage from "../images/1.avif";
import { useTheme } from "@mui/material/styles";
import { useMyContext } from "../MyContextProvider";

export default function Hero() {
  const theme = useTheme();
  const darkMode = useMyContext().values.darkMode;
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const heroRef = useMyContext().refs.heroRef;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "85vh",
          md: "100vh",
        },
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={heroRef}
    >
      {/* Pseudo-element for overlay with filter */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: darkMode ? "rgba(0, 0, 0, 0.5)" : "none",
          transition: "background 0.3s ease-in-out",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "35%",
            md: "25%",
          },
          left: "10%",
          color: "white", // Set color of text to white
          width: "80vw",
        }}
      >
        <Typography variant={isDesktop ? "h4" : "h1"}>
          CV-Parser plateforme
        </Typography>
        <Typography variant={isDesktop ? "subtitle2" : "h6"} gutterBottom>
          Révolutionnez votre recrutement avec notre analyseur de CV.
        </Typography>
        <Button
          variant="contained"
          sx={{ my: 2 }}
          size={isDesktop ? "small" : "large"}
        >
          Testez le logiciel
        </Button>
      </Box>
    </Box>
  );
}
