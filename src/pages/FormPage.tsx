import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  styled,
  Box,
  IconButton,
} from "@mui/material";
import Navbar from "../components/Navbar";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Form from "../components/Form";
import { CheckCircle, CloudUpload, Delete, Error } from "@mui/icons-material";
import axios from "axios";

const FormPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState({ msg: "", status: false });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleOptionSelect = (option: string) => {
    if (option === "form") {
      setShowOptions(false);
    }
    setSelectedOption(option);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      setIsSubmitted({
        msg: "Le fichier a été téléversé avec succès ",
        status: true,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsSubmitted({
        msg: "Le fichier doit être au format Word ou PDF ",
        status: false,
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedFile(fileList[0]);
    }
  };

  return (
    <>
      <Navbar />
      {showOptions && (
        <Card
          sx={{
            maxWidth: 400,
            mx: "auto",
            marginTop: "5rem",
            textAlign: "center",
          }}
          raised={true}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              style={{ margin: "1rem" }}
            >
              Choisissez comment fournir les informations du CV
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "0.5rem" }}
                  onClick={() => handleOptionSelect("form")}
                  startIcon={<EditNoteIcon />}
                >
                  Remplir le formulaire
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "0.5rem" }}
                  onClick={() => handleOptionSelect("file")}
                  startIcon={<FileUploadIcon />}
                >
                  Téléverser un fichier
                </Button>
                {selectedOption === "file" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      mt: 4,
                    }}
                  >
                    <Button
                      component="label"
                      role={undefined}
                      variant="contained"
                    >
                      Importer un fichier
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {selectedFile && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <IconButton
                          color="success"
                          size="large"
                          onClick={handleFileUpload}
                        >
                          <CloudUpload />
                        </IconButton>
                        <IconButton
                          size="large"
                          onClick={() => setSelectedFile(null)}
                        >
                          <Delete />
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                )}
                {isSubmitted !== null && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 2,
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color={isSubmitted.status ? "green" : "red"}
                      fontWeight="bold"
                    >
                      {isSubmitted.msg}
                    </Typography>
                    {isSubmitted.status ? (
                      <CheckCircle fontSize="inherit" color="success" />
                    ) : (
                      <Error
                        fontSize="inherit"
                        sx={{ display: "inline" }}
                        color="error"
                      />
                    )}
                  </Box>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      {selectedOption === "form" && <Form />}
    </>
  );
};

export default FormPage;
