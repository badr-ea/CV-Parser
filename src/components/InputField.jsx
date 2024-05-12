import { TextField } from "@mui/material";
import { FieldConfig, useField } from "formik";
import React from "react";

export default function InputField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      variant="standard"
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
