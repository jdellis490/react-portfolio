import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Project") {
      return <Project />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const pageChange = (page) => setCurrentPage(page);
  
  return (
    <div className=''>
      <Header />
      <Navbar currentPage={currentPage} pageChange={pageChange} />
      <div className="container">
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
