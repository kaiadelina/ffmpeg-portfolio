import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-16">
        <Card
          icon="🖼️"
          title="Panoramic Processing"
          description="Converting panoramic images into smooth video tours"
        />
        <Card
          icon="🎥"
          title="Video Creation"
          description="Building videos from image sequences with audio"
        />
        <Card
          icon="✨"
          title="Complex Animation"
          description="Advanced processing of challenging formats"
        />
      </section>
    </div>
  );
};

export default App;

