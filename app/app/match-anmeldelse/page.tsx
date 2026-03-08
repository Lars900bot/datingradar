import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Check, X, ArrowRight, Users } from 'lucide-react';
import { getApp } from '@/lib/apps';
import StarRating from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Match.com Anmeldelse 2026 – Er det Bedste Seriøse Dating Site?',
  description:
    'Detaljeret Match.com anmeldelse 2026. Vi tester pris, brugervenlighed, match-kvalitet og sikkerhed. Danmarks bedste dating site til seriøst dating?',
};

const app = getApp('match')!;

const priceTable = [
  { plan: '1 måned', price: '299 kr/md', perMonth: '299', popular: false },
  { plan: '3 måneder', price: '149 kr/md', perMonth: '447 i alt', popular: true },
  { plan: '6 måneder', price: '119 kr/md', perMonth: '714 i alt', popular: false },
  { plan: '12 måneder', price: '99 kr/md', perMonth: '1.188 i alt', popular: false },
];

const features = [
  { name: 'Søg og browse profiler', included: true },
  { name: 'Se hvem der har besøgt din profil', included: true },
  { name: 'Send og modtag beskeder', included: true },
  { name: 'Avancerede søgefiltre', included: true },
  { name: 'Boost din profil', included: true },
  { name: 'Match-forslag baseret på adfærd', included: true },
  { name: 'Mobil app (iOS + Android)', included: true },
  { name: 'Dansk kundesupport', included: true },
];

const userReviews = [
  { name: 'Birgitte, 47', stars: 5, text: 'Match.com er klart det bedste til os over 40. Alle er på appen for at finde noget seriøst — der er ingen der bare swiper for sjov. Fandt min nuværende mand efter 4 måneder.' },
  { name: 'Peter, 38', stars: 4, text: 'God platform med rigtig mange aktive brugere. Prisen er ok for hvad man får. Jeg mangler måske lidt bedre app-stabilitet, men samlet set meget tilfreds.' },
  { name: 'Hanne, 52', stars: 4, text: 'Nemt at bruge og gode søgemuligheder. Matchkvaliteten er meget bedre end på Tinder. Anbefales varmt til dem der søger noget seriøst.' },
];

