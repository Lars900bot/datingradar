import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Check, X, ArrowRight } from 'lucide-react';
import { getFreeApps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import StarRating from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Gratis Dating Apps Danmark 2026 – De Bedste uden abonnement',
  description:
    'Se de bedste gratis dating apps i Danmark 2026. Vi gennemgår Tinder, Badoo, Happn, Hinge og Bumble – alle med gratis basis. Find din match uden at betale.',
};

const freeComparison = [
  {
    app: 'Tinder',
    freeFeatures: ['Ubegrænset likes (med begrænsninger)', 'Se alle matches', 'Send beskeder til matches', 'Grundlæggende filtre'],
    paidFeatures: ['Ubegrænsede swipes', 'Se hvem der liker dig', 'Super likes', 'Boost profil'],
    verdict: 'Bedste gratis dating app for de fleste',
    rating: 4.2,
  },
  {
    app: 'Badoo',
    freeFeatures: ['Se folk i nærheden', 'Send beskeder (max pr. dag)', 'Basis profilering', 'Grundlæggende søgning'],
    paidFeatures: ['Ubegrænset beskeder', 'Se hvem der er online', 'Usynlig browsing', 'Boost profil'],
    verdict: 'God gratis basis med store database',
    rating: 3.9,
  },
  {
    app: 'Hinge',
    freeFeatures: ['Send 8 likes om dagen', 'Se dine matches', 'Send og modtag beskeder', 'Profil-prompts'],
    paidFeatures: ['Ubegrænsede likes', 'Se hvem der liker dig', 'Avancerede filtre', 'Roses (super likes)'],
    verdict: 'Bedste gratis app for seriøse relationer',
    rating: 4.4,
  },
  {
    app: 'Bumble',
    freeFeatures: ['Swipe og match', 'Send beskeder (kvinder starter)', '24 timers match-vindue', 'Se profiler'],
    paidFeatures: ['Extend match-vindue', 'Rematch udløbne matches', 'Se hvem der liker dig', 'Superswipes'],
    verdict: 'Sikkert miljø gratis for alle',
    rating: 4.3,
  },
  {
    app: 'Happn',
    freeFeatures: ['Se folk du krydser vej med', 'Grundlæggende like-funktion', 'Chat ved match', 'GPS-baseret opdagelse'],
    paidFeatures: ['Ubegrænsede Hellos', 'Se hvem der liker dig', 'Usynlig tilstand', 'Sæt tid på GPS'],
    verdict: 'Unik gratis oplevelse i byerne',
    rating: 3.8,
  },
];

