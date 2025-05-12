import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { TextField, Box, Typography } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        mt: 3,
        mb: 3,
      }}
    >
      <Typography variant="h6" sx={{ color: "#2e7d32" }}>
        Find contacts by name
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        onChange={(e) => onFilter(e.target.value)}
        title="Enter contact"
        sx={{
          backgroundColor: "#f1f1f1",
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            padding: "8px 12px",
            fontSize: "16px",
            color: "#000",
            "& fieldset": {
              borderColor: "#000",
            },
            "&:hover fieldset": {
              borderColor: "#2e7d32",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2e7d32",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "16px",
            color: "#2e7d32",
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
