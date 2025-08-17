import { useState } from "react";

type ImageItem = {
  src: string;
  alt: string;
};

type VideoItem = {
  thumbnail: string;
  src: string;
  title: string;
};

const images: ImageItem[] = [
  { src: "/images/01.jpg", alt: "Пример работы 1" },
  { src: "/images/02.jpg", alt: "Пример работы 2" },
  { src: "/images/03.jpg", alt: "Пример работы 3" },
  { src: "/images/04.jpg", alt: "Пример работы 4" },
];

const videos: VideoItem[] = [
  {
    thumbnail: "/videos/thumb1.jpg",
    src: "/videos/clip_result.mp4",
    title: "Демонстрация 1 (FFmpeg)",
  },
//   {
//     thumbnail: "/videos/thumb2.jpg",
//     src: "/videos/demo2.mp4",
//     title: "Демонстрация 2 (FFmpeg)",
//   },
];

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="p-6 text-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Моё портфолио</h1>
        <p className="mt-2 text-lg">Примеры работ с FFmpeg</p>
      </header>

      {/* Images */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Изображения</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Видео</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((video, i) => (
            <div
              key={i}
              className="cursor-pointer relative group"
              onClick={() => setSelectedVideo(video.src)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-xl shadow-md"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg">▶</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
