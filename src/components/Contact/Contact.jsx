import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Contact = ({ name, number, id, onDelete, onEdit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isVerySmall = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        padding: isVerySmall ? "8px" : "12px",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: isVerySmall ? "4px" : "8px",
        gap: isMobile ? 2 : 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant={isVerySmall ? "body2" : "h6"}
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <a
          href={`tel:${number}`}
          style={{
            textDecoration: "none",
            color: "#00796b",
            fontSize: isVerySmall ? "12px" : "14px",
          }}
        >
          <Typography variant="body2" sx={{ color: "#00796b" }}>
            {number}
          </Typography>
        </a>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          justifyContent: isMobile ? "flex-start" : "flex-end",
        }}
      >
        <Button
          variant="contained"
          onClick={() => onEdit({ id, name, number })}
          sx={{
            textTransform: "none",
            padding: isVerySmall ? "4px 8px" : "6px 12px",
            backgroundColor: "#8c8c8c",
            "&:hover": {
              backgroundColor: "#0277bd",
            },
            fontSize: isVerySmall ? "12px" : "14px",
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={onDelete}
          sx={{
            textTransform: "none",
            padding: isVerySmall ? "4px 8px" : "6px 12px",
            backgroundColor: "#d32f2f",
            "&:hover": {
              backgroundColor: "#c62828",
            },
            fontSize: isVerySmall ? "12px" : "14px",
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
