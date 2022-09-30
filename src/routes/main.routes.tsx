import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import { LikedRepo } from "../Pages/likedRepo";

export const RepoRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="liked-repo" element={<LikedRepo />} />
      </Routes>
    </BrowserRouter>
  );
};