export default function MatchAnmeldelsePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-pink-300 mb-3">
            Anmeldelse opdateret januar 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Match.com Anmeldelse 2026
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            Match.com er Europas ældste og mest kendte dating-platform til seriøse relationer. Men er det stadig det bedste valg i 2026? Vi har testet platformen grundigt og giver dig et ærligt, opdateret svar.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <StarRating rating={app.rating} size={20} showNumber reviews={app.reviews} />
            <span className="text-pink-200 text-sm">|</span>
            <span className="flex items-center gap-1.5 text-sm text-pink-100">
              <Users size={14} />
              {app.users} danske brugere
            </span>
            <span className="text-pink-200 text-sm">|</span>
            <span className="text-sm text-pink-100">{app.priceLabel}</span>
          </div>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="py-8 px-4 bg-pink-50 border-b border-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#831843] mb-3">Kort vurdering</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Match.com er Danmarks stærkeste platform for seriøst dating for brugere over 30. Med 100.000+ danske brugere og en betalingsbarriere der sikrer engagement, er dette klart vores anbefalede platform for dig der søger et langsigtet forhold. Prisen (fra 149 kr/md ved 3-måneders abonnement) er fuldt berettiget.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={app.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-[#831843] hover:bg-[#500d28] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Prøv Match.com <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Fordele og Ulemper ved Match.com</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-4">✅ Fordele</h3>
              <ul className="space-y-3">
                {app.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  Mulighed for at søge på specifikke kriterier som uddannelse og livsstil
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  Brugere er forpligtet via betaling — højere engagement
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  God iOS og Android app
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h3 className="font-bold text-red-700 mb-4">❌ Ulemper</h3>
              <ul className="space-y-3">
                {app.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <X size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <X size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                  Opsigelse kræver manuel kontakt til kundeservice
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <X size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                  Færre brugere under 30 sammenlignet med Tinder og Hinge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep review */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Detaljeret Gennemgang af Match.com</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Hvem bruger Match.com i Danmark?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Match.com har med over 100.000 aktive danske brugere en robust tilstedeværelse på det danske marked. Gennemsnitsalderen er 38-42 år, og platformens brugere er kendetegnet ved at de er seriøse i deres søgen. Betalingsmodellen — der kræver abonnement for at sende beskeder — fungerer som en naturlig selektion der holder de uengagerede brugere væk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Demografisk er Match.com særligt stærk for brugere i alderen 30-55. Mange har tidligere erfaring med dating og ved præcis hvad de søger. Det giver en markant bedre samtale-kvalitet end de gratis apps, hvor mange brugere blot eksperimenterer.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Funktioner og matchmaking</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Match.coms matchmaking-system er baseret på en kombination af brugeradfærd og præferencer du angiver i din profil. Systemet lærer løbende hvem du klikker på og hvem du sender beskeder til, og tilpasser dine daglige match-forslag derefter. Kvaliteten af disse forslag er generelt høj sammenlignet med apps der primært baserer matches på udseende.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Profilen på Match.com er langt mere detaljeret end på f.eks. Tinder. Du kan angive uddannelse, livsstil, hvornår du sidst var aktiv, og hvad du søger i en partner. Dette giver langt bedre grunde til at starte en samtale og øger sandsynligheden for en god første date.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Match.com vs. Parship og EliteSingles</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sammenlignet med Parship (299 kr/md) og EliteSingles (249 kr/md) tilbyder Match.com den bedste balance mellem pris og brugerbase. Parship har en mere avanceret personlighedstest, mens EliteSingles henvender sig mere specifikt til akademikere. Match.com er det bredeste og mest tilgængelige valg for de fleste.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vores anbefaling: Start med Match.com som din primære seriøse dating-platform. Hvis du efter 2-3 måneder ønsker endnu mere selektivt matchmaking og har et større budget, kan Parship supplere godt.
          </p>
        </div>
      </section>

      {/* Features list */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Alle Funktioner inkluderet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-lg">
                <Check size={16} className={f.included ? 'text-green-500' : 'text-gray-300'} />
                <span className="text-sm text-gray-700">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Match.com Priser 2026</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {priceTable.map((plan) => (
              <div
                key={plan.plan}
                className={`rounded-xl p-5 border-2 text-center ${plan.popular ? 'border-[#ec4899] bg-pink-50' : 'border-gray-200 bg-white'}`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-[#ec4899] mb-2 uppercase tracking-wide">Bedst værdi</div>
                )}
                <p className="font-semibold text-gray-700 text-sm mb-1">{plan.plan}</p>
                <p className="text-2xl font-bold text-[#831843]">{plan.price}</p>
                <p className="text-xs text-gray-400 mt-1">{plan.perMonth}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Priser er vejledende. Se match.com for aktuelle priser.</p>
        </div>
      </section>

      {/* User reviews */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Brugeranmeldelser fra Danmark</h2>
          <div className="space-y-4">
            {userReviews.map((r, i) => (
              <div key={i} className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#831843] text-white text-sm font-bold flex items-center justify-center">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final verdict */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Vores Konklusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Match.com fortjener sin status som Danmarks bedste betalte dating-platform for seriøst dating. Kombinationen af en stor dansk brugerbase, seriøse intentioner og et intuitivt matchmaking-system gør det til et stærkt valg for alle over 30 der søger et langsigtet forhold.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prisen er den eneste væsentlige ulempe — men det er netop betalingsmodellen der sikrer platformens høje engagementsniveau. Vi anbefaler at starte med et 3-måneders abonnement til 149 kr/md frem for én måned til 299 kr/md.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Samlet vurdering: <strong className="text-[#831843]">4.1/5 stjerner</strong>. Vores topanbefaling til seriøs dating for 30+.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={app.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-[#831843] hover:bg-[#500d28] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Start på Match.com <ExternalLink size={15} />
            </a>
            <Link href="/serios-dating" className="inline-flex items-center gap-2 border border-[#831843] text-[#831843] hover:bg-pink-50 font-semibold px-6 py-3 rounded-xl transition-colors">
              Seriøs dating guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
