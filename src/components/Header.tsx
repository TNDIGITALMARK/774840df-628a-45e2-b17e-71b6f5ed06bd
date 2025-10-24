'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Chicken silhouette */}
                <path
                  d="M20 8C18 8 16.5 9.5 16 11C15 11 14 11.5 13.5 12.5C13 13.5 13 14.5 13.5 15.5C14 16.5 15 17 16 17C16 18 16.5 19 17.5 19.5L16 25C15.5 27 16 29 17.5 30.5L18 32H22L22.5 30.5C24 29 24.5 27 24 25L22.5 19.5C23.5 19 24 18 24 17C25 17 26 16.5 26.5 15.5C27 14.5 27 13.5 26.5 12.5C26 11.5 25 11 24 11C23.5 9.5 22 8 20 8Z"
                  fill="hsl(var(--primary))"
                />
                <circle cx="19" cy="14" r="1.5" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[hsl(var(--primary))] leading-none">
                Poultry
              </h1>
              <p className="text-sm font-semibold text-[hsl(var(--accent))] leading-none">
                Gavran Best
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors bg-transparent shadow-none p-0 uppercase tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('our-story')}
              className="text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors bg-transparent shadow-none p-0 uppercase tracking-wide"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors bg-transparent shadow-none p-0 uppercase tracking-wide"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))] transition-colors bg-transparent shadow-none p-0 uppercase tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('order')}
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:shadow-[0_4px_12px_rgba(244,208,63,0.3)] transition-all hover:-translate-y-0.5"
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
