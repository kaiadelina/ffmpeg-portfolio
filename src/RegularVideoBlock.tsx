import React from "react";

const RegularVideoBlock: React.FC = () => {
  return (
    <section
        id="video"
        className="min-h-screen flex flex-col justify-center px-8 pb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-center mb-8">
        Regular Video Creation
      </h2>

      {/* Source + Final Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Source Images */}
        <div>
          <h3 className="font-semibold mb-4">Source Images</h3>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/300/200?1"
              alt="Source frame 1"
              className="rounded-xl shadow"
            />
            <img
              src="https://picsum.photos/300/200?2"
              alt="Source frame 2"
              className="rounded-xl shadow"
            />
            <img
              src="https://picsum.photos/300/200?3"
              alt="Source frame 3"
              className="rounded-xl shadow"
            />
            <img
              src="https://picsum.photos/300/200?4"
              alt="Source frame 4"
              className="rounded-xl shadow"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            24 frames total – Various formats and qualities
          </p>
        </div>

        {/* Final Video */}
        <div>
          <h3 className="font-semibold mb-4">Final Video</h3>
          <div className="rounded-xl overflow-hidden shadow bg-white relative">
            <img
              src="https://picsum.photos/800/400?5"
              alt="Final video preview"
              className="w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Musical Accompaniment */}
        <div className="rounded-xl shadow bg-white p-6">
          <h3 className="font-semibold mb-4">Musical Accompaniment Creation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 mb-1">Input Description</p>
              <p>
                "Upbeat product showcase with modern electronic elements"
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Generated Audio</p>
              <p className="flex items-center gap-2 text-blue-600">
                🎵 30s electronic track
              </p>
            </div>
          </div>
        </div>

        {/* Quality Enhancement */}
        <div className="rounded-xl shadow bg-white p-6">
          <h3 className="font-semibold mb-4">Quality Enhancement</h3>
          <ul className="text-sm space-y-2">
            <li>
              Resolution upscaling{" "}
              <span className="text-green-600 ml-2">480p → 1080p</span>
            </li>
            <li>
              Color correction{" "}
              <span className="text-green-600 ml-2">Auto-balanced</span>
            </li>
            <li>
              Noise reduction{" "}
              <span className="text-green-600 ml-2">Applied</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RegularVideoBlock;
