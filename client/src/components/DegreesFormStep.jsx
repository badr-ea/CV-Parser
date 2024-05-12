import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InputField from "./InputField";

export default function DegreesFormStep() {
  const [degrees, setDegrees] = useState([
    { degree: "", institution: "", location: "", graduationYear: "" },
  ]);
  console.log(degrees);

  const addDegreeField = () => {
    setDegrees([
      ...degrees,
      { degree: "", institution: "", location: "", graduationYear: "" },
    ]);
  };

  const removeDegreeField = (index) => {
    const updatedDegrees = degrees.filter((degree, idx) => idx !== index);
    setDegrees(updatedDegrees);
  };
  return (
    <>
      {degrees.map((degree, index) => (
        <>
          <Typography variant="h6">Formation {index + 1}</Typography>
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <InputField name={`degrees[${index}].degree`} label="Diplôme" />
            <InputField
              name={`degrees[${index}].institution`}
              label="Nom de l'Institution"
            />
            <InputField name={`degrees[${index}].location`} label="Lieu" />
            <InputField
              name={`degrees[${index}].graduationYear`}
              label="Année de Graduation"
            />
            <Button
              variant="contained"
              sx={{ width: { xs: "50%", md: "auto" } }}
              color="secondary"
              onClick={() => removeDegreeField(index)}
            >
              SUPPRIMER
            </Button>
          </Box>
        </>
      ))}
      <Button variant="contained" onClick={addDegreeField}>
        AJOUTER UNE FORMATION
      </Button>
    </>
  );
}
