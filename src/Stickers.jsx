import { useState } from 'react';
import { Download, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stickers = () => {
  const [downloadedStickers, setDownloadedStickers] = useState(new Set());

  const stickers = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Meow Monk Sticker ${i + 1}`,
    url: `/assets/sticker${i + 1}.png`
  }));

  const handleDownload = async (sticker) => {
    try {
      const response = await fetch(sticker.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `meow-monk-sticker-${sticker.id}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadedStickers(prev => new Set([...prev, sticker.id]));
      setTimeout(() => {
        setDownloadedStickers(prev => {
          const newSet = new Set(prev);
          newSet.delete(sticker.id);
          return newSet;
        });
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleDownloadAll = () => {
    stickers.forEach((sticker, index) => {
      setTimeout(() => handleDownload(sticker), index * 200);
    });
  };

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 bg-[#0f0f13]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-orange-400" />
            <span className="text-lg font-bold font-['Fredoka']">Back to Home</span>
          </Link>
          <button
            onClick={handleDownloadAll}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all text-sm shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download All
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Fredoka'] bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Meow Monk Stickers 🐱✨
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Download and share these zen stickers with your fellow monks!
            </p>
          </div>

          {/* Sticker Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stickers.map((sticker) => (
              <div
                key={sticker.id}
                className="glass-panel p-4 rounded-2xl hover:scale-105 transition-all duration-300 group border border-white/10 hover:border-orange-500/30"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-xl mb-4 overflow-hidden relative">
                  <img
                    src={sticker.url}
                    alt={sticker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/meow-monk-profile.png';
                    }}
                  />
                </div>
                <button
                  onClick={() => handleDownload(sticker)}
                  className="w-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 hover:from-orange-500/30 hover:to-amber-500/30 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-lg font-bold transition-all text-sm flex items-center justify-center gap-2 group-hover:scale-105"
                >
                  {downloadedStickers.has(sticker.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      Downloaded!
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Share these stickers and spread the zen! 🧘‍♂️✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Stickers;

