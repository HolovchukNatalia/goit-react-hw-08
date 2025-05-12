import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? 1 : 3,
        mt: isMobile ? 2 : 0,
      }}
    >
      {[
        { to: "/", label: "Home" },
        { to: "/contacts", label: "Contacts" },
      ].map(({ to, label }) => (
        <Button
          key={to}
          component={NavLink}
          to={to}
          disableRipple
          sx={{
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: isMobile ? "15px" : "16px",
            px: isMobile ? 1.5 : 2,
            py: isMobile ? 0.5 : 1,
            mb: isMobile ? 1 : 0,
            borderRadius: 1,
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },
            "&.active": {
              borderBottom: isMobile ? "none" : "3px solid #006400",
              backgroundColor: isMobile
                ? "rgba(255,255,255,0.1)"
                : "transparent",
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
