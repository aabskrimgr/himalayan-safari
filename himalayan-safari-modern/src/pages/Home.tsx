import { useState } from 'react';
import Hero from '../components/Hero';
import TrekCard from '../components/TrekCard';
import ContactSection from '../components/ContactSection';
import Newsletter from '../components/Newsletter';
import treksData from '../data/treks';
import { motion } from 'framer-motion';
import { Star, Quote, Award, Users, Mountain, Shield, Heart, Globe, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(treksData.map(trek => trek.category || 'Trekking')))];

  // Filter treks based on selected category
  const filteredTreks = selectedCategory === 'All' 
    ? treksData 
    : treksData.filter(trek => (trek.category || 'Trekking') === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-himalayan-blue to-blue-600 bg-clip-text text-transparent">
              Welcome to Himalayan Safari
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Embark on an unforgettable journey through the majestic Himalayas. We specialize in 
              providing authentic trekking experiences across Nepal, from the iconic Everest Base Camp 
              to the serene Annapurna region. With expert local guides and carefully curated itineraries, 
              we ensure your adventure is safe, memorable, and truly transformative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treks Section */}
      <section id="treks" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Adventures</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              From mountain treks to wildlife safaris - choose your adventure
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-himalayan-blue text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-sm">
                    ({category === 'All' ? treksData.length : treksData.filter(t => (t.category || 'Trekking') === category).length})
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTreks.map((trek, index) => (
              <TrekCard key={trek.id} trek={trek} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Trekkers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real experiences from real adventurers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                country: 'USA',
                trek: 'Everest Base Camp',
                rating: 5,
                text: 'An absolutely life-changing experience! Our guide was knowledgeable, patient, and made sure everyone in our group felt safe. The views were beyond words.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
              },
              {
                name: 'David Chen',
                country: 'Singapore',
                trek: 'Annapurna Circuit',
                rating: 5,
                text: 'Himalayan Safari exceeded all expectations. The attention to detail, from accommodation to meals, was exceptional. Highly recommend for anyone wanting an authentic trek.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
              },
              {
                name: 'Emma Williams',
                country: 'Australia',
                trek: 'Ghorepani Poon Hill',
                rating: 5,
                text: 'Perfect introduction to trekking in Nepal! The sunrise from Poon Hill was magical. Our guide shared so much about local culture and traditions.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-himalayan-blue/20" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-himalayan-blue/20"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.country}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <p className="text-sm font-semibold text-himalayan-blue">
                  {testimonial.trek}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Himalayan Safari
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your trusted partner for unforgettable Himalayan adventures since 2008
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, label: 'Happy Trekkers', value: '5000+' },
              { icon: Mountain, label: 'Successful Treks', value: '1000+' },
              { icon: Award, label: 'Years Experience', value: '15+' },
              { icon: Globe, label: 'Countries Served', value: '50+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-himalayan-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Himalayan Safari was founded in 2008 by a group of passionate trekking guides who wanted to 
                  share the beauty of Nepal's mountains with the world. What started as a small local operation 
                  has grown into one of the most trusted trekking companies in Nepal.
                </p>
                <p>
                  We believe that trekking in the Himalayas is more than just reaching a destination—it's about 
                  the journey, the people you meet, and the memories you create. Our team of expert local guides 
                  brings decades of combined experience to ensure your trek is safe, enjoyable, and unforgettable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                alt="Trekking in Himalayas"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-himalayan-blue to-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Himalayan Safari</h2>
            <p className="text-xl text-white/90">
              Experience the difference with a trusted partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Mountain className="h-14 w-14 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Expert Local Guides</h3>
              <p className="text-white/90 leading-relaxed">
                Our government-licensed guides are born and raised in the Himalayas. They bring deep knowledge of mountain routes, local culture, and ensure your safety with years of experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Shield className="h-14 w-14 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Safety First Always</h3>
              <p className="text-white/90 leading-relaxed">
                Comprehensive safety protocols including pre-trek health checks, altitude acclimatization, first aid training, emergency evacuation plans, and 24/7 support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Heart className="h-14 w-14 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Sustainable Tourism</h3>
              <p className="text-white/90 leading-relaxed">
                We practice responsible trekking by supporting local communities, using eco-friendly practices, and contributing to conservation efforts in the Himalayas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-himalayan-blue to-blue-600 bg-clip-text text-transparent">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our experienced guides and support staff are here to make your journey safe and memorable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Pemba Sherpa
                </h3>
                <p className="text-himalayan-blue font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Lead Trek Guide
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  15+ years of experience leading expeditions to Everest Base Camp and Annapurna region. 
                  Certified mountaineering guide with extensive knowledge of high-altitude trekking.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  Khumbu, Nepal
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Dawa Tamang
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Senior Mountain Guide
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  10+ years guiding treks in Langtang and Manaslu regions. Expert in wildlife safari tours 
                  and cultural heritage experiences. First aid certified and fluent in 4 languages.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  Langtang, Nepal
                </div>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Mingma Lama
                </h3>
                <p className="text-orange-600 dark:text-orange-400 font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Operations Manager
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  12+ years managing trek logistics and ensuring guest safety. Coordinates with local 
                  communities and handles all permits. Available 24/7 for client support.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  Kathmandu, Nepal
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-himalayan-blue to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about trekking with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is the best time to trek in Nepal?",
                answer: "The best times for trekking in Nepal are during Spring (March-May) and Autumn (September-November). These seasons offer clear skies, moderate temperatures, and the best mountain views. Spring brings blooming rhododendrons, while Autumn provides crisp, clear weather perfect for photography."
              },
              {
                question: "Do I need travel insurance for trekking?",
                answer: "Yes, comprehensive travel insurance is mandatory for all our treks. Your policy must cover emergency helicopter evacuation up to 6,000m, medical expenses, trip cancellation, and personal accident. We can recommend trusted insurance providers that specialize in adventure travel."
              },
              {
                question: "What fitness level is required for Himalayan treks?",
                answer: "Fitness requirements vary by trek. For easier treks like Poon Hill (3-5 days), basic fitness is sufficient. For Everest Base Camp or Annapurna Circuit (12-18 days), you should be able to hike 5-7 hours daily. We recommend starting cardio training 2-3 months before your trek."
              },
              {
                question: "What is included in the trek package price?",
                answer: "Our packages typically include: experienced guide and porters, accommodation in tea houses/lodges, all meals during trek, necessary permits (TIMS, National Park), airport transfers, and pre-trek briefing. International flights, Nepal visa, travel insurance, personal expenses, and tips are not included."
              },
              {
                question: "How do I deal with altitude sickness?",
                answer: "We follow proper acclimatization schedules with gradual altitude gain. Our guides are trained to recognize altitude sickness symptoms. We carry oxygen and first aid kits, and our itineraries include rest days. Stay hydrated, ascend slowly, and inform your guide immediately if you feel unwell."
              },
              {
                question: "Can I charge my devices during the trek?",
                answer: "Yes, most tea houses offer charging facilities for a small fee (USD 2-5 per device). We recommend bringing a power bank and universal adapter. Solar chargers can be useful but may not work on cloudy days. Electricity availability decreases at higher altitudes."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept international cards (Visa, Mastercard, Amex), PayPal, and Stripe. For guests in Nepal, we also accept eSewa, Khalti, FonePay, IME Pay, ConnectIPS, and bank transfers. A deposit (usually 25-30%) is required to confirm your booking."
              },
              {
                question: "What should I pack for a Himalayan trek?",
                answer: "Essential items include: good hiking boots, warm layers, waterproof jacket, sleeping bag (can be rented), water purification tablets, sunscreen, first aid kit, headlamp, and trekking poles. We provide a detailed packing list upon booking. Porters can carry up to 15kg of your gear."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-himalayan-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Himalayan Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you plan the trek of a lifetime. Book your adventure now!
            </p>
            <a
              href="/booking"
              className="inline-block px-8 py-4 bg-white text-himalayan-blue rounded-full font-semibold hover:bg-himalayan-snow transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book Your Adventure Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
