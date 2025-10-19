import { motion } from 'framer-motion';
import { Award, Users, Mountain, Shield, Heart, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Trekkers', value: '5000+' },
    { icon: Mountain, label: 'Successful Treks', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Globe, label: 'Countries Served', value: '50+' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety is our top priority. Our experienced guides are trained in first aid and high-altitude medicine.',
    },
    {
      icon: Heart,
      title: 'Sustainable Tourism',
      description: 'We practice responsible tourism, supporting local communities and preserving the natural environment.',
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'All our guides are government-licensed, locally trained, and have years of trekking experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-himalayan-blue/10 to-white dark:from-himalayan-blue/5 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-himalayan-blue to-blue-600 bg-clip-text text-transparent">
              About Himalayan Safari
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              For over 15 years, we've been guiding adventurers through the world's most spectacular mountain landscapes. 
              Our passion is sharing the magic of the Himalayas while ensuring sustainable and responsible tourism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
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
                <p>
                  Based in Kathmandu, we organize treks throughout Nepal, from the iconic Everest Base Camp to 
                  hidden gems like Mardi Himal. We also offer wildlife safaris in Chitwan and cultural tours 
                  around the Kathmandu Valley.
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

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence, safety, and sustainability sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="h-12 w-12 text-himalayan-blue mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
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
                Our government-licensed guides are born and raised in the Himalayas. They bring deep knowledge of mountain routes, local culture, and ensure your safety with years of experience in high-altitude trekking.
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
                Comprehensive safety protocols including pre-trek health checks, altitude acclimatization schedules, first aid training, emergency evacuation plans, and 24/7 support. Your wellbeing is our priority.
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
                We practice responsible trekking by supporting local communities, using eco-friendly practices, providing reusable water bottles, proper waste management, and contributing to conservation efforts in the Himalayas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Experienced guides dedicated to making your journey unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Pemba Sherpa',
                role: 'Lead Guide - Everest Region',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Ang Dorjee',
                role: 'Senior Guide - Annapurna Region',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Lakpa Tamang',
                role: 'Cultural Guide',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-himalayan-blue">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
