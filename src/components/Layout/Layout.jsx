import React from "react";
import AppBar from "../AppBar/AppBar";
import RouteList from "../RouteList/RouteList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="lg">
        <Box component="main" sx={{ mt: 4 }}>
          <RouteList />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
