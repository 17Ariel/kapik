import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
const App = () => {
  return (
    <div className="font-mont">
      <Navbar />
      <Landing />
      <Products />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;