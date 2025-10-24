export default function Hero() {
  const scrollToOrder = () => {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/generated/hero-eggs-basket.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
            Farm-Fresh Goodness
            <br />
            <span className="text-[hsl(var(--accent))]">From Our Home to Yours</span>
          </h1>
          <p className="text-xl text-white/90 mb-3 font-medium">
            Traditional Brown Desi Eggs 🥚
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-lg">
            Premium Quality
          </p>
          <button
            onClick={scrollToOrder}
            className="px-8 py-4 text-base font-bold uppercase tracking-wider rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:shadow-[0_6px_20px_rgba(244,208,63,0.4)] transition-all hover:-translate-y-1 shadow-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
