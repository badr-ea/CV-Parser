import { Send } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { FormikValues } from "formik";
import React from "react";

interface Props {
  hasPrevious?: boolean;
  onBackClick: (values: FormikValues) => void;
  isLastStep: boolean;
}

export default function FormNav(props: Props) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}
    >
      {props.hasPrevious && (
        <Button variant="contained" color="inherit" onClick={props.onBackClick}>
          Retour
        </Button>
      )}
      <Button
        type="submit"
        color="primary"
        variant="contained"
        endIcon={props.isLastStep && <Send />}
      >
        {props.isLastStep ? "Envoyer" : "Suivant"}
      </Button>
    </Box>
  );
}
