import Link from 'next/link';
import { ExternalLink, Check, X, Users } from 'lucide-react';
import { DatingApp } from '@/lib/apps';
import StarRating from './StarRating';

interface AppCardProps {
  app: DatingApp;
  rank?: number;
  highlight?: boolean;
}

export default function AppCard({ app, rank, highlight }: AppCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 transition-all hover:shadow-lg ${
        highlight ? 'border-[#ec4899]' : 'border-gray-100'
      }`}
    >
      {highlight && (
        <div className="bg-[#ec4899] text-white text-xs font-bold text-center py-1.5 tracking-wide">
          ⭐ REDAKTIONENS VALG
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start gap-4">
          {rank && (
            <div className="w-8 h-8 rounded-full bg-[#831843] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
              {rank}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
              <span className="text-sm font-semibold text-[#831843] bg-pink-50 px-3 py-1 rounded-full">
                {app.priceLabel}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-0.5">{app.tagline}</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <StarRating rating={app.rating} size={14} />
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Users size={12} />
                {app.users} brugere
              </span>
              <span className="text-xs text-gray-400">{app.ageGroup}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed line-clamp-3">{app.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Fordele</p>
            <ul className="space-y-1">
              {app.pros.slice(0, 3).map((pro, i) => (
                <li key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                  <Check size={12} className="text-green-500 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Ulemper</p>
            <ul className="space-y-1">
              {app.cons.slice(0, 3).map((con, i) => (
                <li key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                  <X size={12} className="text-red-400 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs rounded-full bg-pink-50 text-[#831843] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href={app.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 bg-[#831843] hover:bg-[#500d28] text-white text-sm font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Prøv {app.name}
            <ExternalLink size={14} />
          </a>
          {app.id === 'tinder' && (
            <Link
              href="/app/tinder-anmeldelse"
              className="px-4 py-2.5 text-sm font-medium text-[#831843] border border-[#831843] rounded-lg hover:bg-pink-50 transition-colors"
            >
              Læs anmeldelse
            </Link>
          )}
          {app.id === 'match' && (
            <Link
              href="/app/match-anmeldelse"
              className="px-4 py-2.5 text-sm font-medium text-[#831843] border border-[#831843] rounded-lg hover:bg-pink-50 transition-colors"
            >
              Læs anmeldelse
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
