import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import PublicOutlet from "./components/PublicOutlet";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthContext";

const Root = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Root;
