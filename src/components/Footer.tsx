import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[hsl(var(--primary))] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M20 8C18 8 16.5 9.5 16 11C15 11 14 11.5 13.5 12.5C13 13.5 13 14.5 13.5 15.5C14 16.5 15 17 16 17C16 18 16.5 19 17.5 19.5L16 25C15.5 27 16 29 17.5 30.5L18 32H22L22.5 30.5C24 29 24.5 27 24 25L22.5 19.5C23.5 19 24 18 24 17C25 17 26 16.5 26.5 15.5C27 14.5 27 13.5 26.5 12.5C26 11.5 25 11 24 11C23.5 9.5 22 8 20 8Z"
                    fill="white"
                  />
                  <circle cx="19" cy="14" r="1.5" fill="hsl(var(--primary))" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold leading-none">Poultry</h3>
                <p className="text-sm font-semibold text-[hsl(var(--accent))] leading-none">
                  Gavran Best
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Fresh desi eggs from our village farm to your home. Naturally raised, traditionally farmed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-[hsl(var(--accent))] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-story" className="text-white/80 hover:text-[hsl(var(--accent))] transition-colors text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/80 hover:text-[hsl(var(--accent))] transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#order" className="text-white/80 hover:text-[hsl(var(--accent))] transition-colors text-sm">
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">9876543210</p>
                  <p className="text-white/60 text-xs">WhatsApp available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">orders@poultrygavranbest.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[hsl(var(--accent))] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">
                  Village Rampur<br />
                  District Nashik<br />
                  Maharashtra, India
                </p>
              </li>
            </ul>
          </div>

          {/* Delivery Areas & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Delivery Areas</h4>
            <ul className="space-y-2 mb-6">
              <li className="text-white/80 text-sm">• Nashik</li>
              <li className="text-white/80 text-sm">• Mumbai</li>
              <li className="text-white/80 text-sm">• Pune</li>
              <li className="text-white/60 text-xs italic">Within 24 hours</li>
            </ul>
            <h4 className="text-lg font-bold mb-3">Business Hours</h4>
            <p className="text-white/80 text-sm">
              Monday - Saturday<br />
              6:00 AM - 8:00 PM
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 Poultry Gavran Best. All rights reserved. | Est. 2018
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[hsl(var(--accent))] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
