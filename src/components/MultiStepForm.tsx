import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import React, { useState } from "react";
import FormNav from "./FormNav";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

export default function MultiStepForm({
  children,
  initialValues,
  onSubmit,
}: Props) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: FormikValues) => {
    setStepNumber((prev) => prev + 1);
    setSnapshot(values);
  };
  const previous = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber((prev) => prev - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Formik
      initialValues={snapshot}
      validationSchema={step.props.validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          {!isDesktop && (
            <Stepper activeStep={stepNumber}>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          )}
          {step}
          <FormNav
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 0}
            onBackClick={() => previous(formik.values)}
          />{" "}
        </Form>
      )}
    </Formik>
  );
}

export const FormStep = ({ stepName = "", children }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isDesktop = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}
    >
      {isDesktop && <Typography variant="h6">{stepName}</Typography>}
      {children}
    </Box>
  );
};
