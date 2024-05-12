import React, { useState } from "react";
import { Button, Box, useMediaQuery } from "@mui/material";
import InputField from "./InputField";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import SelectField from "./SelectField"; // Import the custom SelectField component

export default function LanguagesFormStep() {
  const [languages, setLanguages] = useState([
    { language: "", proficiency: "" },
  ]);

  const proficiencyLevels = [
    { value: "A1", label: "Débutant (A1)" },
    { value: "A2", label: "Élémentaire (A2)" },
    { value: "B1", label: "Intermédiaire (B1)" },
    { value: "B2", label: "Intermédiaire supérieur (B2)" },
    { value: "C1", label: "Avancé (C1)" },
    { value: "C2", label: "Maîtrise (C2)" },
  ];

  const addLanguageField = () => {
    setLanguages([...languages, { language: "", proficiency: "" }]);
  };

  const removeLanguageField = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {languages.map((language, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2 }}>
          <InputField name={`languages[${index}].language`} label="Langue" />
          <SelectField
            name={`languages[${index}].proficiency`}
            label="Niveau de maîtrise"
            options={proficiencyLevels}
          />
          {!isDesktop ? (
            <Button
              variant="outlined"
              onClick={() => removeLanguageField(index)}
            >
              Supprimer
            </Button>
          ) : (
            <IconButton
              aria-label="delete"
              onClick={() => removeLanguageField(index)}
              size="small"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={addLanguageField}
        sx={{ alignSelf: "self-start" }}
      >
        Ajouter une langue
      </Button>
    </>
  );
}
