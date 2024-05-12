import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";
import React from "react";

export default function SelectField({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </FormControl>
  );
}
