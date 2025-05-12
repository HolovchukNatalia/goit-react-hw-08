import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import MuiAppBar from "@mui/material/AppBar"; // перейменовано
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <MuiAppBar
        position="static"
        sx={{ backgroundColor: "#407a19", fontFamily: "'Poppins', sans-serif" }}
        enableColorOnDark
      >
        <Container
          maxWidth="lg"
          sx={{
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Navigation />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ThemeProvider>
  );
};

export default AppBar;
