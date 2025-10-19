import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CreditCard, CheckCircle } from 'lucide-react';

const Contact = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'stripe') {
      // In production, this would redirect to Stripe Checkout
      console.log('Processing Stripe payment...', formData);
      // Simulate successful booking
      setTimeout(() => {
        setBookingSubmitted(true);
      }, 1000);
    } else if (paymentMethod === 'paypal') {
      // In production, this would redirect to PayPal
      console.log('Processing PayPal payment...', formData);
      setTimeout(() => {
        setBookingSubmitted(true);
      }, 1000);
    }
  };

  if (bookingSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
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
            Start your journey to the Himalayas with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <MapPin className="h-6 w-6 text-himalayan-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thamel, Kathmandu 44600, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Phone className="h-6 w-6 text-himalayan-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+977 123 456 789</p>
                  <p className="text-gray-600 dark:text-gray-400">+977 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Mail className="h-6 w-6 text-himalayan-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@himalayansafari.com</p>
                  <p className="text-gray-600 dark:text-gray-400">booking@himalayansafari.com</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-6 bg-gradient-to-br from-himalayan-blue to-blue-600 rounded-lg text-white">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Secure Payment Options
                </h3>
                <p className="text-sm text-blue-50 mb-4">
                  We accept international and Nepali payment methods for your convenience
                </p>
                
                {/* International Payment Methods */}
                <div className="mb-4">
                  <p className="text-xs text-blue-100 mb-2 font-semibold">International</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-5 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" alt="JCB" className="h-6 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Nepali Payment Methods */}
                <div>
                  <p className="text-xs text-blue-100 mb-2 font-semibold">Nepal (Local)</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://esewa.com.np/common/images/esewa_logo.png" alt="eSewa" className="h-8 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://khalti.com/static/img/logo1.png" alt="Khalti" className="h-7 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <img src="https://fonepay.com/images/fonepay_logo.png" alt="FonePay" className="h-6 object-contain" />
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <span className="text-himalayan-blue font-bold text-sm">IME Pay</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <span className="text-red-600 font-bold text-sm">ConnectIPS</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center h-12">
                      <span className="text-blue-700 font-bold text-xs">Bank Transfer</span>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Booking Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none"
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
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none"
                      placeholder="+977 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select Trek/Tour *
                  </label>
                  <select
                    name="trek"
                    required
                    value={formData.trek}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none"
                  >
                    <option value="">Choose an adventure</option>
                    <option value="everest-base-camp">Everest Base Camp Trek</option>
                    <option value="annapurna-circuit">Annapurna Circuit Trek</option>
                    <option value="ghorepani-poon-hill">Ghorepani Poon Hill Trek</option>
                    <option value="mardi-himal">Mardi Himal Trek</option>
                    <option value="chitwan">Chitwan National Park Safari</option>
                    <option value="kathmandu-valley">Kathmandu Valley Tour</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      name="guests"
                      required
                      min="1"
                      max="15"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-himalayan-blue focus:border-transparent outline-none resize-none"
                    placeholder="Any special requests or questions?"
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
                  disabled={!paymentMethod}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                    paymentMethod
                      ? 'bg-gradient-to-r from-himalayan-blue to-blue-600 hover:shadow-lg hover:scale-105'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="h-5 w-5" />
                  Submit Booking Request
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  By submitting, you agree to our terms and conditions. 
                  Our team will contact you to finalize payment.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
