import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  DollarSign, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Mountain, 
  MapPin,
  Award,
  Info,
  Smile,
  Frown,
  CheckCircle
} from 'lucide-react';
import treksData from '../data/treks';
import PriceBreakdown from '../components/PriceBreakdown';

const TrekDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trek = treksData.find((t) => t.id === id);

  if (!trek) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Trek Not Found</h1>
          <Link to="/" className="text-himalayan-blue hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={trek.image}
          alt={trek.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {trek.title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              {trek.shortDescription}
            </motion.p>
          </div>
        </div>
        <Link
          to="/"
          className="absolute top-24 left-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trek Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Info className="h-8 w-8 text-himalayan-blue" />
                Trek Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{trek.summary}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Smile className="h-8 w-8 text-green-500" />
                Trek Highlights
              </h2>
              <ul className="space-y-3">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Lowlights */}
            {trek.lowlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Frown className="h-8 w-8 text-orange-500" />
                  Things to Consider
                </h2>
                <ul className="space-y-3">
                  {trek.lowlights.map((lowlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{lowlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Brief Itinerary</h2>
              <div className="space-y-4">
                {trek.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-himalayan-blue text-white rounded-full flex items-center justify-center font-bold">
                      Day {day.day}
                    </div>
                    <div className="flex-1 pt-3">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{day.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">Accommodation</h3>
                <p className="text-gray-700 dark:text-gray-300">{trek.accommodation}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Meals</h3>
                <p className="text-gray-700 dark:text-gray-300">{trek.meals}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Physical Conditions & Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">{trek.physicalConditions}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Season for Trekking</h3>
                <p className="text-gray-700 dark:text-gray-300">{trek.seasonDescription}</p>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {trek.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-24 space-y-4"
            >
              <h3 className="text-2xl font-bold mb-6">Trek Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Package Price</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.price}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Trek Duration</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Trip Duration</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.tripDuration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Difficulty Level</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.difficulty}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Highest Elevation</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.maxElevation}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Season</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.season}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Trek Type</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.trekType}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-himalayan-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Permits</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{trek.permits}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <PriceBreakdown price={parseInt(trek.price.replace(/[^0-9]/g, ''))} />
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Info className="h-4 w-4 inline mr-1 text-himalayan-blue" />
                  <strong>Special Note:</strong> To fight against Global Climate Change, we highly discourage the use of single-use plastic bottles. We will provide reusable drinking water bottles.
                </p>
              </div>

              <Link
                to="/booking"
                className="block w-full px-6 py-3 bg-gradient-to-r from-himalayan-blue to-blue-600 text-white text-center rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Book This Trek
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekDetails;
