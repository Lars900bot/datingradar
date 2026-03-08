'use client';

import { useState } from 'react';
import { ChevronRight, RotateCcw, ExternalLink, Heart } from 'lucide-react';
import { apps, DatingApp } from '@/lib/apps';
import StarRating from './StarRating';

type Answer = {
  age?: string;
  goal?: string;
  budget?: string;
};

interface QuizResult {
  app: DatingApp;
  score: number;
  reason: string;
}

function calculateResults(answers: Answer): QuizResult[] {
  const scores: Record<string, { score: number; reason: string }> = {};

  for (const app of apps) {
    scores[app.id] = { score: 0, reason: '' };
  }

  // Age scoring
  if (answers.age === '18-25') {
    scores['tinder'].score += 3;
    scores['badoo'].score += 2;
    scores['happn'].score += 2;
    scores['bumble'].score += 1;
    scores['hinge'].score += 1;
  } else if (answers.age === '26-35') {
    scores['hinge'].score += 3;
    scores['bumble'].score += 3;
    scores['tinder'].score += 2;
    scores['match'].score += 1;
    scores['happn'].score += 1;
  } else if (answers.age === '36-45') {
    scores['match'].score += 3;
    scores['elitesingles'].score += 3;
    scores['bumble'].score += 2;
    scores['hinge'].score += 1;
    scores['parship'].score += 2;
  } else if (answers.age === '45+') {
    scores['match'].score += 3;
    scores['parship'].score += 3;
    scores['elitesingles'].score += 2;
  }

  // Goal scoring
  if (answers.goal === 'seriøst') {
    scores['hinge'].score += 3;
    scores['match'].score += 3;
    scores['bumble'].score += 2;
    scores['parship'].score += 3;
    scores['elitesingles'].score += 2;
    scores['tinder'].score -= 1;
    scores['badoo'].score -= 1;
  } else if (answers.goal === 'casual') {
    scores['tinder'].score += 3;
    scores['badoo'].score += 3;
    scores['happn'].score += 2;
    scores['bumble'].score += 1;
  } else if (answers.goal === 'venner') {
    scores['badoo'].score += 3;
    scores['bumble'].score += 2;
    scores['happn'].score += 2;
    scores['tinder'].score += 1;
  } else if (answers.goal === 'usikker') {
    scores['tinder'].score += 2;
    scores['hinge'].score += 2;
    scores['bumble'].score += 2;
    scores['badoo'].score += 1;
  }

  // Budget scoring
  if (answers.budget === 'gratis') {
    scores['tinder'].score += 2;
    scores['badoo'].score += 2;
    scores['happn'].score += 2;
    scores['hinge'].score += 1;
    scores['bumble'].score += 1;
    scores['match'].score -= 2;
    scores['elitesingles'].score -= 3;
    scores['parship'].score -= 3;
  } else if (answers.budget === '100') {
    scores['tinder'].score += 2;
    scores['badoo'].score += 2;
    scores['happn'].score += 2;
    scores['bumble'].score += 1;
    scores['hinge'].score += 1;
    scores['match'].score += 0;
    scores['elitesingles'].score -= 2;
    scores['parship'].score -= 2;
  } else if (answers.budget === 'ligegyldigt') {
    scores['parship'].score += 2;
    scores['elitesingles'].score += 2;
    scores['match'].score += 2;
    scores['hinge'].score += 1;
    scores['bumble'].score += 1;
  }

  // Build results
  const reasonMap: Record<string, string> = {
    tinder: 'Verdens største dating app — perfekt til dig der vil møde mange nye mennesker hurtigt.',
    match: 'Danmarks stærkeste platform for seriøst dating med over 100.000 danske brugere.',
    badoo: 'Kæmpe brugerdatabase og gratis at komme i gang — godt til casual dating og nye bekendtskaber.',
    happn: 'Unik GPS-baseret app der finder folk du krydser vej med i hverdagen.',
    hinge: '"Designed to be deleted" — fokuserer på personlighed og kompatibilitet frem for udseende.',
    bumble: 'Kvinder tager initiativet, hvilket skaber et mere respektfuldt og sikkert dating-miljø.',
    elitesingles: 'Dedikeret platform for uddannede og karrierebevidste singler der søger en ligesindet.',
    parship: 'Europas førende seriøse dating-platform med videnskabelig personlighedsanalyse.',
  };

  return Object.entries(scores)
    .map(([id, { score }]) => ({
      app: apps.find(a => a.id === id)!,
      score,
      reason: reasonMap[id] || '',
    }))
    .filter(r => r.app && r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

const questions = [
  {
    id: 'age',
    question: 'Hvad er din alder?',
    icon: '🎂',
    options: [
      { value: '18-25', label: '18–25 år' },
      { value: '26-35', label: '26–35 år' },
      { value: '36-45', label: '36–45 år' },
      { value: '45+', label: '45+ år' },
    ],
  },
  {
    id: 'goal',
    question: 'Hvad søger du?',
    icon: '💬',
    options: [
      { value: 'seriøst', label: '💑 Seriøst forhold' },
      { value: 'casual', label: '😎 Casual dating' },
      { value: 'venner', label: '👫 Nye venner' },
      { value: 'usikker', label: '🤷 Ikke sikker endnu' },
    ],
  },
  {
    id: 'budget',
    question: 'Hvad er dit budget?',
    icon: '💰',
    options: [
      { value: 'gratis', label: '🆓 Kun gratis apps' },
      { value: '100', label: '💳 Op til 100 kr/md' },
      { value: 'ligegyldigt', label: '💎 Prisen er ligegyldig' },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [results, setResults] = useState<QuizResult[] | null>(null);

  function handleAnswer(key: string, value: string) {
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResults(calculateResults(newAnswers));
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResults(null);
  }

  if (results) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🎯</div>
          <h3 className="text-2xl font-bold text-[#831843]">Dine bedste matches!</h3>
          <p className="text-gray-500 mt-1">Baseret på dine svar anbefaler vi:</p>
        </div>
        <div className="space-y-4">
          {results.map((result, i) => (
            <div
              key={result.app.id}
              className={`rounded-xl p-5 border-2 flex flex-col sm:flex-row sm:items-center gap-4 ${
                i === 0 ? 'border-[#ec4899] bg-pink-50' : 'border-gray-100 bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                    i === 0 ? 'bg-[#ec4899]' : 'bg-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-gray-900 text-lg">{result.app.name}</span>
                    {i === 0 && <span className="text-xs bg-[#ec4899] text-white px-2 py-0.5 rounded-full font-semibold">Bedst valg</span>}
                    <StarRating rating={result.app.rating} size={13} />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{result.reason}</p>
                  <p className="text-xs text-[#831843] font-medium mt-1">{result.app.priceLabel}</p>
                </div>
              </div>
              <a
                href={result.app.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  i === 0
                    ? 'bg-[#831843] hover:bg-[#500d28] text-white'
                    : 'border border-[#831843] text-[#831843] hover:bg-pink-50'
                }`}
              >
                Prøv gratis <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={reset}
          className="mt-6 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mx-auto transition-colors"
        >
          <RotateCcw size={14} />
          Tag quizzen igen
        </button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all ${
              i < step ? 'bg-[#ec4899]' : i === step ? 'bg-[#ec4899] opacity-60' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <div className="text-4xl mb-3">{q.icon}</div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Spørgsmål {step + 1} af {questions.length}</p>
        <h3 className="text-2xl font-bold text-[#831843]">{q.question}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(q.id, opt.value)}
            className="p-4 text-left rounded-xl border-2 border-gray-200 hover:border-[#ec4899] hover:bg-pink-50 transition-all group"
          >
            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#831843] flex items-center gap-2">
              {opt.label}
              <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 text-[#ec4899]" />
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
        <Heart size={12} className="text-[#ec4899]" />
        Gratis og upartisk rådgivning
      </div>
    </div>
  );
}
