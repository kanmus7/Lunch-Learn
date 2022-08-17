import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import LunchAndLearn from "pages/LunchAndLearn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LunchAndLearn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
