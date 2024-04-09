import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function Features() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        py: {
          xs: "80px",
        },
      }}
    >
      <Container>
        <Typography
          variant={isDesktop ? "h5" : "h3"}
          fontWeight={"bold"}
          textAlign={"center"}
          gutterBottom
        >
          L'ANALYSE DE CV
        </Typography>
        <Typography paragraph align="center">
          L'analyse de CV est un processus automatisé qui extrait et organise
          les informations clés à partir de CV (curriculum vitae). Elle permet
          aux recruteurs de traiter efficacement les candidatures, en
          identifiant rapidement les compétences, l'expérience et l'éducation
          des candidats. Cette technologie accélère le processus de recrutement
          et garantit une meilleure adéquation entre les candidats et les postes
          vacants.
        </Typography>
      </Container>
    </Box>
  );
}
