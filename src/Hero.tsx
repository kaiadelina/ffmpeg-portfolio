import React from "react";
import Card from "./Card";

const Hero: React.FC = () => {
  return (
    <section
      id="overview"
      className="flex flex-col justify-center items-center text-center min-h-screen px-6"
    >
      {/* Overview */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          FFmpeg Video Processing Portfolio
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Showcasing advanced video processing capabilities using FFmpeg. From
          panoramic image conversions to complex animation workflows,
          demonstrating expertise in handling challenging formats and delivering
          high-quality results.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 md:px-12">
        <Card
          icon="🖼️"
          title="Panoramic Processing"
          description="Converting panoramic images into smooth video tours"
          href="#panoramic"
        />
        <Card
          icon="🎥"
          title="Video Creation"
          description="Building videos from image sequences with audio"
          href="#video"
        />
        <Card
          icon="✨"
          title="Complex Animation"
          description="Advanced processing of challenging formats"
          href="#complex"
        />
      </div>
    </section>
  );
};

export default Hero;
