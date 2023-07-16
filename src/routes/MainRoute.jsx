import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<PostsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
