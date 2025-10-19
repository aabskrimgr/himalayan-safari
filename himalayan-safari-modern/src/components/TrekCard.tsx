import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Sun, Snowflake, Leaf, CloudRain } from 'lucide-react';
import type { Trek } from '../data/treks';

interface TrekCardProps {
  trek: Trek;
  index: number;
}

const TrekCard = ({ trek, index }: TrekCardProps) => {
  // Determine best season icon and color
  const getSeasonInfo = (duration: string) => {
    const durationLower = duration.toLowerCase();
    if (durationLower.includes('spring') || durationLower.includes('march') || durationLower.includes('april') || durationLower.includes('may')) {
      return { icon: Leaf, text: 'Spring', color: 'text-green-500', bg: 'bg-green-500/10' };
    } else if (durationLower.includes('summer') || durationLower.includes('june') || durationLower.includes('july') || durationLower.includes('august')) {
      return { icon: Sun, text: 'Summer', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
    } else if (durationLower.includes('autumn') || durationLower.includes('fall') || durationLower.includes('september') || durationLower.includes('october') || durationLower.includes('november')) {
      return { icon: CloudRain, text: 'Autumn', color: 'text-orange-500', bg: 'bg-orange-500/10' };
    } else if (durationLower.includes('winter') || durationLower.includes('december') || durationLower.includes('january') || durationLower.includes('february')) {
      return { icon: Snowflake, text: 'Winter', color: 'text-blue-400', bg: 'bg-blue-400/10' };
    }
    // Default: Recommend Spring & Autumn (best times for Nepal)
    return { icon: Sun, text: 'Spring/Autumn', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
  };

  const seasonInfo = getSeasonInfo(trek.duration);
  const SeasonIcon = seasonInfo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group h-full"
    >
      <Link to={`/trek/${trek.id}`}>
        <div className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-himalayan-blue/50 dark:hover:border-himalayan-blue/50 transition-all duration-300 hover:shadow-lg">
          {/* Image Container - More compact */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={trek.image}
              alt={trek.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Simple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Price badge - top right, minimal */}
            <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
              <p className="text-sm font-bold text-himalayan-blue">{trek.price}</p>
            </div>

            {/* Difficulty badge - bottom left, subtle */}
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
              <span className="text-xs font-medium text-white">{trek.difficulty}</span>
            </div>

            {/* Best Season badge - top left */}
            <div className={`absolute top-3 left-3 ${seasonInfo.bg} backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1`}>
              <SeasonIcon className={`h-3.5 w-3.5 ${seasonInfo.color}`} />
              <span className={`text-xs font-medium ${seasonInfo.color}`}>{seasonInfo.text}</span>
            </div>
          </div>

          {/* Content - More spacious and clean */}
          <div className="p-5">
            {/* Category tag - minimal */}
            {trek.category && (
              <span className="inline-block text-xs font-medium text-himalayan-blue bg-himalayan-blue/10 px-2.5 py-1 rounded-full mb-3">
                {trek.category}
              </span>
            )}

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-himalayan-blue transition-colors">
              {trek.title}
            </h3>

            {/* Info - Horizontal layout, more compact */}
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-xs">{trek.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-xs">{trek.maxElevation}</span>
              </div>
            </div>

            {/* Short description - 2 lines max */}
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
              {trek.shortDescription}
            </p>

            {/* CTA Button - Full width, simple */}
            <button className="w-full py-2.5 text-sm font-semibold text-himalayan-blue border border-himalayan-blue rounded-lg hover:bg-himalayan-blue hover:text-white transition-all duration-300">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TrekCard;
