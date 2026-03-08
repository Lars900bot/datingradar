import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Users, TrendingUp } from 'lucide-react';
import { apps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import ComparisonTable from '@/components/ComparisonTable';
import Quiz from '@/components/Quiz';

export const metadata: Metadata = {
  title: 'Bedste Dating Apps i Danmark 2026 – Komplet Guide',
  description:
    'Se de bedste dating apps i Danmark 2026. Vi sammenligner Tinder, Hinge, Bumble, Match og 5 andre apps. Find din perfekte match med vores gratis quiz.',
};

const userReviews = [
  { name: 'Mette, 32', app: 'Hinge', text: 'Fandt min nuværende kæreste på Hinge efter 3 uger. Profil-prompts gør det meget lettere at starte en samtale!', stars: 5 },
  { name: 'Thomas, 45', app: 'Match.com', text: 'Match.com er langt mere seriøst end de andre apps. Alle vil faktisk have et forhold, ikke bare swipe.', stars: 5 },
  { name: 'Sara, 24', app: 'Tinder', text: 'Tinder er stadig #1 hvis du vil møde mange nye mennesker hurtigt. Stor database i Danmark.', stars: 4 },
];

export default function HomePage() {
  const topApps = apps.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] via-[#9d1f52] to-[#831843] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            ✅ Opdateret januar 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Bedste Dating Apps i Danmark 2026
          </h1>
          <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Vi har testet og sammenlignet alle de store dating apps på det danske marked, så du ikke skal. Upartisk, opdateret og gratis.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#quiz"
              className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              Find din dating app <ArrowRight size={18} />
            </a>
            <a
              href="#sammenligning"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 transition-colors"
            >
              Se alle apps
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-pink-100">
            <span className="flex items-center gap-1.5"><Shield size={14} /> 100% upartisk</span>
            <span className="flex items-center gap-1.5"><Users size={14} /> 8 apps testet</span>
            <span className="flex items-center gap-1.5"><TrendingUp size={14} /> Opdateret 2026</span>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#831843] mb-3">Find Din Dating App</h2>
            <p className="text-gray-600">Svar på 3 korte spørgsmål og få en personlig anbefaling på under 1 minut</p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Top picks */}
      <section className="py-16 px-4 bg-white" id="sammenligning">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#831843] mb-3">Top Dating Apps 2026</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Vores redaktion har personligt testet alle apps og evalueret dem på brugervenlighed, sikkerhed, matchkvalitet og pris.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topApps.map((app, i) => (
              <AppCard key={app.id} app={app} rank={i + 1} highlight={i === 0} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.slice(4).map((app, i) => (
              <AppCard key={app.id} app={app} rank={i + 5} />
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-6 text-center">Sådan Vælger Du Den Rigtige Dating App</h2>
          <div className="prose prose-pink max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Med over 8 store dating apps på det danske marked kan det være svært at vide, hvilken app der passer bedst til netop dig. Valget afhænger af mange faktorer: din alder, hvad du søger, dit budget og hvor mange aktive brugere der er i dit område.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#831843]">Tinder</strong> er stadig det åbenlyse valg for de fleste, særligt for dem under 35. Med 50 millioner aktive brugere globalt og en stor dansk brugerbase er der ingen tvivl om, at du vil finde potentielle matches hurtigt. Bagsiden er, at mange brugere blot swiper for sjov og ikke nødvendigvis er seriøse.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#831843]">Hinge</strong> er blevet et af de mest populære alternativer for dem der søger noget mere meningsfyldt. Appen er "designed to be deleted" — med fokus på dyb kompatibilitet frem for hurtige swipes. Profil-prompts som "det mest spontane jeg har gjort er..." giver langt bedre samtaleemner end et profilbillede alene.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#831843]">Match.com</strong> og <strong className="text-[#831843]">Parship</strong> er de klare valg for dem over 35 der ønsker et seriøst forhold. Begge platforme kræver betaling, hvilket automatisk filtrerer de mindre seriøse brugere fra. Match.com har over 100.000 danske brugere, mens Parship bruger en videnskabelig personlighedstest til matchmaking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#831843]">Bumble</strong> har vundet stor popularitet, særligt blandt kvinder. Konceptet — at det er kvinden der skal sende den første besked — skaber et mere respektfuldt miljø med færre uønskede henvendelser. Dette gør Bumble til et af de sikreste dating-platforme på markedet.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#831843] mb-3">Sammenligningstabel</h2>
            <p className="text-gray-600">Klik på kolonneoverskrifter for at sortere</p>
          </div>
          <ComparisonTable apps={apps} />
        </div>
      </section>

      {/* User reviews */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-8 text-center">Hvad Siger Brugerne?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userReviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-pink-100">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{review.name}</span>
                  <span className="text-xs text-[#831843] font-medium bg-pink-50 px-2 py-0.5 rounded-full">{review.app}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-8 text-center">Udforsk Vores Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/gratis-dating', emoji: '🆓', title: 'Gratis Dating Apps', desc: '880 søgninger/md – de bedste gratis dating apps' },
              { href: '/dating-over-40', emoji: '💼', title: 'Dating Over 40', desc: 'Find kærlighed som voksen med de rigtige apps' },
              { href: '/serios-dating', emoji: '💑', title: 'Seriøs Dating', desc: 'Klar til et rigtigt forhold? Se vores guide' },
              { href: '/app/tinder-anmeldelse', emoji: '🔥', title: 'Tinder Anmeldelse', desc: 'Er Tinder stadig det bedste valg i 2026?' },
              { href: '/app/match-anmeldelse', emoji: '❤️', title: 'Match.com Anmeldelse', desc: 'Detaljeret gennemgang af Danmarks bedste seriøse dating-site' },
              { href: '/guide/dating-profil-tips', emoji: '📸', title: 'Profil Tips', desc: 'Optimer din profil og få 3x flere matches' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-5 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-100 hover:border-pink-200 transition-all group"
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-bold text-[#831843] group-hover:text-[#ec4899] transition-colors mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
