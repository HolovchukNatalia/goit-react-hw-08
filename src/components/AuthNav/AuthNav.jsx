import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";

const AuthNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        gap: isMobile ? 1 : 3,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Button
        component={NavLink}
        to="/login"
        sx={{
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: isMobile ? "15px" : "16px",
          padding: isMobile ? "6px 12px" : "8px 16px",
          width: isMobile ? "100%" : "auto",
          "&.active": {
            borderBottom: "3px solid #006400",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        Login
      </Button>
      <Button
        component={NavLink}
        to="/register"
        sx={{
          color: "white",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: isMobile ? "15px" : "16px",
          padding: isMobile ? "6px 12px" : "8px 16px",
          width: isMobile ? "100%" : "auto",
          "&.active": {
            borderBottom: "3px solid #006400",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default AuthNav;
