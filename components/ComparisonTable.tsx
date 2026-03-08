'use client';

import { useState } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';
import { DatingApp } from '@/lib/apps';
import StarRating from './StarRating';

type SortKey = 'name' | 'rating' | 'priceFrom' | 'users';
type SortDir = 'asc' | 'desc';

interface ComparisonTableProps {
  apps: DatingApp[];
}

export default function ComparisonTable({ apps: initialApps }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  }

  const sorted = [...initialApps].sort((a, b) => {
    let av: number | string;
    let bv: number | string;
    if (sortKey === 'rating') { av = a.rating; bv = b.rating; }
    else if (sortKey === 'priceFrom') { av = a.priceFrom ?? 0; bv = b.priceFrom ?? 0; }
    else if (sortKey === 'users') {
      av = parseFloat(a.users.replace(/[^0-9.]/g, ''));
      bv = parseFloat(b.users.replace(/[^0-9.]/g, ''));
    }
    else { av = a.name; bv = b.name; }
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  function SortIcon({ k }: { k: SortKey }) {
    if (sortKey !== k) return <ArrowUpDown size={14} className="text-gray-400" />;
    return sortDir === 'asc' ? <ArrowUp size={14} className="text-[#ec4899]" /> : <ArrowDown size={14} className="text-[#ec4899]" />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#831843] text-white">
            <th
              className="text-left px-4 py-3 cursor-pointer hover:bg-[#9d1f52] select-none"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center gap-1.5">App <SortIcon k="name" /></div>
            </th>
            <th
              className="text-left px-4 py-3 cursor-pointer hover:bg-[#9d1f52] select-none"
              onClick={() => handleSort('rating')}
            >
              <div className="flex items-center gap-1.5">Bedømmelse <SortIcon k="rating" /></div>
            </th>
            <th className="text-left px-4 py-3">Gratis</th>
            <th
              className="text-left px-4 py-3 cursor-pointer hover:bg-[#9d1f52] select-none"
              onClick={() => handleSort('priceFrom')}
            >
              <div className="flex items-center gap-1.5">Pris <SortIcon k="priceFrom" /></div>
            </th>
            <th
              className="text-left px-4 py-3 cursor-pointer hover:bg-[#9d1f52] select-none"
              onClick={() => handleSort('users')}
            >
              <div className="flex items-center gap-1.5">Brugere <SortIcon k="users" /></div>
            </th>
            <th className="text-left px-4 py-3">Bedst til</th>
            <th className="text-left px-4 py-3">Alder</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((app, i) => (
            <tr
              key={app.id}
              className={`border-t border-gray-100 hover:bg-pink-50 transition-colors ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <td className="px-4 py-3 font-semibold text-gray-900">{app.name}</td>
              <td className="px-4 py-3">
                <StarRating rating={app.rating} size={13} showNumber={true} />
              </td>
              <td className="px-4 py-3">
                {app.freeBasic ? (
                  <span className="text-green-600 font-semibold">✓ Ja</span>
                ) : (
                  <span className="text-red-400">✗ Nej</span>
                )}
              </td>
              <td className="px-4 py-3 text-gray-700">
                {app.priceFrom ? `${app.priceFrom} kr/md` : 'Gratis'}
              </td>
              <td className="px-4 py-3 text-gray-700">{app.users}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {app.bestFor.map(b => (
                    <span key={b} className="px-2 py-0.5 text-xs rounded-full bg-pink-100 text-[#831843] capitalize">{b}</span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-600 text-xs">{app.ageGroup}</td>
              <td className="px-4 py-3">
                <a
                  href={app.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#831843] hover:text-[#ec4899] whitespace-nowrap"
                >
                  Besøg <ExternalLink size={11} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 px-4 py-2 border-t border-gray-100">
        Klik på kolonneoverskrifterne for at sortere. Opdateret januar 2026.
      </p>
    </div>
  );
}
