import React, { useEffect, useRef, useState } from "react";
import FullPanoVideo from "./FullPanoVideo";

const PanoramicBlock: React.FC = () => {
  const handleFullscreen = (video: HTMLVideoElement) => {
    if (video.requestFullscreen) video.requestFullscreen();
    else if ((video as any).webkitEnterFullscreen) (video as any).webkitEnterFullscreen();
    video.play();
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const singleRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const resultVideoRef = useRef<HTMLDivElement>(null);

  // Autoplay video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { threshold: 0.5 }
    );
    [video1Ref, video2Ref].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      [video1Ref, video2Ref].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section
      id="panoramic"
      className="min-h-screen flex flex-col justify-center px-8 pb-16 scroll-mt-20"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Panoramic Image to Video Conversion
      </h2>

      {/* === Nav === */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => scrollToSection(singleRef)}
        >
          Single Panorama
        </button>
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => scrollToSection(galleryRef)}
        >
          Gallery
        </button>
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => scrollToSection(comparisonRef)}
        >
          Comparison
        </button>
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => scrollToSection(resultVideoRef)}
        >
          Result Video
        </button>
      </div>

      {/* === Single Panorama Demo === */}
      <div ref={singleRef} className="mb-12 p-6 rounded-xl bg-gray-50 shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Single Panorama Demo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow bg-white">
            <img
              src={`${import.meta.env.BASE_URL}images/pano_2.jpeg`}
              alt="Panorama 1"
              className="w-full"
            />
            <p className="text-sm p-3 text-gray-600">360° Panorama 1 – 8192×4096px</p>
          </div>
          <div ref={resultVideoRef} className="rounded-xl overflow-hidden shadow bg-white relative flex flex-col">
            <video
              ref={video1Ref}
              src={`${import.meta.env.BASE_URL}videos/part_pano.mp4`}
              muted
              loop
              playsInline
              className="w-full cursor-pointer"
              onClick={(e) => handleFullscreen(e.currentTarget)}
            />
            <p className="text-sm text-gray-600 p-2">Click to view full video</p>
          </div>
        </div>
      </div>

      {/* === Gallery of Panoramas === */}
      <div ref={galleryRef} className="mb-12 p-6 rounded-xl bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-6">Gallery of Panoramas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow bg-white">
            <img
              src={`${import.meta.env.BASE_URL}images/collage_pano.png`}
              alt="Panorama 2"
              className="w-full"
            />
            <p className="text-sm p-3 text-gray-600">360° Panorama 2 – 6000×3000px</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow bg-white relative flex flex-col">
            <video
              ref={video2Ref}
              src={`${import.meta.env.BASE_URL}videos/collage_pano.mp4`}
              muted
              loop
              playsInline
              className="w-full cursor-pointer"
              onClick={(e) => handleFullscreen(e.currentTarget)}
            />
            <p className="text-sm text-gray-600 p-2">Click to view full video</p>
          </div>
        </div>
      </div>

      {/* === Implementation Comparison === */}
      <div ref={comparisonRef} className="rounded-xl shadow bg-white p-6 mb-12">
        <h3 className="font-semibold mb-6">Implementation Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-3">Standard Solutions</h4>
            <ul className="space-y-2 text-red-600">
              <li>✗ Limited format support</li>
              <li>✗ Poor quality interpolation</li>
              <li>✗ Visible seam artifacts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">My Implementation</h4>
            <ul className="space-y-2 text-green-600">
              <li>✓ Seamless 360° rotation</li>
              <li>✓ High-quality interpolation</li>
              <li>✓ Custom easing functions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* === Final block with full video === */}
      <div ref={resultVideoRef}>
      <FullPanoVideo />
      </div>

    </section>
  );
};

export default PanoramicBlock;

