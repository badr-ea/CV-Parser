import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <Fab
          sx={{ position: "fixed", bottom: "20px", right: "20px" }}
          onClick={scrollUp}
          size="small"
        >
          <KeyboardArrowUp />
        </Fab>
      )}
    </>
  );
}
