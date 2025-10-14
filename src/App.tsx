import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PanoramicBlock from "./PanoramicBlock";
import RegularVideoBlock from "./RegularVideoBlock";
import ComplexProcessingBlock from "./ComplexProcessingBlock";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PanoramicBlock />
        <RegularVideoBlock />
        <ComplexProcessingBlock />
      </main>
      <Footer />
    </div>
  );
};

export default App;

