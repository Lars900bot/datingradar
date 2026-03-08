import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { getAppsByCategory } from '@/lib/apps';
import AppCard from '@/components/AppCard';

export const metadata: Metadata = {
  title: 'Seriøs Dating i Danmark 2026 – Find et Rigtigt Forhold Online',
  description:
    'Guide til seriøs dating online i Danmark. Vi anbefaler de bedste platforme til langvarige forhold og giver dig tips til at tiltrække de rigtige matches.',
};

const seriousApps = getAppsByCategory('seriøst');

const steps = [
  {
    step: '01',
    title: 'Vælg den rigtige platform',
    desc: 'Ikke alle dating apps er skabt til seriøse relationer. Apps som Tinder og Badoo har mange brugere der søger casual dating. Match.com, Hinge og Parship tiltrækker folk med seriøse intentioner.',
  },
  {
    step: '02',
    title: 'Byg en autentisk profil',
    desc: 'En seriøs partner søger en reel person. Brug aktuelle, naturlige billeder og skriv en bio der afspejler din personlighed og dine værdier — ikke hvad du tror andre vil høre.',
  },
  {
    step: '03',
    title: 'Vær specifik om dine intentioner',
    desc: 'Angiv klart i din profil at du søger et seriøst forhold. Dette filtrerer de forkerte matches fra og giver dig mere kvalitet i dine samtaler.',
  },
  {
    step: '04',
    title: 'Invester tid i samtaler',
    desc: 'Et seriøst forhold starter med en god samtale. Tag dig tid til at læse profilens hele og svar på noget specifikt. Undgå generiske åbningslinjer.',
  },
  {
    step: '05',
    title: 'Mød op i den virkelige verden',
    desc: 'Online dating er bare starten. Planlæg en date relativt hurtigt — et kaffe-møde eller en gåtur. Det er i den virkelige verden at kemien viser sig.',
  },
  {
    step: '06',
    title: 'Vær tålmodig og selektiv',
    desc: 'Seriøs dating handler om kvalitet over kvantitet. Det er bedre at have 5 gode matches om måneden end 50 overfladiske. Vær villig til at vente på det rigtige match.',
  },
];

const green_flags = [
  'Profilen indeholder en gennemtænkt, personlig beskrivelse',
  'De skriver med korrekt stavning og komplet sætninger',
  'De stiller genuine spørgsmål om dig og dine interesser',
  'De er åbne om hvad de søger i et forhold',
  'De respekterer dine grænser og tidsplan',
  'De foreslår en konkret, planlagt date i god tid',
];

const red_flags = [
  'Profilen mangler beskrivelse eller har kun clicheer',
  'De svarer kun med korte monosyllabiske svar',
  'De skubber på at mødes hurtigt og uformelt',
  'De er uklare eller undvigende om hvad de søger',
  'De undgår at tale om fremtid eller langsigtede planer',
  'De er for perfekte — måske en falsk profil',
];

