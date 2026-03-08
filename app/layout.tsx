import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DatingRadar – Sammenlign dating apps i Danmark 2026',
    template: '%s | DatingRadar',
  },
  description:
    'Find den bedste dating app i Danmark 2026. Vi anmelder og sammenligner Tinder, Hinge, Bumble, Match og mange flere. Upartisk og gratis vejledning.',
  keywords: ['dating app', 'dating dk', 'sammenlign dating', 'bedste dating app', 'gratis dating', 'seriøst dating'],
  openGraph: {
    siteName: 'DatingRadar',
    locale: 'da_DK',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <footer className="bg-[#1a0a11] text-gray-400 py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-3">DatingRadar</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Upartisk sammenligning af dating apps og sider i Danmark.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Guides</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/gratis-dating" className="hover:text-[#ec4899] transition-colors">Gratis Dating</Link></li>
                  <li><Link href="/serios-dating" className="hover:text-[#ec4899] transition-colors">Seriøs Dating</Link></li>
                  <li><Link href="/dating-over-40" className="hover:text-[#ec4899] transition-colors">Dating Over 40</Link></li>
                  <li><Link href="/guide/dating-profil-tips" className="hover:text-[#ec4899] transition-colors">Profil Tips</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Anmeldelser</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/app/tinder-anmeldelse" className="hover:text-[#ec4899] transition-colors">Tinder</Link></li>
                  <li><Link href="/app/match-anmeldelse" className="hover:text-[#ec4899] transition-colors">Match.com</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Om os</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Vi modtager affiliate-kommission fra anbefalede tjenester. Dette påvirker ikke vores anmeldelser.
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
              <p>© {new Date().getFullYear()} DatingRadar. Alle rettigheder forbeholdes.</p>
              <p className="mt-1 text-gray-700 text-[11px]">
                Affiliate-disclosure: Vi kan modtage kommission fra links på denne side. Indholdet er redaktionelt uafhængigt.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
