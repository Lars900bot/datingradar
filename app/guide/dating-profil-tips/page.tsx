import { Metadata } from 'next';
import Link from 'next/link';
import { Camera, ArrowRight, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dating Profil Tips – Sådan Får du 3x Flere Matches i 2026',
  description:
    'Komplet guide til den perfekte dating profil. Lær hvilke billeder du skal bruge, hvad du skal skrive i din bio, og hvilke fejl du skal undgå for at få langt flere matches.',
};

const photoTips = [
  {
    rank: 1,
    title: 'Primært billede: Smilende ansigt i dagslys',
    desc: 'Dit første billede er det vigtigste. Et naturligt smilende billede i godt dagslys — gerne udenfor — er det mest effektive. Undgå solbriller, hatte eller andre elementer der skjuler dit ansigt.',
    do: 'Smilende, tydelig ansigt, godt lys, naturlig baggrund',
    dont: 'Gruppefotos, solbriller, mørke, filtre der ændrer dit udseende',
  },
  {
    rank: 2,
    title: 'Action-billede: Vis din personlighed',
    desc: 'Det andet billede bør vise dig i en aktivitet du elsker — vandring, madlavning, sport, rejse. Dette giver potentielle matches noget konkret at spørge ind til og viser hvem du er.',
    do: 'Dig i aktivitet du elsker, naturligt og afslappet, med andre mennesker',
    dont: 'Kunstige poses, uinteressante baggrunde, tvunget smil',
  },
  {
    rank: 3,
    title: 'Socialt billede: Med venner eller familie',
    desc: 'Et billede med venner (eller family) viser at du er social og har relationer. Det signalerer sociale kompetencer og at du er nem at omgås. Sørg for at det er tydeligt hvem du er.',
    do: 'Med 1-2 venner, smilende, afslappet situation',
    dont: 'Grupper på 6+, ikke tydeligt hvem du er, formelle photos',
  },
  {
    rank: 4,
    title: 'Helkropsbillede: Vis din fremtoning',
    desc: 'Mange søger et helkropsbillede for at se din samlede fremtoning. Et naturligt billede — gerne på en tur, ved havet eller i en park — er det bedste valg. Undgå spejlselfies.',
    do: 'Stående, naturlig baggrund, afslappet tøj, naturligt lys',
    dont: 'Spejlselfie, klichefotos fra fitnesscenter, kunstige poser',
  },
];

const bioTemplates = [
  {
    type: 'Kort og konkret (anbefalet)',
    example: 'Ingeniør fra Aarhus, 31 år. Elsker vandring, god mad og at finde skjulte biograf-perler. Søger nogen jeg kan grine med og udforske verden ved siden af.',
    why: 'Konkret, personlig, positiv og specifik på hvad du søger. Giver gode samtaleemner.',
  },
  {
    type: 'Humoristisk',
    example: 'Professionel kaffe-drikker, amatør-kok der endnu ikke har sat ild til noget (vi skyder på "endnu"). Søger nogen der kan lide spontane ture og kan tilgive at jeg altid er 5 min. for tidlig.',
    why: 'Humor er en af de mest attraktive egenskaber. Viser at du ikke tager dig selv for seriøst.',
  },
  {
    type: 'Spørgsmålsbaseret',
    example: 'Hvad er din yndlings Copenhagen-cafe? Spørger fordi jeg har gennemgået dem alle. Udover kaffe: friluftsliv, rejser til lande de fleste aldrig hørte om, og lørdagsmorgener der varer til mandag.',
    why: 'Inviterer til dialog direkte og giver et naturligt åbningsspørgsmål for andre.',
  },
];

