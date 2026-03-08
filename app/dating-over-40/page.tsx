import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { apps } from '@/lib/apps';
import AppCard from '@/components/AppCard';

export const metadata: Metadata = {
  title: 'Dating Over 40 – De Bedste Dating Apps for 40+ i Danmark 2026',
  description:
    'Guide til dating over 40 i Danmark. Vi anbefaler de bedste dating apps for voksne og deler ægte tips til at finde kærlighed som 40-årig eller ældre.',
};

const over40Apps = apps.filter(app =>
  app.ageMin <= 40 && app.ageMax >= 45
);

const myths = [
  {
    myth: '"Det er for sent at finde kærlighed efter 40"',
    truth: 'Studier viser at folk over 40 typisk er mere klar til et seriøst forhold. Match.com rapporterer at over 30% af brugerne over 40 finder et langsigtet forhold inden for 6 måneder.',
  },
  {
    myth: '"Alle gode singles er taget ved 40"',
    truth: 'Der er over 500.000 enlige danskere over 40. Skilsmisseraten er fortsat høj, og mange er fraskilt og klar til et nyt kapitel i livet.',
  },
  {
    myth: '"Dating apps er kun for unge"',
    truth: 'Match.com og EliteSingles har begge deres kernepublikum i alderen 35-55. Parship er designet specifikt til modne singler og har et af de højeste succesrater.',
  },
  {
    myth: '"Jeg er for gammel til at lære apps at bruge"',
    truth: 'De moderne dating apps er intuitive og brugervenlige. Match.com og Parship tilbyder endda kundeservice på dansk hvis du har brug for hjælp.',
  },
];

const successTips = [
  {
    emoji: '🎯',
    title: 'Vær klar på hvad du vil',
    desc: 'En af de store fordele ved at date som 40+ er, at du ved meget mere om dig selv. Vær konkret i din profil om hvad du søger. Det sparer tid for jer begge.',
  },
  {
    emoji: '📸',
    title: 'Brug aktuelle, realistiske billeder',
    desc: 'Undgå at bruge billeder fra 10 år siden. Brug billeder fra det seneste år der viser dig naturligt og i din hverdag. Ægthed tiltrækker de rigtige matches.',
  },
  {
    emoji: '💌',
    title: 'Skriv personlige første beskeder',
    desc: 'Henvis til noget specifikt i matchets profil. "Jeg så du elsker vandring — hvad er din yndlingsrute?" er langt bedre end et generisk "Hej!".',
  },
  {
    emoji: '🍷',
    title: 'Foreslå en date relativt hurtigt',
    desc: 'Lange chat-forløb fører sjældent til noget. Som 40+ er din tid værdifuld. Hvis kemien virker god online, foreslå en kaffe eller en drink inden for 1-2 uger.',
  },
  {
    emoji: '⚡',
    title: 'Prøv mere end én app',
    desc: 'Brug 2-3 apps parallelt i starten for at finde den platform der passer bedst til dig. Mange 40+ finder at Match.com og EliteSingles supplerer hinanden godt.',
  },
  {
    emoji: '🤝',
    title: 'Vær åben overfor tidligere relationer',
    desc: 'De fleste over 40 har en fortid — måske børn, skilsmisse eller tab. Vær åben om dette i din profil. Det er en styrke, ikke en svaghed.',
  },
];

