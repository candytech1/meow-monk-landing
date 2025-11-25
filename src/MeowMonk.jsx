import { useEffect } from 'react';

const MeowMonk = () => {
  useEffect(() => {
    // Load Twitter widgets
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="w-full">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl font-bold text-center text-gray-900 mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-orange-500">Hold $MONK.</span>
            <br />
            <span className="text-gray-900">
              Find Inner Peace.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-xl md:text-2xl text-gray-600 mb-12">
            The most devoted cat on Solana. 🐱✨
          </p>

          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-orange-200 overflow-hidden shadow-lg">
                <img
                  src="/assets/meow-monk-profile.png"
                  alt="Meow Monk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Meow Monk Title - Clean & Minimal */}
          <div className="mb-12">
            <h3
              className="text-5xl md:text-6xl font-bold text-gray-800 text-center tracking-tight"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Meow Monk
            </h3>
          </div>

          {/* Video Container */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 md:p-6 rounded-3xl shadow-md">
            <div className="bg-white p-3 rounded-2xl">
              <div className="rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-[550px] mx-auto">
                  <blockquote
                    className="twitter-tweet mx-auto"
                    data-theme="light"
                    data-conversation="none"
                    data-dnt="true"
                    data-align="center"
                  >
                    <a href="https://twitter.com/catsareblessing/status/1992624181989736714">Loading tweet...</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Context Text */}
          <p className="text-center text-xl text-gray-600 mt-6 italic">
            "Nothing can shake his devotion." 🙏✨
          </p>

          {/* Buy Button - Joyful */}
          <div className="flex justify-center mt-12">
            <a
              href="https://pump.fun/coin/YOUR_TOKEN_ADDRESS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-2xl md:text-3xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              <img src="/assets/emo.png" alt="Meow Monk" className="w-24 h-24 object-contain" />
              <span>Buy $MONK</span>
            </a>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-32">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-8"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Live Chart 📈
          </h2>
          <p className="text-center text-xl text-gray-600 mb-8">
            Watch the journey unfold ✨
          </p>

          {/* PumpFun Chart Embed */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 md:p-6 rounded-3xl shadow-md">
            <div className="bg-white p-3 rounded-2xl">
              <div className="rounded-xl overflow-hidden" style={{ minHeight: '500px' }}>
                <iframe
                  src="https://pump.fun/coin/YOUR_TOKEN_ADDRESS"
                  className="w-full h-[500px] md:h-[600px] border-0"
                  title="Meow Monk Chart"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="w-full max-w-4xl mx-auto mt-32 px-4">
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            The Path Forward 🛤️
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">
            Every journey begins with a single step 🐾
          </p>

          {/* Path Image */}
          <div className="mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 rounded-2xl blur-lg opacity-20"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/assets/the-path.png"
                    alt="The Path to Enlightenment"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border-2 border-green-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✅</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Phase 1: The Awakening
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Launch on Pump.fun</li>
                    <li>✓ Website & Social Media</li>
                    <li>✓ Community Building</li>
                    <li>✓ 1000+ Holders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔄</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Phase 2: The Practice
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CoinGecko & CMC Listings</li>
                    <li>• Partnerships & Collaborations</li>
                    <li>• Community Events</li>
                    <li>• 10,000+ Holders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border-2 border-purple-200 shadow-md">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🚀</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Phase 3: The Teaching
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Major CEX Listings</li>
                    <li>• Merchandise Store</li>
                    <li>• Charity Initiatives</li>
                    <li>• Global Recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey - Story Sections */}
      <section className="w-full max-w-4xl mx-auto mt-32 px-4">

        {/* Section 1 - The Awakening */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              The Awakening 🌅
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              In the quiet mountains, a small cat discovered something greater than himself.
              Not through seeking, but through stillness. ✨
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-amber-300 rounded-2xl blur-md opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/the-awakening.png"
                  alt="The Awakening"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - The Practice */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              The Practice 🧘‍♂️
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Every day, the same spot. Every breath, the same peace.
              A tiny beacon of calm in the chaos. 🕉️
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-2xl blur-md opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/the-practice.png"
                  alt="The Practice"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - The Teaching */}
        <div className="mb-24">
          <div className="text-center mb-8">
            <h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              The Teaching 📿
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
              He teaches without words. His lesson is simple: 💫
            </p>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-semibold">
              Be present. Be still. Be unshakeable. 🙏
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl blur-md opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/the-teaching.png"
                  alt="The Teaching"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Security & Trust Section */}
      <section className="w-full max-w-5xl mx-auto mt-32 mb-20 px-4">
        <div>
          <h3
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Built on Trust 🛡️
          </h3>
          <p className="text-center text-lg text-gray-600 mb-12">
            Security and transparency are our foundation ✨
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contract Verified */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-2 border-green-200">
              <div className="flex items-center gap-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Contract Verified
                  </h4>
                  <p className="text-gray-600">Fully audited and transparent</p>
                </div>
              </div>
            </div>

            {/* Liquidity Locked */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md border-2 border-blue-200">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🔐</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Liquidity Locked
                  </h4>
                  <p className="text-gray-600">LP tokens burned forever</p>
                </div>
              </div>
            </div>

            {/* Ownership Renounced */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-md border-2 border-purple-200">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚫</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    Ownership Renounced
                  </h4>
                  <p className="text-gray-600">Fully community-driven</p>
                </div>
              </div>
            </div>

            {/* No Team Tokens */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-md border-2 border-orange-200">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🙅</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    No Team Tokens
                  </h4>
                  <p className="text-gray-600">Fair launch for everyone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 shadow-md">
            <h4
              className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Contract Address 📋
            </h4>
            <div className="bg-white rounded-xl p-4 mb-4 border-2 border-orange-200">
              <p className="text-sm md:text-base text-gray-700 text-center font-mono break-all font-semibold">
                YOUR_TOKEN_ADDRESS_HERE
              </p>
            </div>
            <p className="text-center text-sm text-gray-600">
              ⚠️ Always verify the contract address before trading
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="w-full max-w-4xl mx-auto mb-20 px-4">
        <div>
          <h3
            className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Join the Monastery 🏯
          </h3>
          <p className="text-center text-lg text-gray-600 mb-12">
            Connect with the community of devoted holders 🐱💫
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Twitter */}
            <a
              href="https://twitter.com/YOUR_TWITTER"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">Twitter</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/YOUR_TELEGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="font-semibold text-gray-800 group-hover:text-blue-400 transition-colors">Telegram</span>
            </a>

            {/* DexScreener */}
            <a
              href="https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-semibold text-gray-800 group-hover:text-green-500 transition-colors">DexScreener</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/p/DRYHbriDNGw/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">Instagram</span>
            </a>

            {/* CoinGecko */}
            <a
              href="https://www.coingecko.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg className="w-5 h-5 text-gray-700 group-hover:text-yellow-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 4.8v9.6h2.4V7.2h-2.4z"/>
              </svg>
              <span className="font-semibold text-gray-400">CoinGecko</span>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Soon</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <img src="/assets/emo.png" alt="Meow Monk" className="w-16 h-16 object-contain" />
            </div>

            <p className="text-gray-700 font-semibold">
              © 2025 Meow Monk ($MONK). All rights reserved.
            </p>

            <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> $MONK is a meme coin created for entertainment purposes.
              This token has no intrinsic value or expectation of financial return.
              Cryptocurrency investments are highly speculative and risky.
              Only invest what you can afford to lose. Always DYOR (Do Your Own Research).
            </p>

            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>Built with devotion</span>
              <img src="/assets/emo.png" alt="Meow Monk" className="w-4 h-4 object-contain inline-block" />
              <span>| Powered by Solana ⚡</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MeowMonk;

