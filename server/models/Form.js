const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  language: String,
  proficiency: String,
});

const degreeSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  location: String,
  graduationYear: String,
});

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  objective: String,
  degrees: [degreeSchema],
  jobTitle: String,
  company: String,
  jobLocation: String,
  employmentStartDate: String,
  employmentEndDate: String,
  techSkills: [String],
  softSkills: [String],
  languages: [languageSchema],
});

const Form = mongoose.model("Forms", formSchema);

module.exports = Form;