export default function DatingOver40Page() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            Guide til dating over 40 · 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Dating Over 40 i Danmark – <br className="hidden md:block" />
            Din Komplette Guide
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            At finde kærlighed som 40-årig eller ældre er ikke bare muligt — det er faktisk lettere end nogensinde takket være moderne dating apps designet til modne singler. Vi guider dig til de rigtige platforme og giver dig konkrete tips.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-pink-100">
            <span>✓ Apps testet for 40+ brugere</span>
            <span>✓ Ægte succestips</span>
            <span>✓ Myter aflivet</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Dating efter 40 er anderledes – men bedre</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dating som 40+ adskiller sig markant fra dating i 20erne. Du har mere selvkendskab, klarere værdier og ved præcis hvad du ikke vil have. Til gengæld er der færre potentielle matches, og mange platforme domineres af yngre brugere. Nøglen er at bruge de <em>rigtige</em> apps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Danmark er et fantastisk land for 40+ dating. Vi har en veluddannet, åbenminded befolkning og platforme som Match.com, EliteSingles og Parship har alle en stærk dansk tilstedeværelse med brugere der primært er 35-60 år. Disse platforme er bygget til modne singler og har en succesrate der er langt højere end ynglings-apps som Tinder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ifølge en undersøgelse fra 2024 angiver over 67% af danske singler over 40, at de er åbne overfor at finde en partner via dating apps — og andelen vokser hvert år. Du er bestemt ikke alene om at søge kærlighed online som voksen.
          </p>
        </div>
      </section>

      {/* Recommended apps */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-3 text-center">Anbefalede Dating Apps for 40+</h2>
          <p className="text-gray-600 text-center mb-8">Udvalgt baseret på brugerbase, seriøsitet og succes for 40+ aldersgruppen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {over40Apps.map((app, i) => (
              <AppCard key={app.id} app={app} rank={i + 1} highlight={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-8 text-center">4 Myter om Dating Over 40 – Aflivet</h2>
          <div className="space-y-4">
            {myths.map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-xs font-bold">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 italic mb-2">{m.myth}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed">{m.truth}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success tips */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-8 text-center">6 Tips til Succesfuld Dating over 40</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {successTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-pink-100">
                <div className="text-2xl mb-2">{tip.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1.5">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform comparison for 40+ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Match.com vs. Parship vs. EliteSingles – Hvad er bedst for dig?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De tre primære betalte platforme for 40+ singler har alle lidt forskellige fokus, og valget afhænger meget af hvad du specifikt søger.
          </p>
          <div className="space-y-5">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Match.com — Bedst til bred dating for 30-60</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Match.com er den mest kendte og mest brugte betalte dating-platform i Danmark for modne singler. Med over 100.000 aktive danske brugere er der god sandsynlighed for at finde relevante matches i dit område. Prisen er 149 kr/md, hvilket er overkommeligt sammenlignet med alternativer. Match.com er ideel for dig der vil have mange muligheder og ikke ønsker en for snæver niche.
              </p>
              <a href="https://match.com" target="_blank" rel="noopener noreferrer sponsored" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#831843] hover:text-[#ec4899]">
                Besøg Match.com <ExternalLink size={13} />
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2">EliteSingles — Bedst til uddannede professionelle 35-55</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                EliteSingles henvender sig specifikt til uddannede og karrierebevidste singler. Hvis akademisk baggrund og ambition er vigtige parametre for dig, er EliteSingles det klare valg. Over 80% af brugerne har en universitetsuddannelse. Prisen er 249 kr/md, og platformen er tydeligvis mere eksklusiv med færre, men mere målrettede matches.
              </p>
              <a href="https://elitesingles.dk" target="_blank" rel="noopener noreferrer sponsored" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#831843] hover:text-[#ec4899]">
                Besøg EliteSingles <ExternalLink size={13} />
              </a>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Parship — Bedst til dybest mulige kompatibilitet 40-60</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Parship er den dyreste option (299 kr/md) men tilbyder til gengæld den mest avancerede matchmaking på markedet. En personlighedstest med 32 dimensioner sikrer at dine matches er dybt kompatible med dig. Parship er den rette platform for dig der er seriøs nok til at investere i processen og ønsker kvalitet over kvantitet.
              </p>
              <a href="https://parship.dk" target="_blank" rel="noopener noreferrer sponsored" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#831843] hover:text-[#ec4899]">
                Besøg Parship <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="font-bold text-[#831843] mb-2">🔗 Relaterede guides</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/serios-dating" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Seriøst dating <ArrowRight size={13} />
              </Link>
              <Link href="/guide/dating-profil-tips" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Lav den perfekte profil <ArrowRight size={13} />
              </Link>
              <Link href="/app/match-anmeldelse" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Match.com anmeldelse <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
