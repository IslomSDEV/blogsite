import React from "react";
import "./index.css";
import { Layout } from "./Components";
import { About, Academy, Blog, Home, Talks } from "./Pages";
import { Routes, Route } from "react-router-dom";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <Modal />
    </div>
  );
}

export default App;