export default function GratisDatingPage() {
  const freeApps = getFreeApps();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            880 månedlige søgninger
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            De Bedste Gratis Dating Apps i Danmark 2026
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            Behøver du betale for at finde kærlighed? Absolut ikke. Vi har testet alle store dating apps med gratis basis og fortæller dig præcist, hvad du kan forvente uden at bruge en eneste krone.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-pink-100">
            <span>✓ 5 gratis apps testet</span>
            <span>✓ Hvad er gratis vs. betalt</span>
            <span>✓ Vores anbefalinger</span>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Kan man virkelig date gratis i Danmark?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ja, og mange danskere gør det succesfuldt. De fleste af de store dating apps — herunder Tinder, Badoo, Hinge, Bumble og Happn — tilbyder en gratis basis-version som giver dig adgang til den væsentligste funktionalitet: du kan oprette en profil, browse potentielle matches og sende beskeder til dem du matcher med.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gratis apps er dog ikke uden begrænsninger. Du vil typisk opleve restriktioner på antallet af daglige likes eller swipes, og mange premium-funktioner — som muligheden for at se hvem der har liket dig — er kun tilgængelige med et betalt abonnement. Spørgsmålet er, om disse begrænsninger reelt forhindrer dig i at finde matches.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Svaret er for det meste: nej. Hvis du optimerer din profil godt (se vores <Link href="/guide/dating-profil-tips" className="text-[#ec4899] hover:underline">guide til dating-profil tips</Link>), er de fleste af de gratis funktioner fuldt tilstrækkelige til at finde gode matches. Mange danskere har fundet langvarige kæresteforhold eller ægteskab via de gratis versioner af disse apps.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I denne guide gennemgår vi de 5 bedste gratis dating apps i Danmark, hvad du præcis får gratis, hvad der kræver betaling, og hvilken app du bør starte med baseret på hvad du søger.
          </p>
        </div>
      </section>

      {/* Free apps ranking */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-8 text-center">Top 5 Gratis Dating Apps 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeApps.map((app, i) => (
              <AppCard key={app.id} app={app} rank={i + 1} highlight={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed comparison */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-3 text-center">Hvad Får du Gratis?</h2>
          <p className="text-gray-600 text-center mb-8">Nøjagtig oversigt over gratis vs. betalt funktionalitet</p>
          <div className="space-y-6">
            {freeComparison.map((item) => (
              <div key={item.app} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.app}</h3>
                    <p className="text-sm text-gray-500">{item.verdict}</p>
                  </div>
                  <StarRating rating={item.rating} size={14} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">✓ Gratis funktioner</p>
                    <ul className="space-y-1.5">
                      {item.freeFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">⭐ Kun med premium</p>
                    <ul className="space-y-1.5">
                      {item.paidFeatures.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <X size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for using free apps */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Tips til at Maksimere Gratis Dating Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: '📸', title: 'Brug de rigtige billeder', desc: 'Dit primære billede er alt. Et naturligt smilende billede i dagslys overgår studiebilleder. Brug 4-6 billeder der viser din personlighed.' },
              { emoji: '✍️', title: 'Skriv en fængende bio', desc: 'Hold bioen kort og konkret. Nævn 2-3 ting du elsker at lave og hvad du søger. Undgå klicheer som "kan lide at rejse og hygge".' },
              { emoji: '⏰', title: 'Vær aktiv på de rigtige tidspunkter', desc: 'De fleste er aktive på dating apps om aftenen (19-23). Log ind og vær aktiv i disse timer for at øge din synlighed.' },
              { emoji: '💬', title: 'Brug likes strategisk', desc: 'Gratis apps begrænser dine likes. Brug dem på profiler du virkelig finder interessante frem for at swipe højre på alle.' },
              { emoji: '🔄', title: 'Opdatér din profil regelmæssigt', desc: 'Profiler der opdateres vises højere i algoritmerne. Skift billede eller bio en gang om ugen for at øge synlighed.' },
              { emoji: '🌍', title: 'Brug lokationsfunktionen', desc: 'Sæt en rimelig radius. For stor radius giver matches langt væk; for lille giver for få muligheder. 20-30 km er typisk optimalt.' },
            ].map((tip, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-pink-100">
                <div className="text-2xl mb-2">{tip.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1.5">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratis vs betalt */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-4">Hvornår Skal du Opgradere til Premium?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De gratis versioner er fuldt tilstrækkelige til de fleste brugere, men der er situationer hvor et premium-abonnement kan give reel merværdi. Overvej at opgradere hvis du har brugt den gratis version i mindst en måned uden at have fundet en interessant match, eller hvis du befinder dig i et område med færre brugere og har brug for at øge din rækkevidde.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Premium giver dig typisk muligheden for at se hvem der allerede har liket din profil — dette kan spare dig for mange spildte likes og er det stærkeste argument for at opgradere. I stedet for blindt at swipe, kan du fokusere din energi på de brugere der allerede er interesserede.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vores anbefaling: Brug de gratis versioner i 1-2 måneder. Optimer din profil kontinuerligt. Skift app hvis du ikke ser resultater. Og hvis du stadig er utilfreds, så overvej at prøve en betalt platform som <Link href="/app/match-anmeldelse" className="text-[#ec4899] hover:underline">Match.com</Link> eller Parship, der tiltræker mere seriøse brugere per definition.
          </p>
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <h3 className="font-bold text-[#831843] mb-2">🔗 Se også vores guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/serios-dating" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Seriøs dating guide <ArrowRight size={13} />
              </Link>
              <Link href="/guide/dating-profil-tips" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Perfekt dating profil <ArrowRight size={13} />
              </Link>
              <Link href="/dating-over-40" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Dating over 40 <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klar til at komme i gang?</h2>
          <p className="text-pink-100 mb-8">Begynd med Tinder eller Hinge — begge er gratis og nemme at sætte op.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://tinder.com"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              Prøv Tinder gratis <ExternalLink size={16} />
            </a>
            <a
              href="https://hinge.co"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 flex items-center gap-2 transition-colors"
            >
              Prøv Hinge gratis <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
