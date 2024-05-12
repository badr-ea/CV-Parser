import { Box, Card, CardContent, Typography } from "@mui/material";
import InputField from "../components/InputField";
import * as yup from "yup";
import { intialValues } from "../schema";
import React, { useState } from "react";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import CommaSeparatedTextField from "./CommaSeparatedTextField";
import LanguagesFormStep from "./LanguagesFormStep";
import DegreesFormStep from "./DegreesFormStep";
import axios from "axios";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      await axios.post("http://localhost:5000/submit-form", values);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Card
        sx={{
          width: "75%",
          position: "absolute",
          left: "10%",
          top: "20%",
        }}
        raised={true}
      >
        <CardContent>
          <MultiStepForm
            initialValues={intialValues}
            onSubmit={(values) => {
              handleSubmit(values);
              console.log(values);
            }}
          >
            <FormStep
              stepName="Informations Personnelles"
              validationSchema={yup.object({
                firstName: yup.string().required("Le prénom est requis"),
                lastName: yup.string().required("Le nom complet est requis"),
                email: yup
                  .string()
                  .email("Email invalide")
                  .required("L'email est requis"),
                phone: yup
                  .string()
                  .matches(/^\d{10}$/, "Numéro de téléphone invalide")
                  .required("Le numéro de téléphone est requis"),
                address: yup.string().required("L'adresse est requise"),
              })}
            >
              <Box sx={{ display: "flex", gap: 4 }}>
                <InputField name="lastName" label="Nom" sx={{ flex: 1 }} />
                <InputField name="firstName" label="Prénom" sx={{ flex: 1 }} />
              </Box>
              <InputField name="email" label="Email" />
              <InputField name="phone" label="Numéro de Téléphone" />
              <InputField name="address" label="Adresse " />
            </FormStep>
            <FormStep
              stepName="Objectif "
              validationSchema={yup.object({
                objective: yup.string().required("L'objectif est requis"),
              })}
            >
              <InputField
                name="objective"
                label="Objectif"
                multiline
                rows={10}
                variant="filled"
              />
            </FormStep>
            <FormStep
              stepName="Formations"
              validationSchema={yup.array().of(
                yup.object().shape({
                  degree: yup.string().required("Le diplôme est requis"),
                  institution: yup
                    .string()
                    .required("Le nom de l'institution est requis"),
                  location: yup.string().required("Le lieu est requis"),
                  graduationYear: yup
                    .number()
                    .integer("L'année de graduation doit être un nombre valide")
                    .required("L'année de graduation est requise"),
                })
              )}
            >
              <DegreesFormStep />
            </FormStep>
            <FormStep
              stepName="Expérience Professionnelle"
              validationSchema={yup.object({
                jobTitle: yup.string().required("Le titre du poste est requis"),
                company: yup
                  .string()
                  .required("Le nom de l'entreprise est requis"),
                jobLocation: yup
                  .string()
                  .required("Le lieu du travail est requis"),
                employmentStartDate: yup
                  .string()
                  .matches(
                    /^\d{2}\/\d{2}\/\d{4}$/,
                    "La date doit être au format JJ/MM/AAAA"
                  )
                  .required("La date de début est requise"),
                employmentEndDate: yup
                  .string()
                  .matches(
                    /^\d{2}\/\d{2}\/\d{4}$/,
                    "La date doit être au format JJ/MM/AAAA"
                  )
                  .required("La date de fin est requise"),
              })}
            >
              <InputField name="jobTitle" label="Titre du Poste" />
              <InputField name="company" label="Nom de l'Entreprise" />
              <InputField name="jobLocation" label="Lieu" />
              <InputField
                name="employmentStartDate"
                label="Date de Début d'Emploi (JJ/MM/AAAA)"
              />
              <InputField
                name="employmentEndDate"
                label="Date de Fin d'Emploi (JJ/MM/AAAA)"
              />
            </FormStep>
            <FormStep
              stepName="Compétences"
              validationSchema={yup.object({
                techSkills: yup
                  .array()
                  .of(
                    yup
                      .string()
                      .trim()
                      .required("Au moins une compétence technique est requise")
                  )
                  .required("Au moins une compétence technique est requise"),
                softSkills: yup
                  .array()
                  .of(
                    yup
                      .string()
                      .trim()
                      .required("Au moins une compétence est requise")
                  )
                  .min(1, "Au moins une compétence est requise"),
              })}
            >
              <CommaSeparatedTextField
                name="techSkills"
                label="Compétences Techniques"
              />
              <CommaSeparatedTextField
                name="softSkills"
                label="Compétences Douces"
              />
            </FormStep>
            <FormStep stepName="Langues">
              <LanguagesFormStep />
            </FormStep>
          </MultiStepForm>
          {isSubmitted && (
            <Typography
              variant="h6"
              color="green"
              align="center"
              sx={{ mt: 5 }}
            >
              Le formulaire a été soumis avec succès!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
