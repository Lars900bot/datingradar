import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Check, X, ArrowRight } from 'lucide-react';
import { getApp } from '@/lib/apps';
import StarRating from '@/components/StarRating';

export const metadata: Metadata = {
  title: 'Tinder Anmeldelse 2026 – Er det Stadig Værd at Bruge?',
  description:
    'Detaljeret Tinder anmeldelse 2026. Vi tester funktioner, priser, match-kvalitet og sikkerhed. Find ud af om Tinder er den rigtige dating app for dig.',
};

const app = getApp('tinder')!;

const priceTable = [
  { plan: 'Tinder Gratis', price: '0 kr/md', features: ['Begrænsede daglige swipes', 'Ubegrænset chat med matches', 'Grundlæggende søgefiltre', 'Profil og billeder'] },
  { plan: 'Tinder Gold', price: '79 kr/md', features: ['Ubegrænsede swipes', 'Se hvem der liker dig', '5 Super likes/dag', '1 Boost om måneden', 'Passport (global søgning)'] },
  { plan: 'Tinder Platinum', price: '129 kr/md', features: ['Alt fra Gold', 'Prioriterede likes', 'Besked med like', 'Se hvem du matchede med'] },
];

const userReviews = [
  { name: 'Anders, 26', stars: 4, text: 'Tinder virker stadig godt i de store byer. I Aarhus og København er der rigeligt med profiler. Jeg fandt min nuværende kæreste på Tinder efter ca. 2 måneder.' },
  { name: 'Sofie, 29', stars: 3, text: 'Blandet oplevelse. Der er mange matches, men kvaliteten varierer. Mange svarer ikke eller er kun ude efter noget casual. Fungerer bedst hvis man er tydelig i sin bio.' },
  { name: 'Mikkel, 34', stars: 4, text: 'Brugt Tinder on og off siden 2016. Platformen har forbedret sig markant. Gold er pengene værd hvis du bruger appen aktivt.' },
];

export default function TinderAnmeldelsePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs font-semibold text-pink-300 mb-3">
            Anmeldelse opdateret januar 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tinder Anmeldelse 2026
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            Er Tinder stadig den bedste dating app i 2026? Vi har testet platformen grundigt og giver dig et ærligt svar på om det er din tid og eventuelt dine penge værd.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <StarRating rating={app.rating} size={20} showNumber reviews={app.reviews} />
            <span className="text-pink-200 text-sm">|</span>
            <span className="text-sm text-pink-100">{app.users} brugere globalt</span>
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
                Tinder er stadig verdens mest populære dating app og har med rette sin plads øverst. Platformen er bedst for yngre brugere og dem der søger casual dating — men med den rette profil og strategi kan den sagtens bruges til seriøs dating også. Anbefales som første app for de fleste.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={app.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-[#831843] hover:bg-[#500d28] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Prøv Tinder gratis <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Fordele og Ulemper</h2>
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
                  Tilgængelig i hele Danmark — også mindre byer
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  Passport-funktion giver mulighed for at søge globalt
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
                  Gratis version er meget begrænset med kun 20-30 daglige likes
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700">
                  <X size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                  Svært at skelne seriøse brugere fra dem der bare swiper for sjov
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep review */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto prose prose-pink max-w-none">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Detaljeret Gennemgang</h2>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Brugerflade og oplevelse</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tinder har en af de mest intuitive brugerflader på markedet — det er en af grundene til at appen har over 50 millioner aktive brugere. Den karakteristiske swipe-mekanik er enkel: højre for ja, venstre for nej. Appen er hurtig, responsive og fungerer fejlfrit på både iOS og Android.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I 2024-2025 har Tinder opdateret sin algoritme markant. I stedet for blot at vise de nyeste profiler, bruger appen nu en ELO-lignende rating der tager hensyn til din aktivitet, profil-kvalitet og match-rate. Dette betyder at en god profil i dag giver langt flere og bedre matches end for 3 år siden.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Sikkerhed</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tinder har investeret kraftigt i sikkerhed de seneste år. ID-verifikation er tilgængeligt i mange lande, og photo-verifikation hjælper med at bekræfte at profilbilleder stemmer overens med den faktiske bruger. Der er dog stadig en del falske profiler og scammere, særligt i gratis-versionen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Appen tilbyder mulighed for at linke din Instagram eller Spotify, hvilket giver andre brugere mere kontekst. Vi anbefaler dog at du holder dit efternavn privat til du har mødt personen i den virkelige verden og har fået en god fornemmelse af dem.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Match-kvalitet i Danmark</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I de store danske byer — København, Aarhus, Odense — er Tinder suverænt med flest aktive brugere. Uden for byerne falder brugerbasens tæthed markant, og du kan opleve at se de samme profiler gentagne gange. Hvis du bor i en lille by, kan Badoo eller Match.com give bedre resultater.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Matchkvaliteten afhænger i høj grad af din profil. Med en optimeret profil (se vores <Link href="/guide/dating-profil-tips" className="text-[#ec4899] hover:underline">profil-tips</Link>) rapporterer mange brugere en markant stigning i matches og bedre konversationer.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Tinder Priser 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {priceTable.map((plan, i) => (
              <div
                key={plan.plan}
                className={`rounded-xl p-6 border-2 ${i === 1 ? 'border-[#ec4899] bg-pink-50' : 'border-gray-200 bg-gray-50'}`}
              >
                {i === 1 && (
                  <div className="text-xs font-bold text-[#ec4899] mb-2 uppercase tracking-wide">Mest populær</div>
                )}
                <h3 className="font-bold text-gray-900 mb-1">{plan.plan}</h3>
                <div className="text-2xl font-bold text-[#831843] mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={13} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User reviews */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Hvad Siger Danske Brugere?</h2>
          <div className="space-y-4">
            {userReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-pink-100">
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

      {/* Verdict */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Vores Endelige Vurdering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tinder forbliver i 2026 den bedste dating app for de fleste danskere — særligt dem under 35 i de større byer. Den massive brugerdatabase sikrer at du altid har nye matches at kigge på, og de seneste algoritmeforbedringer har markant hævet matchkvaliteten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gratis versionen er dog mere begrænset end nogensinde, og hvis du er seriøs med at finde et forhold, anbefaler vi at prøve Hinge eller Match.com som supplement eller alternativ. For casual dating og at møde mange nye mennesker er Tinder dog stadig king.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Vores samlede vurdering: <strong className="text-[#831843]">4.2/5 stjerner</strong>. Et solidt valg for langt de fleste, men ikke nødvendigvis det bedste til seriøst dating.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={app.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 bg-[#831843] hover:bg-[#500d28] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Prøv Tinder gratis <ExternalLink size={15} />
            </a>
            <Link href="/app/match-anmeldelse" className="inline-flex items-center gap-2 border border-[#831843] text-[#831843] hover:bg-pink-50 font-semibold px-6 py-3 rounded-xl transition-colors">
              Se Match.com anmeldelse <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
