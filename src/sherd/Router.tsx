import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Detail from "../page/Detail";
import CreatePage from "../page/CreatePage";
import Login from "../page/Login";
import Signup from "../page/Signup";
import MyPage from "../page/MyPage";
import UpdatePage from "../page/UpdatePage";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feeds/:id " element={<Detail />} />
          <Route path="/detail" element={<CreatePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/updatepage" element={<UpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
