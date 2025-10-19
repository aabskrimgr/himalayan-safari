import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, Calendar, Users, Mountain, Shield, Award, Clock, BadgeCheck, X } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trek: '',
    guests: '1',
    date: '',
    message: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'card' | 'esewa' | 'khalti' | 'fonepay' | 'imepay' | 'connectips' | 'bank' | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Booking page mounted');
  }, []);

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (paymentMethod === 'stripe') {
      console.log('Processing Stripe payment...', formData);
      setTimeout(() => {
        setBookingSubmitted(true);
        setIsSubmitting(false);
      }, 1500);
    } else if (paymentMethod === 'paypal') {
      console.log('Processing PayPal payment...', formData);
      setTimeout(() => {
        setBookingSubmitted(true);
        setIsSubmitting(false);
      }, 1500);
    } else {
      console.log('Processing payment...', formData, paymentMethod);
      setTimeout(() => {
        setBookingSubmitted(true);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  if (bookingSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 max-w-md"
        >
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Booking Request Received!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Thank you for choosing Himalayan Safari. Our team will contact you within 24 hours to confirm your booking and process payment.
          </p>
          <button
            onClick={() => setBookingSubmitted(false)}
            className="px-6 py-3 bg-himalayan-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-himalayan-blue to-blue-600 bg-clip-text text-transparent">
            Book Your Adventure
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start your journey to the Himalayas with secure payment options
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Payment Methods Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Secure Payment Options
            </h2>
            
            <div className="bg-gradient-to-br from-himalayan-blue to-blue-600 rounded-2xl text-white p-8 mb-6">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <CreditCard className="h-6 w-6" />
                We Accept
              </h3>
              <p className="text-sm text-blue-50 mb-6">
                Choose from international and Nepali payment methods for your convenience
              </p>
              
              {/* International Payment Methods */}
              <div className="mb-6">
                <p className="text-sm text-blue-100 mb-3 font-semibold">International</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-5 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" alt="JCB" className="h-6 object-contain" />
                  </div>
                </div>
              </div>

              {/* Nepali Payment Methods */}
              <div>
                <p className="text-sm text-blue-100 mb-3 font-semibold">Nepal (Local)</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://esewa.com.np/common/images/esewa_logo.png" alt="eSewa" className="h-8 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://khalti.com/static/img/logo1.png" alt="Khalti" className="h-7 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <img src="https://fonepay.com/images/fonepay_logo.png" alt="FonePay" className="h-6 object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <span className="text-himalayan-blue font-bold text-sm">IME Pay</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <span className="text-red-600 font-bold text-sm">ConnectIPS</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center justify-center h-14">
                    <span className="text-blue-700 font-bold text-xs">Bank Transfer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-himalayan-blue to-blue-600 p-4">
                <h3 className="font-bold text-lg text-white">Why Book With Us?</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-himalayan-blue">Himalayan Safari</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">Others</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-gray-400" />
                          Licensed & Insured
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-gray-400" />
                          Certified Guides
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-gray-400">Sometimes</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          24/7 Support
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-gray-400">Limited</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-gray-400" />
                          ISO Certified
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-gray-400" />
                          Flexible Payments
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs font-semibold text-himalayan-blue">12 Methods</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-gray-400">2-3 Methods</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          Group Discounts
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs font-semibold text-green-600">Up to 25%</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-gray-400">10-15%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 border-t border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-300 font-medium text-center">
                  🎉 Save up to 25% on group bookings of 5+ people
                </p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Mountain className="h-7 w-7 text-himalayan-blue" />
                Complete Your Booking
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="+977 123 456 789"
                    />
                  </div>
                </div>

                {/* Trek Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Trek/Adventure *
                  </label>
                  <select
                    name="trek"
                    value={formData.trek}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                  >
                    <option value="">Choose your adventure</option>
                    <option value="everest">Everest Base Camp Trek</option>
                    <option value="annapurna">Annapurna Circuit Trek</option>
                    <option value="poonhill">Ghorepani Poon Hill Trek</option>
                    <option value="mardi">Mardi Himal Trek</option>
                    <option value="langtang">Langtang Valley Trek</option>
                    <option value="chitwan">Chitwan National Park Safari</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Guests *
                    </label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-himalayan-blue dark:bg-gray-700 dark:text-white transition-all resize-none"
                    placeholder="Any special requirements or questions?"
                  />
                </div>

                {/* Payment Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Choose Payment Method *
                  </label>
                  
                  {/* International Methods */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">International</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('stripe')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'stripe'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-4 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-4 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'card'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <div className="flex justify-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MC" className="h-5" />
                      </div>
                    </button>
                  </div>

                  {/* Nepali Methods */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">Nepal (Local)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('esewa')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'esewa'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <img src="https://esewa.com.np/common/images/esewa_logo.png" alt="eSewa" className="h-6 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('khalti')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'khalti'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <img src="https://khalti.com/static/img/logo1.png" alt="Khalti" className="h-5 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('fonepay')}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        paymentMethod === 'fonepay'
                          ? 'border-himalayan-blue bg-himalayan-blue/10'
                          : 'border-gray-300 dark:border-gray-600 hover:border-himalayan-blue'
                      }`}
                    >
                      <img src="https://fonepay.com/images/fonepay_logo.png" alt="FonePay" className="h-4 mx-auto" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('imepay')}
                      className={`p-3 border-2 rounded-lg font-semibold text-sm transition-all ${
                        paymentMethod === 'imepay'
                          ? 'border-himalayan-blue bg-himalayan-blue/10 text-himalayan-blue'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-himalayan-blue'
                      }`}
                    >
                      IME Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('connectips')}
                      className={`p-3 border-2 rounded-lg font-semibold text-sm transition-all ${
                        paymentMethod === 'connectips'
                          ? 'border-himalayan-blue bg-himalayan-blue/10 text-red-600'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-himalayan-blue'
                      }`}
                    >
                      ConnectIPS
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 border-2 rounded-lg font-semibold text-xs transition-all ${
                        paymentMethod === 'bank'
                          ? 'border-himalayan-blue bg-himalayan-blue/10 text-himalayan-blue'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-himalayan-blue'
                      }`}
                    >
                      Bank Transfer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!paymentMethod || isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                    paymentMethod && !isSubmitting
                      ? 'bg-himalayan-blue text-white hover:bg-blue-600 transform hover:scale-[1.02] shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5" />
                      Proceed to Payment
                    </>
                  )}
                </button>
                
                {!paymentMethod && (
                  <p className="text-sm text-red-500 text-center">
                    Please select a payment method to continue
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
