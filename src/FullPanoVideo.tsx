import { useEffect, useRef, useState } from "react";

export default function FullPanoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [animateHint, setAnimateHint] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement || (document as any).webkitFullscreenElement;
      if (!isFullscreen) {
        video.pause();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.setAttribute("controls", "true");

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitEnterFullscreen) {
      (video as any).webkitEnterFullscreen();
    }

    video.play();
  };

  return (
    <div className="p-6 rounded-xl bg-gray-100 shadow-inner">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Full Overview Video from Image Set
      </h3>
      <p className="text-center text-gray-600 mb-4">
        Click the preview to expand and watch the complete panoramic video
      </p>

      <div className="relative rounded-xl overflow-hidden shadow bg-black group cursor-pointer">
        {/* Preview with cropping */}
        <div className="max-h-[300px] overflow-hidden relative">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}videos/full_pano.mp4`}
            className="w-full object-cover"
          />
          {/* Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
          {/* Подсказка */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`px-6 py-3 bg-white/90 text-gray-900 text-lg font-semibold rounded-xl shadow transition transform
                ${animateHint ? "animate-bounce-once" : ""}`}
            >
              ▶ Click to expand video
            </span>
          </div>
        </div>

        {/* Click button */}
        <button onClick={handleClick} className="absolute inset-0" />
      </div>
    </div>
  );
}
