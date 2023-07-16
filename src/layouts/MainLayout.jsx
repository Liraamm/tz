import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import React from "react";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
