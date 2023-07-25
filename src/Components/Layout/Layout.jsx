import React from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
