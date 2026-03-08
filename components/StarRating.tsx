import { Star } from 'lucide-react';
import clsx from 'clsx';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showNumber?: boolean;
  reviews?: number;
}

export default function StarRating({ rating, maxStars = 5, size = 16, showNumber = true, reviews }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: maxStars }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={clsx(
              i < fullStars
                ? 'fill-yellow-400 text-yellow-400'
                : i === fullStars && hasHalf
                  ? 'fill-yellow-200 text-yellow-400'
                  : 'fill-gray-200 text-gray-300'
            )}
          />
        ))}
      </div>
      {showNumber && (
        <span className="text-sm font-semibold text-gray-700">{rating.toFixed(1)}</span>
      )}
      {reviews && (
        <span className="text-xs text-gray-500">({(reviews / 1000000).toFixed(1)}M anm.)</span>
      )}
    </div>
  );
}