const mistakes = [
  {
    mistake: '"Kan lide at rejse og hygge"',
    better: 'Nævn et specifikt sted du elsker, eller en rejse du drømmer om: "Vil gerne til Japan næste år — nogen der kender gode tips?"',
  },
  {
    mistake: '"Søger nogen der kan gøre mig glad"',
    better: 'Fokusér på hvad du tilbyder og hvad I kan dele: "Søger nogen at dele gode oplevelser med"',
  },
  {
    mistake: '"Jeg er ikke god til dette her..."',
    better: 'Stå ved dig selv. At nedgøre sig selv i en profil sender et negativt signal. Spring helt over.',
  },
  {
    mistake: 'Lange lister af krav ("skal elske dyr, sport, natur, rejser...")',
    better: 'Hold det til 2-3 ting du virkelig holder af. Lange lister virker ekskluderende og upersonlige.',
  },
  {
    mistake: '"Spørg bare!" som eneste bio',
    better: 'Giv folk noget at spørge ind til. En tom bio signalerer at du ikke er seriøs nok til at bruge 5 minutter.',
  },
];

const platformSpecific = [
  {
    app: 'Tinder',
    tip: 'Hold bio under 150 tegn. Tinder er visual-first — dit primære billede er 80% af dine matches. Bioen bør kun understrege dit billede med ét markant kendetræk.',
  },
  {
    app: 'Hinge',
    tip: 'Brug alle 3 prompts strategisk. Vælg spørgsmål der viser din personlighed fra tre helt forskellige vinkler: humor, livsværdier og en konkret oplevelse/interesse.',
  },
  {
    app: 'Bumble',
    tip: 'Kvinder: Åbn altid med et specifikt spørgsmål baseret på mandens profil. Undgå "Hej, hvordan går det?" — dette er Bumbles største fælde.',
  },
  {
    app: 'Match.com',
    tip: 'Udfyld alle profilfelter grundigt. Match.coms algoritme belønner komplette profiler med bedre synlighed. Tag dig tid til at besvare personlighedsspørgsmålene ærligt.',
  },
];

