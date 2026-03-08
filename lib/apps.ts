export interface DatingApp {
  id: string;
  name: string;
  url: string;
  affiliateUrl: string;
  tagline: string;
  description: string;
  rating: number;
  reviews: number;
  users: string;
  freeBasic: boolean;
  priceFrom: number | null;
  priceLabel: string;
  ageGroup: string;
  ageMin: number;
  ageMax: number;
  bestFor: string[];
  tags: string[];
  pros: string[];
  cons: string[];
  matchRate: string;
  color: string;
}

export const apps: DatingApp[] = [
  {
    id: 'tinder',
    name: 'Tinder',
    url: 'tinder.com',
    affiliateUrl: 'https://tinder.com',
    tagline: 'Verdens mest populære dating app',
    description: 'Tinder er den suverænt mest downloadede dating app i verden med over 50 millioner aktive brugere. Swipe højre for at like, venstre for at passe. Når to personer swiper hinanden til højre, får I et match og kan begynde at skrive.',
    rating: 4.2,
    reviews: 15200000,
    users: '50M+',
    freeBasic: true,
    priceFrom: 79,
    priceLabel: 'Gratis / Fra 79 kr/md',
    ageGroup: 'Alle aldersgrupper',
    ageMin: 18,
    ageMax: 99,
    bestFor: ['casual', 'unge'],
    tags: ['Gratis basis', 'Casual', 'Populær', 'Alle aldre'],
    pros: ['Kæmpe brugerdatabase', 'Nem at komme i gang', 'Gratis basis version', 'Hurtige matches'],
    cons: ['Mange falske profiler', 'Premium kan blive dyrt', 'Fokus på udseende'],
    matchRate: 'Høj',
    color: '#fe3c72',
  },
  {
    id: 'match',
    name: 'Match.com',
    url: 'match.com',
    affiliateUrl: 'https://match.com',
    tagline: 'Danmarks foretrukne for seriøst dating',
    description: 'Match.com er en af de ældste og mest respekterede dating-platforme i verden. Med over 100.000 danske brugere er det ideelt for dem der søger et seriøst og langsigtet forhold.',
    rating: 4.1,
    reviews: 890000,
    users: '100K+ DK',
    freeBasic: false,
    priceFrom: 149,
    priceLabel: 'Fra 149 kr/md',
    ageGroup: '30+ aldersgruppe',
    ageMin: 30,
    ageMax: 99,
    bestFor: ['seriøst'],
    tags: ['Seriøst dating', '30+', 'Betalt', 'Erfarne singler'],
    pros: ['Seriøse brugere', 'Grundige profiler', 'Dansk support', 'Høj kvalitet'],
    cons: ['Ingen gratis version', 'Relativt dyrt', 'Primært 30+'],
    matchRate: 'Middel',
    color: '#e8173a',
  },
  {
    id: 'badoo',
    name: 'Badoo',
    url: 'badoo.com',
    affiliateUrl: 'https://badoo.com',
    tagline: 'Mød nye mennesker i nærheden',
    description: 'Badoo er en af verdens største sociale netværk for dating med over 500 millioner registrerede brugere globalt. Appen kombinerer sociale features med dating og giver gode muligheder for at møde folk i nærheden.',
    rating: 3.9,
    reviews: 8500000,
    users: '500M+',
    freeBasic: true,
    priceFrom: 59,
    priceLabel: 'Gratis / Fra 59 kr/md',
    ageGroup: 'Alle aldre',
    ageMin: 18,
    ageMax: 99,
    bestFor: ['casual'],
    tags: ['Gratis basis', 'Social', 'Stor database', 'Casual'],
    pros: ['Stor brugerdatabase', 'Gratis basis', 'Sociale features', 'Billig premium'],
    cons: ['Mange inaktive profiler', 'Ældre design', 'Reklamer på gratis version'],
    matchRate: 'Høj',
    color: '#6c47ff',
  },
  {
    id: 'happn',
    name: 'Happn',
    url: 'happn.com',
    affiliateUrl: 'https://happn.com',
    tagline: 'Genfind folk du har krydset vej med',
    description: 'Happn er en unik dating app der bruger din GPS til at finde matches du har mødt i det virkelige liv. Appen viser dig folk du fysisk har krydset vej med, hvilket gør mødet mere naturligt og organisk.',
    rating: 3.8,
    reviews: 1200000,
    users: '100M+',
    freeBasic: true,
    priceFrom: 69,
    priceLabel: 'Gratis / Fra 69 kr/md',
    ageGroup: '20-35 aldersgruppe',
    ageMin: 20,
    ageMax: 35,
    bestFor: ['casual', 'lokation'],
    tags: ['GPS-baseret', 'Gratis basis', 'Unge', 'Kreativ'],
    pros: ['Unik lokationsbaseret matching', 'Naturlige møder', 'Gratis basis', 'Kreativt koncept'],
    cons: ['Kræver mange brugere i nærhed', 'Bedre i store byer', 'Begrænset udenfor byerne'],
    matchRate: 'Middel',
    color: '#ff4e6a',
  },
  {
    id: 'hinge',
    name: 'Hinge',
    url: 'hinge.co',
    affiliateUrl: 'https://hinge.co',
    tagline: '"Designed to be deleted" – til seriøse relationer',
    description: 'Hinge er designet med ét mål: at du skal finde et rigtigt forhold og slette appen. Med innovative profil-prompts og en algoritme der fokuserer på kompatibilitet frem for udseende, er Hinge den nye favorit for unge der søger noget seriøst.',
    rating: 4.4,
    reviews: 3200000,
    users: '23M+',
    freeBasic: true,
    priceFrom: 119,
    priceLabel: 'Gratis / Fra 119 kr/md',
    ageGroup: '25-35 aldersgruppe',
    ageMin: 25,
    ageMax: 35,
    bestFor: ['seriøst'],
    tags: ['Seriøst', 'Gratis basis', 'Unge voksne', 'Kvalitet'],
    pros: ['Fokus på personlighed', 'Kreative profil-prompts', 'God algoritme', 'Seriøse brugere'],
    cons: ['Mindre database i Danmark', 'Premium er dyrt', 'Bedst 25-35'],
    matchRate: 'Høj',
    color: '#e54065',
  },
  {
    id: 'bumble',
    name: 'Bumble',
    url: 'bumble.com',
    affiliateUrl: 'https://bumble.com',
    tagline: 'Kvinder tager det første skridt',
    description: 'Bumble er dating appen hvor kvinder sender den første besked. Dette unikke koncept skaber et mere respektfuldt og sikkert miljø og reducerer uønskede henvendelser markant. Appen er særligt populær blandt kvinder og moderne mænd.',
    rating: 4.3,
    reviews: 4100000,
    users: '50M+',
    freeBasic: true,
    priceFrom: 89,
    priceLabel: 'Gratis / Fra 89 kr/md',
    ageGroup: '25-35 aldersgruppe',
    ageMin: 25,
    ageMax: 35,
    bestFor: ['seriøst', 'casual'],
    tags: ['Kvinder first', 'Gratis basis', 'Respektfuldt', 'Modern'],
    pros: ['Kvinder styrer samtalen', 'Sikkert miljø', 'Aktive brugere', 'God brugeroplevelse'],
    cons: ['24 timers match-vindue', 'Bedst for kvinder', 'Dyrere premium'],
    matchRate: 'Høj',
    color: '#fccc00',
  },
  {
    id: 'elitesingles',
    name: 'EliteSingles',
    url: 'elitesingles.dk',
    affiliateUrl: 'https://elitesingles.dk',
    tagline: 'Dating for akademikere og professionelle',
    description: 'EliteSingles henvender sig til uddannede og karrierebevidste singler der søger en ligesindet partner. Appen bruger en grundig personlighedstest til at matche dig med kompatible brugere, og over 80% af brugerne har en universitetsuddannelse.',
    rating: 4.0,
    reviews: 680000,
    users: '13M+',
    freeBasic: false,
    priceFrom: 249,
    priceLabel: 'Fra 249 kr/md',
    ageGroup: '30-55 aldersgruppe',
    ageMin: 30,
    ageMax: 55,
    bestFor: ['seriøst', 'professionelle'],
    tags: ['Akademikere', 'Seriøst', 'Premium', '30-55'],
    pros: ['Høj uddannelsesniveau', 'Seriøse intentioner', 'God personlighedstest', 'Sikker platform'],
    cons: ['Dyrt abonnement', 'Færre profiler', 'Primært for 30+'],
    matchRate: 'Lav-Middel',
    color: '#4a4a8a',
  },
  {
    id: 'parship',
    name: 'Parship',
    url: 'parship.dk',
    affiliateUrl: 'https://parship.dk',
    tagline: 'Videnskabeligt matchmaking til langvarige forhold',
    description: 'Parship er Europas førende platform for seriøst dating baseret på videnskabelig personlighedsanalyse. Med en avanceret kompatibilitetstest der vurderer 32 personlighedsdimensioner, finder Parship dybt kompatible matches for dig der søger et langsigtet forhold.',
    rating: 4.1,
    reviews: 520000,
    users: '5M+',
    freeBasic: false,
    priceFrom: 299,
    priceLabel: 'Fra 299 kr/md',
    ageGroup: '35-60 aldersgruppe',
    ageMin: 35,
    ageMax: 60,
    bestFor: ['seriøst'],
    tags: ['Videnskabeligt', 'Seriøst', 'Premium', '35+'],
    pros: ['Avanceret kompatibilitetstest', 'Meget seriøse brugere', 'Høj succesrate', 'Diskret platform'],
    cons: ['Dyrest på markedet', 'Få profiler', 'Langsom matchingproces'],
    matchRate: 'Lav',
    color: '#8b1a1a',
  },
];

export function getApp(id: string): DatingApp | undefined {
  return apps.find(a => a.id === id);
}

export function getAppsByCategory(category: string): DatingApp[] {
  return apps.filter(a => a.bestFor.includes(category));
}

export function getFreeApps(): DatingApp[] {
  return apps.filter(a => a.freeBasic);
}
