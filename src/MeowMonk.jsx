import { useEffect, useState, useRef } from 'react';
import { Copy, Check, ExternalLink, Twitter, Send, BarChart2, Shield, Flame, Zap, Rocket, Wallet, Coins, ArrowRight, Map, Calculator, ChevronUp, Loader2, ChevronDown, Users, MessageCircle, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Marquee = ({ text, speed = 20 }) => (
  <div className="relative flex overflow-x-hidden bg-orange-500/10 border-y border-orange-500/20 py-3 backdrop-blur-sm">
    <div className="animate-marquee whitespace-nowrap flex gap-8 text-orange-400 font-bold font-['Fredoka'] uppercase tracking-widest">
      {Array(10).fill(text).map((t, i) => (
        <span key={i} className="flex items-center gap-4">
          {t} <span className="text-white">★</span>
        </span>
      ))}
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 text-orange-400 font-bold font-['Fredoka'] uppercase tracking-widest">
      {Array(10).fill(text).map((t, i) => (
        <span key={i} className="flex items-center gap-4">
          {t} <span className="text-white">★</span>
        </span>
      ))}
    </div>
  </div>
);

const BuyNotification = () => {
  const [notification, setNotification] = useState(null);
  const names = ["Chad", "Degen", "Whale", "Ape", "Monk"];
  const actions = ["bought", "aped in", "swept floor", "grabbed bag"];

  useEffect(() => {
    const showNotification = () => {
      const randomSol = (Math.random() * 5 + 0.1).toFixed(2);
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];

      setNotification({
        text: `${randomName} ${randomAction} ${randomSol} SOL!`,
        amount: randomSol
      });

      setTimeout(() => setNotification(null), 4000);
    };

    const interval = setInterval(showNotification, Math.random() * 5000 + 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 glass-panel p-4 rounded-xl border-l-4 border-green-500 flex items-center gap-3 shadow-2xl max-w-xs"
        >
          <div className="bg-green-500/20 p-2 rounded-full">
            <Rocket className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-bold uppercase">New Transaction</div>
            <div className="text-sm font-bold text-white">{notification.text}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-orange-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 transition-colors border-2 border-white/20"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-bold text-white pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-orange-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MeowMonk = () => {
  const [copied, setCopied] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [monkAmount, setMonkAmount] = useState(1000000);
  const [targetPrice, setTargetPrice] = useState(1.00);
  const isLaunched = false; // Set to true when launched
  const CA = "LAUNCHING_SOON"; // Replace with actual CA when launched

  const handleConnect = () => {
    if (walletConnected) return;
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setWalletConnected(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.1, x: 0.9 }
      });
    }, 1500);
  };

  useEffect(() => {
    // Load Twitter widgets
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff9f1c', '#ffffff', '#b5179e']
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white overflow-hidden selection:bg-orange-500 selection:text-white font-['Outfit']">

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]"></div>
        {/* Floating Meme Emojis */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-20 delay-700">🚀</div>
        <div className="absolute bottom-40 right-20 text-4xl animate-bounce opacity-20 delay-1000">💎</div>
        <div className="absolute top-1/2 left-20 text-4xl animate-pulse opacity-20 delay-500">🌙</div>
      </div>

      {/* Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 bg-[#0f0f13]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5">
              <img src="/assets/meow-monk-profile.png" alt="Logo" className="w-full h-full object-cover rounded-full bg-black" />
            </div>
            <span className="text-xl font-bold font-['Fredoka'] tracking-wide hidden md:block">Meow Monk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#shrine" className="hover:text-orange-400 transition-colors">Shrine</a>
            <a href="#how-to-buy" className="hover:text-orange-400 transition-colors">How to Buy</a>
            <a href="#story" className="hover:text-orange-400 transition-colors">Story</a>
            <a href="#roadmap" className="hover:text-orange-400 transition-colors">Prophecy</a>
          </div>
          <button
            onClick={handleConnect}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-bold transition-all text-sm shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            {isConnecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Connecting...
              </>
            ) : walletConnected ? (
              <>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                8x...3f9
              </>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Hype Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-8 animate-fade-in-up hover:bg-orange-500/20 transition-colors cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            NEXT 1000X GEM 💎
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-9xl font-bold mb-6 font-['Fredoka'] leading-none tracking-tight drop-shadow-2xl">
            <span className="block text-white">
              FIND ZEN.
            </span>
            <span className="block text-gradient-gold animate-pulse">
              GET RICH.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            The only monk that meditates on green candles. <br />
            <span className="text-orange-400 font-bold">Don't fade the fade.</span> Become one with the pump. 🧘‍♂️🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <button
              disabled={!isLaunched}
              className="group relative px-10 py-5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full font-black text-xl shadow-xl transition-all flex items-center gap-3 border-2 border-white/10 cursor-not-allowed opacity-60"
            >
              <Shield className="w-6 h-6 text-white" />
              <span>LAUNCHING SOON</span>
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">🔒 LOCKED</div>
            </button>

            <button
              disabled={!isLaunched}
              className="px-10 py-5 bg-gray-600 rounded-full font-bold text-xl transition-all flex items-center gap-3 shadow-lg cursor-not-allowed opacity-60"
            >
              <Send className="w-6 h-6 text-white" />
              <span>COMING SOON</span>
            </button>
          </div>

          {/* CA Copy - Locked */}
          <div className="max-w-xl mx-auto">
            <div className="glass-panel p-3 pl-6 rounded-full flex items-center justify-between border-2 border-gray-600/30 relative">
              <div className="flex flex-col items-start overflow-hidden mr-4">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Contract Address (Solana)</span>
                <code className="text-sm md:text-lg font-mono text-gray-600 font-bold truncate w-full blur-sm select-none">
                  {CA}
                </code>
              </div>
              <div className="bg-gray-600 p-3 rounded-full text-white shadow-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-orange-500/90 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-white/20">
                  <p className="text-white font-black text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    LAUNCHING SOON
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">
              🔒 Contract will be revealed at launch
            </p>
          </div>

        </div>
      </section>

      {/* Marquee */}
      <Marquee text="PUMP IT • HODL • 1000X SOON • ZEN MODE • MOON MISSION •" />

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Market Cap", value: "$1M SOON", icon: "🚀", color: "text-green-400" },
              { label: "Holders", value: "CHADS ONLY", icon: "🗿", color: "text-blue-400" },
              { label: "Liquidity", value: "BURNED 🔥", icon: "🔒", color: "text-orange-400" },
              { label: "Vibe Check", value: "PASSED", icon: "✅", color: "text-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-black mb-2 font-['Fredoka'] ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Monk - Profile Image Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              THE LEGEND HIMSELF
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-['Fredoka'] text-gradient-gold">
              Meet the Monk 🐱
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The most zen cat on Solana. The most based monk in crypto.
            </p>
          </div>

          {/* Profile Image */}
          <div className="relative w-80 h-80 mx-auto mb-16 animate-float">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-purple-600 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-orange-500/30 overflow-hidden shadow-2xl bg-[#1a1a1a] group">
              <img
                src="/assets/meow-monk-profile.png"
                alt="Meow Monk"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-20 top-10 glass-panel p-5 rounded-2xl animate-bounce rotate-12 shadow-xl" style={{ animationDuration: '3s' }}>
              <span className="text-5xl">💰</span>
            </div>
            <div className="absolute -left-20 bottom-20 glass-panel p-5 rounded-2xl animate-bounce -rotate-12 shadow-xl" style={{ animationDuration: '4s' }}>
              <span className="text-5xl">📈</span>
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 glass-panel p-4 rounded-2xl animate-bounce shadow-xl" style={{ animationDuration: '3.5s' }}>
              <span className="text-4xl">🧘‍♂️</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-all group border border-white/10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏯</div>
              <div className="text-2xl font-black text-white mb-1 font-['Fredoka']">Temple Cat</div>
              <div className="text-sm text-gray-400">Born in Korea</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-all group border border-white/10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⛩️</div>
              <div className="text-2xl font-black text-white mb-1 font-['Fredoka']">解脱</div>
              <div className="text-sm text-gray-400">Jietuo = Liberation</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-all group border border-white/10">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💎</div>
              <div className="text-2xl font-black text-white mb-1 font-['Fredoka']">Diamond Paws</div>
              <div className="text-sm text-gray-400">Never Sells</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Digital Shrine ⛩️ */}
      <section id="shrine" className="py-32 px-4 bg-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Fredoka']">The Digital Shrine ⛩️</h2>
            <p className="text-xl text-gray-400">Witness the legend. Meet the Monk.</p>
          </div>

          <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-40 animate-pulse"></div>
            <div className="glass-panel p-6 rounded-[2rem] relative border border-orange-500/20 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-[#0f0f13]">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href="https://twitter.com/catsareblessing/status/1992624181989736714"></a>
                </blockquote>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-orange-500 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-orange-500 rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Legend of Liberation - Story Section */}
      <section id="story" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              TRUE STORY
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-['Fredoka'] leading-tight">
              <span className="text-gradient-gold">The Legend of</span>
              <br />
              <span className="text-white">Liberation 🐱⛩️</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The true story of Jietuo, the cat who found enlightenment</p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="glass-panel p-10 rounded-3xl border-l-4 border-orange-500 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                In a temple in <span className="text-orange-400 font-bold">Gyeongsangbuk, South Korea</span>, a cat named <span className="text-white font-bold text-2xl">Jietuo</span> (解脱), meaning <span className="text-gradient-gold font-bold">"Liberation"</span>, has captured hearts with her extraordinary discipline.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Rescued as a <span className="text-orange-400 font-semibold">severely burned kitten</span> by the temple abbot, she was given <span className="text-white font-bold">3 simple rules</span>:
              </p>
              <div className="space-y-4 ml-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/30 group-hover:scale-110 transition-transform">1</div>
                  <p className="text-gray-300 text-lg pt-1">Don't make noise in the prayer hall 🤫</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/30 group-hover:scale-110 transition-transform">2</div>
                  <p className="text-gray-300 text-lg pt-1">Eat only vegetarian food 🥬</p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/30 group-hover:scale-110 transition-transform">3</div>
                  <p className="text-gray-300 text-lg pt-1">Never harm anyone 🕊️</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 border-2 border-orange-500/30 shadow-xl">
              <p className="text-center text-xl md:text-2xl font-bold text-white mb-2 font-['Fredoka']">
                "She followed every rule."
              </p>
              <p className="text-center text-gray-400 italic">
                A true monk. A legend. An inspiration.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-block glass-panel p-8 rounded-3xl border border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 font-['Fredoka']">
                Legacy 🐱
              </p>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl">
                In a world of fleeting trends and hollow promises, Jietuo's story reminds us that true value lies not in speculation, but in unwavering principle. $MONK embodies this timeless wisdom—discipline over impulse, serenity over chaos, conviction over volatility.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold">🧘‍♂️ Discipline</div>
                <div className="px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">☮️ Serenity</div>
                <div className="px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">💎 Conviction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Fredoka']">Path to Enlightenment 🧘‍♂️</h2>
            <p className="text-xl text-gray-400">Follow these steps to attain financial nirvana.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Create Wallet", desc: "Download Phantom or Solflare wallet.", icon: <Wallet className="w-8 h-8" /> },
              { step: "02", title: "Get SOL", desc: "Buy SOL from an exchange and send to wallet.", icon: <Coins className="w-8 h-8" /> },
              { step: "03", title: "Go to Pump.fun", desc: "Connect your wallet to Pump.fun.", icon: <ExternalLink className="w-8 h-8" /> },
              { step: "04", title: "Buy $MONK", desc: "Swap SOL for $MONK and hold forever.", icon: <Rocket className="w-8 h-8" /> }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 left-8 text-6xl font-black text-white/5 font-['Fredoka'] group-hover:text-orange-500/20 transition-colors">
                  {item.step}
                </div>
                <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Fredoka']">The Prophecy 📜</h2>
            <p className="text-xl text-gray-400">Our journey to the moon and beyond.</p>
          </div>

          <div className="space-y-8">
            {[
              { phase: "Phase 1", title: "Awakening", items: ["Launch on Pump.fun", "Website Release", "Community Building", "Meme Warfare"] },
              { phase: "Phase 2", title: "Ascension", items: ["Raydium Listing", "1,000+ Holders", "CoinGecko/CMC Listing", "Trending on Twitter"] },
              { phase: "Phase 3", title: "Nirvana", items: ["CEX Listings", "Merch Store", "10,000+ Holders", "Monk NFT Collection"] }
            ].map((phase, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border-l-4 border-orange-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl">{(i + 1)}</span>
                </div>
                <div className="relative z-10">
                  <div className="text-orange-400 font-bold uppercase tracking-widest mb-2">{phase.phase}</div>
                  <h3 className="text-3xl font-bold text-white mb-6 font-['Fredoka']">{phase.title}</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Teaching Section */}
      <section className="py-32 px-4 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/assets/the-teaching.png"
                  alt="The Teaching"
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                The Final Lesson
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Fredoka'] leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Beyond the Charts.
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                The Monk teaches us that true wealth is not found in the pump, but in the <span className="text-white font-medium">unshakeable belief</span> of the community.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                "When the candles are red, we meditate. When the candles are green, we meditate.
                The price moves, but the Monk remains still."
              </p>

              <div className="flex gap-4">
                <div className="glass-panel p-4 rounded-2xl flex-1 text-center hover:bg-white/5 transition-colors cursor-help">
                  <div className="text-3xl mb-2">🧘‍♂️</div>
                  <div className="font-bold text-white">HODL</div>
                </div>
                <div className="glass-panel p-4 rounded-2xl flex-1 text-center hover:bg-white/5 transition-colors cursor-help">
                  <div className="text-3xl mb-2">💎</div>
                  <div className="font-bold text-white">Hands</div>
                </div>
                <div className="glass-panel p-4 rounded-2xl flex-1 text-center hover:bg-white/5 transition-colors cursor-help">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold text-white">Moon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >



      {/* Community Section */}
      < section className="py-24 px-4 relative overflow-hidden" >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Fredoka']">Join the Monastery 🏯</h2>
            <p className="text-xl text-gray-400">Where degens find enlightenment.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Users className="w-12 h-12" />, label: "Community Members", value: "10,000+", color: "from-blue-500 to-cyan-500" },
              { icon: <MessageCircle className="w-12 h-12" />, label: "Daily Messages", value: "50K+", color: "from-purple-500 to-pink-500" },
              { icon: <TrendingUp className="w-12 h-12" />, label: "ATH Incoming", value: "SOON™", color: "from-orange-500 to-red-500" }
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2 font-['Fredoka']">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://t.me/YOUR_TELEGRAM" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 rounded-3xl flex items-center gap-6 hover:bg-white/5 transition-all group border border-white/10 hover:border-blue-500/50">
              <div className="bg-[#229ED9] p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
                <p className="text-gray-400">Join the most zen community on Solana</p>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </a>

            <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 rounded-3xl flex items-center gap-6 hover:bg-white/5 transition-all group border border-white/10 hover:border-blue-400/50">
              <div className="bg-[#1DA1F2] p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Twitter</h3>
                <p className="text-gray-400">Follow for memes and alpha</p>
              </div>
              <ExternalLink className="w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section className="py-24 px-4 bg-white/5" >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Fredoka']">Sacred Scrolls 📚</h2>
            <p className="text-xl text-gray-400">Questions from fellow monks, answered.</p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What is Meow Monk?"
              answer="Meow Monk is a meme coin on Solana that combines the zen philosophy of meditation with the chaos of crypto trading. It's a community-driven project with no utility except vibes and potential gains."
            />
            <FAQItem
              question="How do I buy $MONK?"
              answer="You can buy $MONK on Pump.fun using SOL. Simply connect your Phantom or Solflare wallet, swap SOL for $MONK, and join the monastery. Check our 'How to Buy' section above for detailed steps."
            />
            <FAQItem
              question="Is the liquidity safe?"
              answer="Yes! The liquidity has been burned forever. The LP tokens were sent to a burn address, meaning no one can rug pull. The contract is also renounced, so no one can mint new tokens."
            />
            <FAQItem
              question="What's the tax?"
              answer="0% buy tax, 0% sell tax. We believe in pure, unadulterated trading. No hidden fees, no surprises. Just you, the market, and your diamond hands."
            />
            <FAQItem
              question="Wen moon?"
              answer="The moon is not a destination, it's a state of mind. But seriously, with our growing community and strong fundamentals (aka good vibes), we're aiming for the stars. WAGMI."
            />
          </div>
        </div>
      </section >

      {/* Chart Section */}
      < section id="chart" className="py-20 px-4" >
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold flex items-center gap-3 font-['Fredoka']">
                <BarChart2 className="text-green-500 w-8 h-8" />
                Live Market Data
              </h2>
              <div className="flex gap-3 items-center bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-green-400 font-bold">PUMPING NOW</span>
              </div>
            </div>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden bg-[#111] border border-white/5 relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white/5 text-9xl font-black rotate-45 select-none">PUMP IT</span>
              </div>
              <iframe
                src={`https://pump.fun/coin/${CA}?embed=1&theme=dark`}
                className="w-full h-full border-0 relative z-10"
                title="Chart"
              />
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-12 px-4 border-t border-white/5 bg-black/40" >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 p-1 animate-spin-slow">
              <img src="/assets/meow-monk-profile.png" alt="Logo" className="w-full h-full object-cover rounded-full bg-black" />
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all hover:scale-110">
              <Send className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all hover:scale-110">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-500 text-sm mb-4">
            $MONK is a meme coin. It has no utility. It is just a cat in a robe.
            <br />But we are going to the moon anyway. 🚀
          </p>
          <p className="text-gray-600 text-xs">
            © 2025 Meow Monk. 100% Community Owned.
          </p>
        </div>
      </footer >
      <BuyNotification />
      <ScrollToTop />
    </div >
  );
};

export default MeowMonk;


