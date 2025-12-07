import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Works from "./pages/Works.jsx";
import WorkDetails from "./pages/WorkDetails.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
