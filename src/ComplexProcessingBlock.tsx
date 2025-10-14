import React from "react";

const ComplexProcessingBlock: React.FC = () => {
  return (
    <section
        id="complex"
        className="min-h-screen flex flex-col justify-center px-8 pb-16 scroll-mt-20">
      <h2 className="text-2xl font-bold text-center mb-8">
        Complex Processing Challenges
      </h2>

      <div className="space-y-8">
        {/* Case 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start rounded-xl shadow bg-white p-6">
          {/* Corrupted Image */}
          <div>
            <h3 className="font-semibold mb-3">Corrupted Image</h3>
            <img
              src="https://picsum.photos/400/200?grayscale"
              alt="Corrupted image"
              className="rounded-lg shadow"
            />
            <p className="text-sm text-gray-600 mt-2">
              64×48px, corrupted headers
            </p>
          </div>

          {/* Processing Solution */}
          <div>
            <h3 className="font-semibold mb-3">Processing Solution</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Header reconstruction</li>
              <li>AI upscaling to 1024×768</li>
              <li>Artifact removal</li>
              <li>Color enhancement</li>
            </ul>
          </div>

          {/* Result */}
          <div>
            <h3 className="font-semibold mb-3">Result</h3>
            <div className="rounded-xl overflow-hidden shadow bg-white relative">
              <img
                src="https://picsum.photos/500/250"
                alt="Result video"
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

        {/* Case 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start rounded-xl shadow bg-white p-6">
          {/* Non-standard Format */}
          <div>
            <h3 className="font-semibold mb-3">Non-standard Format</h3>
            <img
              src="https://picsum.photos/400/200?blur=2"
              alt="Non-standard format"
              className="rounded-lg shadow"
            />
            <p className="text-sm text-gray-600 mt-2">
              Proprietary RAW format
            </p>
          </div>

          {/* Processing Solution */}
          <div>
            <h3 className="font-semibold mb-3">Processing Solution</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Custom decoder development</li>
              <li>Metadata preservation</li>
              <li>Color space conversion</li>
              <li>Batch processing</li>
            </ul>
          </div>

          {/* Result */}
          <div>
            <h3 className="font-semibold mb-3">Result</h3>
            <div className="rounded-xl overflow-hidden shadow bg-white relative">
              <img
                src="https://picsum.photos/500/250?random=2"
                alt="Result video 2"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexProcessingBlock;
