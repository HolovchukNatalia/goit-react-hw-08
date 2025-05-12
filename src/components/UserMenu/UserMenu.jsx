import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/selectors";
import { Box, Typography, Button } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: { xs: 1, sm: 2 },
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: { xs: "6px 12px", sm: "8px 16px" },
        borderRadius: 2,
        width: "fit-content",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "white",
          fontWeight: 500,
          fontSize: { xs: "14px", sm: "16px" },
          textAlign: "center",
        }}
      >
        Hello, {userName}
      </Typography>

      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={handleLogOut}
        sx={{
          borderColor: "white",
          color: "white",
          textTransform: "none",
          fontSize: { xs: "12px", sm: "14px" },
          width: { xs: "100%", sm: "auto" },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
            borderColor: "white",
          },
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