export default function SeriosDatingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            Guide til seriøst dating · 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Seriøs Dating Online –<br className="hidden md:block" />
            Find et Rigtigt Forhold
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            Seriøs dating handler ikke om at swipe mest muligt — det handler om at finde den rigtige person. Vi guider dig til de bedste platforme og giver dig en konkret plan for at finde et langsigtet forhold online i Danmark.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-pink-100">
            <span>✓ 5 platforme vurderet</span>
            <span>✓ Trin-for-trin guide</span>
            <span>✓ Green og red flags</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Hvad Er Seriøs Dating?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Seriøs dating er intentionel dating — du søger aktivt et langsigtet parforhold frem for casual møder eller venskaber. Det betyder ikke at du skal stress-date eller have det første møde planlagt i hoved og røv, men at du er klar over dine intentioner og søger efter nogen med samme mål.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I Danmark er der heldigvis fremragende muligheder for seriøs dating online. Platforme som <Link href="/app/match-anmeldelse" className="text-[#ec4899] hover:underline">Match.com</Link> og Parship er bygget specifikt til dette formål og har matchmaking-systemer der prioriterer kompatibilitet og langsigtede mål. Selv Hinge og Bumble, der primært henvender sig til yngre brugere, er orienteret mod mere meningsfyldte forbindelser.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En vigtig pointe: seriøs dating kræver mere tid og energi end casual dating. Du skal investere i at skrive personlige beskeder, møde folk op, og vente på de rigtige matches. Men belønningen — et rigtigt, meningsfyldt forhold — er naturligvis det hele værd.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I denne guide finder du de bedste platforme til seriøs dating i Danmark, en trin-for-trin plan for at optimere din proces, og en praktisk liste over positive og negative tegn at holde øje med.
          </p>
        </div>
      </section>

      {/* Recommended apps */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#831843] mb-3 text-center">Bedste Apps til Seriøst Dating</h2>
          <p className="text-gray-600 text-center mb-8">Disse platforme tiltrækker brugere der søger langvarige relationer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seriousApps.map((app, i) => (
              <AppCard key={app.id} app={app} rank={i + 1} highlight={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Step by step guide */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-8 text-center">6-Trins Plan til Seriøst Dating</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#831843] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green vs red flags */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-8 text-center">Green Flags og Red Flags i Seriøs Dating</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-green-700 text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">✅</span> Positive tegn
              </h3>
              <ul className="space-y-3">
                {green_flags.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 bg-green-50 rounded-lg p-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-600 text-lg mb-4 flex items-center gap-2">
                <span className="text-xl">🚩</span> Advarselstegn
              </h3>
              <ul className="space-y-3">
                {red_flags.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 bg-red-50 rounded-lg p-3">
                    <span className="text-red-400 font-bold flex-shrink-0">✗</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Long content section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Seriøs Dating vs. Casual Dating – Hvad Fungerer for Dig?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det er vigtigt at understrege at der ikke er noget forkert ved casual dating — mange danskere nyder at møde nye mennesker løbende uden forpligtelser. Men hvis du aktivt søger et seriøst forhold, er det essentielt at du bruger platforme og strategier der understøtter dette mål.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En af de vigtigste faktorer for succes med seriøs dating er tydelighed i din profil. Mange undgår at skrive klart at de søger et langsigtet forhold, fordi de er bange for at skræmme potentielle matches væk. Dette er en fejl. Det at signalere seriøse intentioner tiltrækker nogen med samme mål og holder dem fra dig der søger noget andet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Når det handler om betalt vs. gratis platforme, anbefaler vi for seriøs dating at investere i en betalt platform. Ikke fordi gratis apps er dårlige, men fordi betalingsbarrieren automatisk filtrerer brugere med lavere engagement fra. Hvis du er villig til at bruge 149-299 kr/md på en dating-platform, signalerer det at du er seriøs — og andre betalende brugere tænker det samme.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Husk endelig at seriøs dating ikke kræver at du kun bruger én app. Mange succesrige singler bruger 2 apps parallelt — f.eks. Hinge (gratis basis) og Match.com (betalt) — for at maximere mulighederne mens de holder fokus på kvalitet frem for kvantitet.
          </p>

          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
            <div className="flex items-center gap-2 mb-3">
              <Heart size={18} className="text-[#ec4899] fill-[#ec4899]" />
              <h3 className="font-bold text-[#831843]">Relaterede guides</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/dating-over-40" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Dating over 40 <ArrowRight size={13} />
              </Link>
              <Link href="/guide/dating-profil-tips" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Perfekt dating profil <ArrowRight size={13} />
              </Link>
              <Link href="/app/match-anmeldelse" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Match.com anmeldelse <ArrowRight size={13} />
              </Link>
              <Link href="/gratis-dating" className="text-sm text-[#831843] hover:text-[#ec4899] flex items-center gap-1">
                Gratis dating apps <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tag det første skridt mod kærlighed</h2>
          <p className="text-pink-100 mb-8">Start med Hinge gratis eller Match.com for det mest seriøse dating-miljø i Danmark.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://match.com"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="bg-[#ec4899] hover:bg-[#db2777] text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
            >
              Prøv Match.com <ExternalLink size={16} />
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