export default function DatingProfilTipsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#831843] to-[#9d1f52] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            Komplet profil-guide · 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Den Perfekte Dating Profil –<br className="hidden md:block" />
            Få 3x Flere Matches
          </h1>
          <p className="text-lg text-pink-100 max-w-2xl leading-relaxed mb-6">
            Din dating-profil er det første — og ofte eneste — indtryk du giver. Studier viser at en optimeret profil kan øge dine matches med op til 300%. Vi viser dig præcis hvordan.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-pink-100">
            <span>✓ Billede-guide</span>
            <span>✓ Bio-skabeloner</span>
            <span>✓ Platform-specifikke tips</span>
            <span>✓ Fejl du skal undgå</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Hvorfor Din Profil Er Vigtigere End Alt Andet</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I online dating er din profil din personlige reklame. De fleste brugere bruger under 8 sekunder på at vurdere om de er interesserede — og den beslutning baseres primært på dit primære billede. Resten af profilens elementer er dog afgørende for at konvertere et like til en egentlig samtale.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En undersøgelse fra OkCupid viste at brugere med professionelt taget profilbilleder fik 3 gange så mange henvendelser som gennemsnittet. Men du behøver ikke en professionel fotograf — de rigtige tips kan gøre en enorm forskel med en almindelig smartphone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Denne guide er opdelt i fire dele: valg og optimering af billeder, skrivning af en god bio, platform-specifikke tips, og de mest almindelige fejl danskere laver i deres dating-profiler.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Tag dig tid til at gennemgå alle dele — selv en enkelt ændring kan gøre en markant forskel for dine resultater. Og husk: dating-apps er et langt spil. Optimér din profil én gang om måneden baseret på hvad der virker og hvad der ikke gør.
          </p>
        </div>
      </section>

      {/* Photo tips */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Camera size={24} className="text-[#ec4899]" />
            <h2 className="text-2xl font-bold text-[#831843]">De 4 Vigtigste Billeder i Din Profil</h2>
          </div>
          <div className="space-y-5">
            {photoTips.map((tip) => (
              <div key={tip.rank} className="bg-white rounded-xl p-6 border border-pink-100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#831843] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {tip.rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{tip.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-xs font-bold text-green-700 mb-1">✓ Gør dette</p>
                        <p className="text-xs text-gray-600">{tip.do}</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-xs font-bold text-red-600 mb-1">✗ Undgå dette</p>
                        <p className="text-xs text-gray-600">{tip.dont}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio templates */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-3">Bio-skabeloner der Virker</h2>
          <p className="text-gray-600 mb-8">Tre tilgange til en stærk dating-bio — tilpas dem til din personlighed</p>
          <div className="space-y-6">
            {bioTemplates.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="inline-block bg-[#831843] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {t.type}
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3 italic text-gray-700 text-sm leading-relaxed">
                  "{t.example}"
                </div>
                <p className="text-sm text-gray-500 flex items-start gap-2">
                  <span className="text-[#ec4899] font-bold flex-shrink-0">💡</span>
                  {t.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle size={24} className="text-orange-500" />
            <h2 className="text-2xl font-bold text-[#831843]">5 Fejl der Dræber Dine Chances</h2>
          </div>
          <div className="space-y-4">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs font-bold text-red-600 mb-2">❌ Undgå:</p>
                    <p className="text-sm text-gray-700 italic">"{m.mistake}"</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-bold text-green-700 mb-2">✓ Gør i stedet:</p>
                    <p className="text-sm text-gray-700">{m.better}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform specific */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Platform-specifikke Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {platformSpecific.map((p, i) => (
              <div key={i} className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                <div className="inline-block bg-[#831843] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {p.app}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{p.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithm tips */}
      <section className="py-14 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-5">Sådan Fungerer Dating-app Algoritmerne</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle de store dating apps bruger algoritmer til at bestemme hvem der ser din profil. At forstå disse grundlæggende principper kan hjælpe dig med at øge din synlighed markant — uden at betale for premium.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-[#831843]">Aktivitet belønnes.</strong> De fleste apps giver boost til brugere der er aktive — jo mere du bruger appen, jo mere synlig er din profil. Log ind dagligt, selv hvis det kun er i 10 minutter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-[#831843]">Profil-fuldstændighed tæller.</strong> Platforme som Match.com og Hinge viser komplette profiler mere. Sørg for at udfylde alle tilgængelige profilfelter med gennemtænkte svar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong className="text-[#831843]">Responshastighed og -rate.</strong> Algoritmer overvåger om du svarer på beskeder og matcher. En høj svar-rate — selv med korte beskeder — forbedrer din profils prioritering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-[#831843]">Nye profiler favoriseres.</strong> Mange apps giver midlertidigt boost til nye profiler eller netop opdaterede profiler. Opdatér et billede eller tilpas din bio en gang om måneden for at genaktivere dette boost.
          </p>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#831843] mb-6">Næste skridt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/" className="p-5 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-100 transition-all group">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-bold text-[#831843] mb-1">Sammenlign alle apps</h3>
              <p className="text-xs text-gray-500">Se hvilken app der passer bedst til dig</p>
              <div className="flex items-center gap-1 text-[#ec4899] text-xs mt-2 font-medium">
                Se oversigt <ArrowRight size={11} />
              </div>
            </Link>
            <Link href="/gratis-dating" className="p-5 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-100 transition-all group">
              <div className="text-2xl mb-2">🆓</div>
              <h3 className="font-bold text-[#831843] mb-1">Gratis dating apps</h3>
              <p className="text-xs text-gray-500">De bedste gratis apps i Danmark</p>
              <div className="flex items-center gap-1 text-[#ec4899] text-xs mt-2 font-medium">
                Læs guide <ArrowRight size={11} />
              </div>
            </Link>
            <Link href="/serios-dating" className="p-5 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-100 transition-all group">
              <div className="text-2xl mb-2">💑</div>
              <h3 className="font-bold text-[#831843] mb-1">Seriøst dating</h3>
              <p className="text-xs text-gray-500">Find et langsigtet forhold online</p>
              <div className="flex items-center gap-1 text-[#ec4899] text-xs mt-2 font-medium">
                Læs guide <ArrowRight size={11} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
