import { useState, useRef, useEffect } from "react";
import musicFile from "./assets/Perfect .mp3";
import cat_love from "./assets/cat_love.png";
import cat_bg from "./assets/cat_bg.jpg";
import fahim_img from "./assets/fahim_image-modified.jpeg";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (yesPressed && audioRef.current) {
      audioRef.current.currentTime = 6;
      audioRef.current.play();
    }
  }, [yesPressed]);
  const [images] = useState({
    cat_love : cat_love,
    celebration: "https://gifdb.com/images/high/thank-you-friend-cat-emotional-0w6y2ucbqvg7fzee.webp",
    bearWithRoses: "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp",
    noReaction: "https://gifdb.com/images/high/animated-cat-gif-file-2323kb-gmhff6e3stdl7ciu.webp",
  });
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="overflow-hidden flex items-center justify-center pt-8 h-screen -mt-8 selection:bg-rose-600 selection:text-white text-zinc-900"
      style={{
        backgroundImage: `url(${fahim_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @keyframes floatUp { 0% { transform: translateY(0) scale(1); opacity: 1 } 100% { transform: translateY(-220px) scale(1.1); opacity: 0 } }
        .heart { animation: floatUp 4s ease-in infinite; will-change: transform, opacity }
        .heart:nth-child(2) { animation-delay: .6s }
        .heart:nth-child(3) { animation-delay: 1.2s }
        .heart:nth-child(4) { animation-delay: 1.8s }
        .heart:nth-child(5) { animation-delay: 2.4s }
      `}</style>

      <div className="relative w-full max-w-3xl px-6">
        {/* floating hearts */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
          <div className="relative w-full h-64">
            <span className="heart absolute left-10 bottom-8 text-3xl">❤️</span>
            <span className="heart absolute left-1/3 bottom-4 text-2xl">💖</span>
            <span className="heart absolute left-1/2 bottom-6 text-4xl">💕</span>
            <span className="heart absolute right-1/3 bottom-3 text-2xl">💘</span>
            <span className="heart absolute right-16 bottom-10 text-3xl">❣️</span>
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center">
          {yesPressed ? (
            <>
              <img src={images.celebration} alt="celebration" className="w-full max-h-96 object-contain rounded-lg shadow" />
              <div className="text-3xl md:text-5xl font-extrabold my-4 text-rose-50">Yayyyyy!!!</div>
              <audio ref={audioRef} className="audio" preload="preload" loop>
                <source src={musicFile} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </>
          ) : (
            <>
              {noCount > 0 ? (
                <img
                  className="h-[260px] rounded-lg shadow-lg"
                  src={images.noReaction}
                  alt="no reaction"
                />
              ) : (
                <img
                  className="h-[260px] rounded-lg shadow-lg"
                  src={images.cat_love}
                  alt="cat with hearts"
                />
              )}

              <h1 className="text-3xl md:text-5xl font-bold my-4 text-white">Will you be my Valentine?</h1>
              {/* <p className="text-sm text-rose-100/90 mb-4">Pick your answer — but be kind to my feelings 💌</p> */}

              <div className="flex flex-wrap justify-center gap-3 items-center">
                <button
                  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all"
                  style={{ fontSize: yesButtonSize }}
                  onClick={() => setYesPressed(true)}
                >
                  Yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="bg-transparent border border-rose-200/40 text-rose-50 font-semibold py-2 px-5 rounded-full hover:bg-rose-700/30 transition"
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <></>
  );
};