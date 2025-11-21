import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";

import Navbar from "./landing_page/NavBar.jsx";
import HomePage from "./landing_page/home/HomePage.jsx";
import About from "./landing_page/about/About.jsx";
import NoticePage from "./landing_page/notice/NoticePage.jsx";
import PyqMain from "./landing_page/pyq/PyqMainj.jsx";
import ResultMain from "./landing_page/result/ResultMain.jsx";
import TopperPage from "./landing_page/topper/Topperpage.jsx";
import Footer from "./landing_page/Footer.jsx";

import LoginPage from "./component/LoginPage.jsx";
import Register from "./component/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./landing_page/Profile.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ToastContainer />
    <Routes>
      {/* PUBLIC ROUTES (NO NAVBAR / NO FOOTER) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* ALL PROTECTED ROUTES */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          </PrivateRoute>
        }
      >
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="notice" element={<NoticePage />} />
        {/* <Route path="pyq" element={<PyqMain />} /> */}
        <Route path="result" element={<ResultMain />} />
        <Route path="topper" element={<TopperPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
