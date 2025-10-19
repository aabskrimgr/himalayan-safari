import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface PricingDetails {
  basePrice: number;
  included: string[];
  excluded: string[];
  groupDiscounts: { size: string; discount: string }[];
}

interface PriceBreakdownProps {
  price: number;
}

const PriceBreakdown = ({ price }: PriceBreakdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate approximate breakdown
  const breakdown = {
    permits: Math.round(price * 0.2),
    accommodation: Math.round(price * 0.25),
    meals: Math.round(price * 0.2),
    guide: Math.round(price * 0.2),
    transportation: Math.round(price * 0.15),
  };

  const pricingDetails: PricingDetails = {
    basePrice: price,
    included: [
      'All necessary permits',
      'Accommodation during trek',
      '3 meals a day (breakfast, lunch, dinner)',
      'Experienced trekking guide',
      'Porter service (1 porter for 2 trekkers)',
      'Transportation to/from trailhead',
      'First aid kit and emergency assistance',
      'Government taxes and service charges',
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses and tips',
      'Extra meals in Kathmandu',
      'Alcoholic beverages',
    ],
    groupDiscounts: [
      { size: '2-4 people', discount: '10%' },
      { size: '5-8 people', discount: '15%' },
      { size: '9-15 people', discount: '20%' },
      { size: '16+ people', discount: '25%' },
    ],
  };

  return (
    <div className="w-full">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-himalayan-blue" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            View Price Breakdown
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4 bg-white dark:bg-gray-800 rounded-lg mt-2 border border-gray-200 dark:border-gray-700">
              {/* Cost Breakdown */}
              <div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  Cost Breakdown
                </h4>
                <div className="space-y-2">
                  {Object.entries(breakdown).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        ${value}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between font-semibold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-himalayan-blue">${price}</span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-2">
                  ✓ What's Included
                </h4>
                <ul className="space-y-1">
                  {pricingDetails.included.map((item, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div>
                <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-2">
                  ✗ Not Included
                </h4>
                <ul className="space-y-1">
                  {pricingDetails.excluded.map((item, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group Discounts */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-lg">
                <h4 className="font-semibold text-sm text-green-700 dark:text-green-400 mb-2">
                  💰 Group Discounts
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {pricingDetails.groupDiscounts.map((discount, index) => (
                    <div
                      key={index}
                      className="text-xs bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{discount.size}:</span>
                      <span className="font-semibold text-green-600 dark:text-green-400 ml-1">
                        {discount.discount} OFF
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PriceBreakdown;
