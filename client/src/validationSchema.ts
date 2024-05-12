import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Le nom complet est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Numéro de téléphone invalide")
    .required("Le numéro de téléphone est requis"),
  address: yup.string().required("L'adresse est requise"),
  linkedin: yup.string().url("URL LinkedIn invalide"),
  website: yup.string().url("URL du site Web invalide"),
  objective: yup.string().required("L'objectif est requis"),
  degree: yup.string().required("Le diplôme est requis"),
  institution: yup.string().required("Le nom de l'institution est requis"),
  location: yup.string().required("Le lieu est requis"),
  graduationYear: yup
    .number()
    .integer("L'année de graduation doit être un nombre valide")
    .required("L'année de graduation est requise"),
  jobTitle: yup.string().required("Le titre du poste est requis"),
  company: yup.string().required("Le nom de l'entreprise est requis"),
  jobLocation: yup.string().required("Le lieu du travail est requis"),
  employmentStartDate: yup.date().required("La date de début est requise"),
  employmentEndDate: yup.date().required("La date de fin est requise"),
  responsibilities: yup.string().required("Les responsabilités sont requises"),
  techSkills: yup.array().min(1, "Au moins une compétence est requise"),
  softSkills: yup.array().min(1, "Au moins une compétence est requise"),
  certifications: yup.string(),
  projectTitle: yup.string(),
  projectDescription: yup.string(),
  projectLink: yup.string().url("URL du projet invalide"),
  volunteerOrg: yup.string(),
  volunteerRole: yup.string(),
  volunteerStartDate: yup.date(),
  volunteerEndDate: yup.date(),
  volunteerDescription: yup.string(),
  language: yup.string(),
  proficiencyLevel: yup.string(),
  referenceName: yup.string(),
  referencePosition: yup.string(),
  referenceContact: yup.string(),
});
