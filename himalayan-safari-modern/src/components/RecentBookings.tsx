import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin } from 'lucide-react';

interface Booking {
  name: string;
  location: string;
  trek: string;
  timeAgo: string;
}

const recentBookings: Booking[] = [
  { name: 'Sarah M.', location: 'USA', trek: 'Everest Base Camp Trek', timeAgo: '2 hours ago' },
  { name: 'James K.', location: 'UK', trek: 'Annapurna Circuit Trek', timeAgo: '5 hours ago' },
  { name: 'Yuki T.', location: 'Japan', trek: 'Langtang Valley Trek', timeAgo: '8 hours ago' },
  { name: 'Emma L.', location: 'Australia', trek: 'Manaslu Circuit Trek', timeAgo: '12 hours ago' },
  { name: 'Marco P.', location: 'Italy', trek: 'Upper Mustang Trek', timeAgo: '1 day ago' },
  { name: 'Sophie D.', location: 'France', trek: 'Gokyo Lakes Trek', timeAgo: '1 day ago' },
  { name: 'David R.', location: 'Canada', trek: 'Chitwan Safari', timeAgo: '2 days ago' },
  { name: 'Lisa H.', location: 'Germany', trek: 'Poon Hill Trek', timeAgo: '2 days ago' },
];

const RecentBookings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentBookings.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBooking = recentBookings[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-24 left-6 z-40 max-w-sm"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 border-l-4 border-green-500"
        >
          <div className="flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {currentBooking.name}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {currentBooking.timeAgo}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                Booked: <span className="font-medium">{currentBooking.trek}</span>
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3" />
                <span>{currentBooking.location}</span>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <motion.div
            className="h-1 bg-green-500 rounded-full mt-3"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default RecentBookings;
