import Link from 'next/link';
import { Heart } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Oversigt' },
  { href: '/gratis-dating', label: 'Gratis Dating' },
  { href: '/dating-over-40', label: 'Dating Over 40' },
  { href: '/serios-dating', label: 'Seriøs Dating' },
  { href: '/guide/dating-profil-tips', label: 'Dating Guide' },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-pink-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#831843] rounded-lg flex items-center justify-center">
              <Heart size={16} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-[#831843]">DatingRadar</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#831843] hover:bg-pink-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://tinder.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#831843] hover:bg-[#500d28] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Heart size={14} className="fill-white" />
            Find kærlighed
          </a>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex overflow-x-auto gap-1 pb-3 -mx-1 px-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-[#831843] whitespace-nowrap bg-gray-100 hover:bg-pink-50 rounded-full transition-colors flex-shrink-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
