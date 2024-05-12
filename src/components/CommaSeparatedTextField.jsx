import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function CommaSeparatedTextField({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const inputArray = inputValue.split(",").map((item) => item.trim());
    helpers.setValue(inputArray);
  };

  return (
    <TextField
      variant="standard"
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      onChange={handleInputChange}
    />
  );
}
