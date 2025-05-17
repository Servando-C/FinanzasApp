import React from "react";
import Navbar from "./components/Navbar";
import FinancialDashboard from "./components/FinancialDashboard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <FinancialDashboard />
      <Footer />
    </>
  );
}
