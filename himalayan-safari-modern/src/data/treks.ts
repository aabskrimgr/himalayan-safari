export interface Trek {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  price: string;
  duration: string;
  tripDuration: string;
  difficulty: string;
  maxElevation: string;
  season: string;
  trekType: string;
  permits: string;
  highlights: string[];
  lowlights: string[];
  summary: string;
  itinerary: Array<{
    day: number;
    title: string;
    description?: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  accommodation: string;
  meals: string;
  physicalConditions: string;
  seasonDescription: string;
  category?: string;
}

export const treksData: Trek[] = [
  {
    id: 'chitwan-jungle-safari',
    title: 'Chitwan National Park Jungle Safari',
    shortDescription: 'Experience wildlife adventure in Chitwan National Park, a UNESCO World Heritage Site. Spot one-horned rhinos, Bengal tigers, elephants, and over 500 species of birds in Nepal\'s premier wildlife destination.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
    price: 'USD 350 per Person (3 Days)',
    duration: '3 Days / 2 Nights',
    tripDuration: '3 Days',
    difficulty: 'Easy',
    maxElevation: '150m',
    season: 'Year-round (Best: October-March)',
    trekType: 'Wildlife Safari & Nature Tour',
    permits: 'Chitwan National Park Entry Fee',
    category: 'Wildlife Safari',
    highlights: [
      'Spot one-horned rhinoceros and Royal Bengal tigers',
      'Elephant safari through dense jungle',
      'Canoe ride on Rapti River - crocodiles and birds',
      'Visit elephant breeding center',
      'Jungle walk with naturalist guide',
      'Tharu cultural dance performance',
      'Bird watching - over 500 species',
      'UNESCO World Heritage Site since 1984'
    ],
    lowlights: [
      'Wildlife sightings not guaranteed (nature dependent)',
      'Can be hot and humid in summer',
      'Mosquitoes during monsoon season'
    ],
    summary: 'Chitwan National Park, established in 1973, is Nepal\'s first national park and a UNESCO World Heritage Site. Located in the subtropical lowlands of south-central Nepal, it covers 932 square kilometers of forests, grasslands, and riverine ecosystems. The park is home to the endangered one-horned rhinoceros, Royal Bengal tiger, gharial crocodile, and Asian elephant. With over 500 species of birds, it\'s a paradise for bird watchers. Activities include elephant-back safaris, jeep safaris, canoe rides, jungle walks, and experiencing the indigenous Tharu culture. This is a perfect addition to your Nepal itinerary for wildlife enthusiasts.',
    itinerary: [
      { 
        day: 1, 
        title: 'Drive/Fly to Chitwan, Village Tour & Sunset',
        description: 'Drive from Kathmandu/Pokhara to Chitwan (5-6 hrs) or fly to Bharatpur. Check-in at resort. Afternoon Tharu village tour and sunset view by Rapti River. Evening Tharu cultural dance program.'
      },
      { 
        day: 2, 
        title: 'Full Day Jungle Activities',
        description: 'Early morning canoe ride on Rapti River to spot crocodiles and birds. Jungle walk with naturalist guide. Elephant safari or jeep safari through the national park. Visit elephant breeding center. Evening nature walk or bird watching.'
      },
      { 
        day: 3, 
        title: 'Bird Watching & Departure',
        description: 'Early morning bird watching tour. Visit Gharial conservation project. Depart to Kathmandu/Pokhara or continue your Nepal journey.'
      }
    ],
    faqs: [
      {
        question: 'What is the best time to visit Chitwan?',
        answer: 'October to March is ideal - dry season with pleasant weather and better wildlife visibility. March-April is particularly good for tiger sightings as they come out for water.'
      },
      {
        question: 'Will I definitely see tigers and rhinos?',
        answer: 'Rhino sightings are very common (90% success rate). Tigers are rare and elusive - only 10-15% chance. But the overall wildlife experience is excellent with deer, monkeys, crocodiles, and numerous birds.'
      },
      {
        question: 'Is it safe to walk in the jungle?',
        answer: 'Yes, with experienced naturalist guides. Always follow guide instructions and maintain safe distances from animals.'
      },
      {
        question: 'Can I combine Chitwan with trekking?',
        answer: 'Absolutely! It\'s common to do Chitwan before or after treks like Pokhara-Annapurna region or as a relaxation stop between Kathmandu and Pokhara.'
      }
    ],
    accommodation: 'Comfortable jungle lodges and resorts with modern amenities. Options from budget to luxury available.',
    meals: 'Three meals daily. Mix of Nepali and international cuisine. Special Tharu traditional meals available.',
    physicalConditions: 'Easy activities suitable for all ages. Basic walking ability needed for jungle walks. Elephant and jeep safaris require no special fitness.',
    seasonDescription: 'October-March: Dry and pleasant (15-25°C), best for safaris. April-June: Hot (30-40°C) but good for wildlife at water sources. July-September: Monsoon season, lush but wet and humid.'
  },
  {
    id: 'kathmandu-valley-tour',
    title: 'Kathmandu Valley Cultural Tour',
    shortDescription: 'Explore UNESCO World Heritage Sites of Kathmandu Valley including ancient temples, palaces, and stupas. Experience rich Newari culture, architecture, and spirituality in Nepal\'s historic capital.',
    image: 'https://images.unsplash.com/photo-1626545222480-91798d6c253d?w=800',
    price: 'USD 120 per Person (Full Day)',
    duration: '1-3 Days',
    tripDuration: '1-3 Days',
    difficulty: 'Easy',
    maxElevation: '1,400m',
    season: 'Year-round',
    trekType: 'Cultural Sightseeing',
    permits: 'Monument Entry Fees',
    category: 'Cultural Tour',
    highlights: [
      'Pashupatinath Temple - Holiest Hindu temple in Nepal',
      'Boudhanath Stupa - Largest Buddhist stupa in Nepal',
      'Swayambhunath (Monkey Temple) - Ancient Buddhist complex',
      'Kathmandu Durbar Square - Royal palace and temples',
      'Patan Durbar Square - Ancient Newari architecture',
      'Bhaktapur Durbar Square - Medieval city',
      'UNESCO World Heritage Sites',
      'Experience living cultural heritage'
    ],
    lowlights: [
      'Some monuments still under repair from 2015 earthquake',
      'Can be crowded during peak season',
      'Air pollution in Kathmandu city'
    ],
    summary: 'Kathmandu Valley is home to 7 UNESCO World Heritage Sites showcasing centuries of art, architecture, and spirituality. This cultural tour takes you through ancient royal palaces, sacred temples, and living goddess traditions. Experience the harmonious blend of Hinduism and Buddhism, witness sacred rituals at Pashupatinath cremation ghats, spin prayer wheels at Boudhanath, and walk through medieval cities frozen in time. The valley\'s Newari people have preserved incredible craftsmanship in wood carving, metalwork, and architecture. Perfect for culture enthusiasts and photographers.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kathmandu City & Swayambhunath',
        description: 'Visit Kathmandu Durbar Square - old royal palace, Kumari Temple (Living Goddess), Taleju Temple. Afternoon: Swayambhunath Stupa (Monkey Temple) with panoramic city views. Evening free for Thamel exploration.'
      },
      { 
        day: 2, 
        title: 'Patan & Bhaktapur - Ancient Cities',
        description: 'Morning: Patan Durbar Square with Krishna Temple, Golden Temple, Patan Museum. Afternoon: Bhaktapur Durbar Square - 55-Window Palace, Nyatapola Temple, pottery square, traditional yogurt (Juju Dhau).'
      },
      { 
        day: 3, 
        title: 'Pashupatinath & Boudhanath',
        description: 'Early morning: Pashupatinath Temple - Hindu cremation ceremony and temple rituals. Late morning: Boudhanath Stupa - largest in Nepal, Tibetan monasteries, butter lamps. Optional: Visit nearby Kopan Monastery.'
      }
    ],
    faqs: [
      {
        question: 'How many days needed for Kathmandu Valley?',
        answer: '2-3 days ideal to cover main sites without rushing. Can be done in 1 day for highlights only. Spread over more days for deep exploration.'
      },
      {
        question: 'Is photography allowed in temples?',
        answer: 'Generally yes, but some temple interiors prohibit photos. Always ask permission and respect religious sentiments. Drone photography requires special permits.'
      },
      {
        question: 'What should I wear?',
        answer: 'Modest clothing - cover shoulders and knees for temples. Remove shoes at temple entrances. Comfortable walking shoes recommended.'
      }
    ],
    accommodation: 'Hotels in Kathmandu/Thamel area. Not included in tour price but can be arranged.',
    meals: 'Lunch typically included. Try local Newari cuisine - choila, bara, yomari.',
    physicalConditions: 'Easy. Involves walking and climbing some stairs at temples. Suitable for all ages.',
    seasonDescription: 'Year-round destination. October-November: Clear skies and festivals. February-April: Warm and colorful. May-September: Monsoon but sites still accessible.'
  },
  {
    id: 'pokhara-sightseeing',
    title: 'Pokhara Valley Sightseeing Tour',
    shortDescription: 'Discover the natural beauty of Pokhara - serene Phewa Lake, stunning mountain views, caves, waterfalls, and peace pagodas. Nepal\'s adventure capital offers the perfect blend of nature and culture.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
    price: 'USD 80 per Person (Full Day)',
    duration: '1-2 Days',
    tripDuration: '1-2 Days',
    difficulty: 'Easy',
    maxElevation: '1,600m (Sarangkot)',
    season: 'Year-round (Best: October-April)',
    trekType: 'Nature & Adventure Sightseeing',
    permits: 'None required',
    category: 'Sightseeing',
    highlights: [
      'Phewa Lake boating with mountain reflections',
      'Sarangkot sunrise - Annapurna & Dhaulagiri panorama',
      'World Peace Pagoda with valley views',
      'Davis Falls and Gupteshwor Cave',
      'International Mountain Museum',
      'Paragliding (optional adventure activity)',
      'Bindabasini Temple',
      'Seti River Gorge and Mahendra Cave'
    ],
    lowlights: [
      'Mountains hidden during monsoon clouds',
      'Can be touristy in peak season'
    ],
    summary: 'Pokhara is Nepal\'s most scenic city, nestled beside Phewa Lake with the Annapurna range as backdrop. Known as the gateway to Annapurna treks, it\'s also a destination in itself. Watch sunrise from Sarangkot as golden light paints snow peaks, boat on Phewa Lake to Tal Barahi Temple, explore mysterious caves and powerful waterfalls. The city offers perfect mountain views without trekking, adventure activities like paragliding and zip-lining, and a relaxed lakeside atmosphere. Ideal for families, photographers, and those seeking natural beauty with comfort.',
    itinerary: [
      { 
        day: 1, 
        title: 'Sunrise & Full Day Pokhara Tour',
        description: 'Pre-dawn drive to Sarangkot (1,600m) for spectacular Himalayan sunrise over Annapurna, Dhaulagiri, Machhapuchhre. Return for breakfast. Visit Davis Falls, Gupteshwor Mahadev Cave. Afternoon: Phewa Lake boating to Tal Barahi Temple, visit World Peace Pagoda. Evening: Lakeside walk.'
      },
      { 
        day: 2, 
        title: 'Museums & Caves',
        description: 'Visit International Mountain Museum - history of mountaineering and Himalayan culture. Seti River Gorge. Mahendra Cave exploration. Bindabasini Temple. Optional: Paragliding, zip-lining, or ultra-light flight.'
      }
    ],
    faqs: [
      {
        question: 'Can I see mountains from Pokhara?',
        answer: 'Yes! On clear days you get stunning views of Annapurna range, Machhapuchhre (Fishtail), Dhaulagiri, and Manaslu. Best visibility October-April mornings. Monsoon season often has clouds.'
      },
      {
        question: 'Is Sarangkot sunrise worth it?',
        answer: 'Absolutely! One of the best mountain sunrise views in Nepal. Drive takes 30-40 minutes from Pokhara. Go on clear days for best experience.'
      },
      {
        question: 'What adventure activities are available?',
        answer: 'Paragliding (most popular), ultra-light flights, zip-lining, bungee jumping, mountain biking, and boating. Most can be booked same-day at lakeside.'
      }
    ],
    accommodation: 'Wide range of hotels from budget to luxury at Lakeside area. Beautiful lake-view properties available.',
    meals: 'Various cuisines available - Nepali, Indian, Continental, Italian. Lakeside has numerous cafes and restaurants.',
    physicalConditions: 'Very easy. Minimal walking. Suitable for all ages including elderly and children.',
    seasonDescription: 'October-April: Clear skies, perfect mountain views. May-June: Hot but clear mornings. July-September: Monsoon - lush and green but mountains often hidden in clouds.'
  },
  {
    id: 'lumbini-pilgrimage',
    title: 'Lumbini Buddhist Pilgrimage Tour',
    shortDescription: 'Visit the sacred birthplace of Lord Buddha in Lumbini, a UNESCO World Heritage Site. Explore ancient monasteries, Maya Devi Temple, Ashoka Pillar, and peaceful meditation gardens from various Buddhist traditions.',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800',
    price: 'USD 280 per Person (2 Days)',
    duration: '2 Days / 1 Night',
    tripDuration: '2 Days',
    difficulty: 'Easy',
    maxElevation: '150m',
    season: 'Year-round (Best: October-March)',
    trekType: 'Cultural & Pilgrimage Tour',
    permits: 'No special permits required',
    category: 'Cultural Tour',
    highlights: [
      'Maya Devi Temple - exact birthplace of Buddha (UNESCO site)',
      'Sacred Garden with ancient ruins dating to 3rd century BC',
      'Ashoka Pillar erected by Emperor Ashoka in 249 BC',
      'World Peace Pagoda and monasteries from 25+ countries',
      'Lumbini Museum - Buddhist art and archaeology',
      'Eternal peace flame and reflection pool',
      'Tilaurakot - ancient Kapilavastu ruins (Buddha\'s palace)',
      'Meditation and spiritual experience in tranquil gardens'
    ],
    lowlights: [
      'Very hot in summer (April-June)',
      'Long drive from Kathmandu or Pokhara',
      'Limited nightlife and dining options'
    ],
    summary: 'Lumbini, birthplace of Gautama Buddha in 563 BC, is one of the most important pilgrimage sites for Buddhists worldwide. Located in southwestern Nepal near the Indian border, it was designated a UNESCO World Heritage Site in 1997. The sacred garden contains the Maya Devi Temple marking Buddha\'s exact birthplace, the ancient Ashoka Pillar, and archaeological remains of ancient monasteries. The Lumbini Development Zone features beautiful monasteries built by Buddhist communities from Thailand, Myanmar, China, Japan, Vietnam, and other nations, each reflecting their unique architectural styles. This peaceful destination offers a profound spiritual experience and insight into Buddhist history and culture.',
    itinerary: [
      { 
        day: 1, 
        title: 'Drive to Lumbini & Sacred Garden',
        description: 'Drive from Kathmandu (6-7 hrs) or fly to Bhairahawa then drive 30 min. Check into hotel. Afternoon visit Maya Devi Temple, Sacred Garden, Ashoka Pillar, and ancient ruins. Witness prayer ceremonies at sunset. Evening meditation session.'
      },
      { 
        day: 2, 
        title: 'Monastery Tour & Tilaurakot',
        description: 'Early morning visit World Peace Pagoda for sunrise. Explore international monasteries - Chinese, Thai, Myanmar, Japanese, Vietnamese monasteries. Visit Lumbini Museum. Optional: Tilaurakot (Buddha\'s childhood palace ruins, 27km). Return to Kathmandu/Pokhara or fly from Bhairahawa.'
      }
    ],
    faqs: [
      {
        question: 'Why is Lumbini important?',
        answer: 'Lumbini is the birthplace of Siddhartha Gautama (Buddha) in 563 BC. It\'s one of four holy pilgrimage sites in Buddhism, along with Bodh Gaya (enlightenment), Sarnath (first sermon), and Kushinagar (death/parinirvana).'
      },
      {
        question: 'How do I get to Lumbini?',
        answer: 'From Kathmandu: 6-7 hour drive or fly to Bhairahawa then 30 min drive. From Pokhara: 5-6 hour drive. From Chitwan: 4-5 hour drive. Flights available from Kathmandu to Bhairahawa (Gautam Buddha Airport).'
      },
      {
        question: 'Is Lumbini only for Buddhists?',
        answer: 'No! While it\'s a Buddhist pilgrimage site, people of all faiths visit for its historical significance, peaceful atmosphere, beautiful architecture, and cultural experience. It\'s a UNESCO World Heritage Site open to everyone.'
      },
      {
        question: 'Can I combine Lumbini with other destinations?',
        answer: 'Yes! Common combinations: Lumbini + Chitwan (4-5 hrs), Lumbini + Pokhara (5-6 hrs), Lumbini + Bandipur, or as part of a Buddhist circuit including Bodh Gaya in India.'
      }
    ],
    accommodation: 'Range of hotels from budget guesthouses to upscale properties. Some monasteries also offer accommodation. Peaceful and clean environment.',
    meals: 'Mostly vegetarian food. Nepali, Indian, Continental, and Asian cuisines available. Many Buddhist-friendly restaurants.',
    physicalConditions: 'Very easy. Flat terrain with minimal walking. Suitable for all ages including children and elderly.',
    seasonDescription: 'October-March: Pleasant weather, ideal for visiting. April-June: Very hot (can reach 40°C). July-September: Monsoon season, lush and green but hot and humid. Buddha Jayanti (May full moon) sees large crowds.'
  },
  {
    id: 'dhorpatan-hunting-reserve',
    title: 'Dhorpatan Hunting Reserve Adventure',
    shortDescription: 'Nepal\'s only hunting reserve offering unique wildlife experience in remote western Nepal. Trek through pristine forests, alpine meadows, and traditional villages. Spot blue sheep, Himalayan tahr, pheasants, and experience authentic mountain culture.',
    image: 'https://images.unsplash.com/photo-1564760290292-23341e4df6ec?w=800',
    price: 'USD 1,200 per Person (10 Days)',
    duration: '10-12 Days',
    tripDuration: '10-12 Days',
    difficulty: 'Moderate to Challenging',
    maxElevation: '4,200m',
    season: 'March-May, September-November',
    trekType: 'Remote Wilderness Trek',
    permits: 'Special Hunting Reserve Entry Permit, TIMS',
    category: 'Wildlife Safari',
    highlights: [
      'Nepal\'s only legal hunting reserve (1,325 sq km)',
      'Remote wilderness - off the beaten path',
      'Blue sheep (bharal) and Himalayan tahr spotting',
      'Danphe (Impeyan pheasant) - Nepal\'s national bird',
      'Pristine alpine meadows and rhododendron forests',
      'Traditional Magar villages and culture',
      'Panoramic views of Dhaulagiri and Annapurna ranges',
      'Chhajer Khola valley - untouched natural beauty'
    ],
    lowlights: [
      'Very remote area with limited facilities',
      'No teahouses - camping trek required',
      'Physically demanding terrain',
      'Wildlife sightings not guaranteed',
      'Long access route from Kathmandu'
    ],
    summary: 'Dhorpatan Hunting Reserve, established in 1987, is Nepal\'s only hunting reserve, located in the Rukum, Myagdi, and Baglung districts of western Nepal at elevations from 2,850m to 5,500m. Covering 1,325 square kilometers, it\'s home to blue sheep, Himalayan tahr, ghoral, serow, Himalayan black bear, leopard, and over 137 bird species including the danphe (Himalayan monal pheasant). While hunting is permitted with special licenses (strictly regulated), most visitors come for trekking, wildlife watching, and experiencing the pristine wilderness. The reserve features diverse ecosystems from subtropical forests to alpine meadows. Traditional Magar communities live in the buffer zone, offering authentic cultural experiences. This is one of Nepal\'s least visited protected areas, perfect for adventurers seeking solitude and unspoiled nature.',
    itinerary: [
      { 
        day: 1, 
        title: 'Drive Kathmandu to Beni',
        description: 'Early morning drive to Beni (8-9 hours) via Pokhara. Pass through terraced fields, riverside settlements. Overnight in Beni.'
      },
      { 
        day: 2, 
        title: 'Beni to Dharapani',
        description: 'Drive to Dharapani (2-3 hours on rough road). Begin trek through villages and forests. Camp at 2,300m.'
      },
      { 
        day: 3, 
        title: 'Trek to Takum',
        description: 'Trek through rhododendron forests, cross Dhara Khola. Views of Dhaulagiri range. Reach Takum village. Camp at 2,800m.'
      },
      { 
        day: 4, 
        title: 'Trek to Dhorpatan',
        description: 'Gradual climb to Dhorpatan valley. Enter hunting reserve area. Wide alpine meadows, possible blue sheep sightings. Camp at 3,000m.'
      },
      { 
        day: 5, 
        title: 'Exploration Day - Phagune Danda',
        description: 'Hike to Phagune Danda viewpoint (3,800m) for Dhaulagiri panorama. Wildlife spotting - blue sheep, danphe, Himalayan monal. Return to camp.'
      },
      { 
        day: 6, 
        title: 'Explore Chhajer Khola Valley',
        description: 'Full day exploring Chhajer valley. Visit remote Magar settlements. Wildlife tracking with local guides. Photograph pristine landscapes.'
      },
      { 
        day: 7, 
        title: 'Trek to Hidden Lake (4,200m)',
        description: 'Trek to high-altitude lake. Alpine scenery, snow peaks. Best chance for Himalayan tahr and blue sheep. Camp near lake.'
      },
      { 
        day: 8, 
        title: 'Trek back to Takum',
        description: 'Descend through forests and meadows. Wildlife observation during descent. Camp at Takum.'
      },
      { 
        day: 9, 
        title: 'Trek to Dharapani, Drive to Beni',
        description: 'Trek down to Dharapani. Drive to Beni. Overnight in Beni.'
      },
      { 
        day: 10, 
        title: 'Drive back to Kathmandu',
        description: 'Long drive back to Kathmandu via Pokhara. Optional: Stay overnight in Pokhara and return next day.'
      }
    ],
    faqs: [
      {
        question: 'Can anyone hunt in Dhorpatan?',
        answer: 'Hunting requires special permits issued by Department of National Parks. Very limited licenses (quotas) for blue sheep and Himalayan tahr. Most visitors come for trekking and wildlife viewing, not hunting. Permits are expensive and strictly regulated.'
      },
      {
        question: 'How remote is Dhorpatan?',
        answer: 'Very remote. No proper roads inside reserve. Limited mobile coverage. No teahouses or lodges - full camping trek with tents, cooking crew, and supplies. This is true wilderness adventure.'
      },
      {
        question: 'What wildlife can I see?',
        answer: 'Blue sheep (bharal) are most common. Himalayan tahr, ghoral, serow possible. Birds: danphe (Himalayan monal), cheer pheasant, tragopan. Rarely: Himalayan black bear, leopard, wolf. Best viewing March-May and October-November.'
      },
      {
        question: 'Is this trek difficult?',
        answer: 'Moderate to challenging. Requires good fitness. Long trekking days, high altitude (up to 4,200m), camping in remote areas. Not recommended for beginners. Best for experienced trekkers seeking adventure.'
      },
      {
        question: 'What makes Dhorpatan special?',
        answer: 'Untouched wilderness, very few tourists, authentic mountain culture, excellent wildlife habitat, stunning landscapes. It\'s one of Nepal\'s best-kept secrets for those seeking solitude and pristine nature away from popular trekking routes.'
      }
    ],
    accommodation: 'Full camping trek - tents, sleeping bags, mattresses provided. No lodges or teahouses. Camping in scenic meadows and forests.',
    meals: 'All meals prepared by trek crew. Fresh food carried from start. Nepali dal bhat, pasta, rice, vegetables. Hot drinks always available.',
    physicalConditions: 'Good fitness essential. Altitude acclimatization important. Long trekking days (5-7 hours daily). Steep ascents and descents. Experience with multi-day treks recommended.',
    seasonDescription: 'March-May: Best for wildlife (mating season), rhododendrons bloom, clear mountain views. September-November: Clear skies, excellent visibility, stable weather. December-February: Very cold, snow possible. June-August: Monsoon - avoid, trails muddy and slippery.'
  },
  {
    id: 'ghorepani-poon-hill',
    title: 'Ghorepani Poon Hill Trek',
    shortDescription: 'Ghorepani Poonhill trek is one of the most beautiful short trekking in Nepal offering spectacular view of Dhaulagiri and Annapurna Range of Himalayas. Ghorepani Poon Hill Trekking is mostly famous for breathtaking sunrise view on Himalayas.',
    image: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800',
    price: 'USD 550 per Person',
    duration: '4-5 trekking days',
    tripDuration: '7-8 days total',
    difficulty: 'Easy to Moderate',
    maxElevation: '3,210m at Poon Hill',
    season: 'Year-round (Best: March-May, Sept-Nov)',
    trekType: 'Tea House Trek',
    permits: 'ACAP Permit (NPR 3,000), TIMS Card',
    category: 'Trekking',
    highlights: [
      'Spectacular 360° Himalayan panorama from Poon Hill (3,210m)',
      'Sunrise view of Dhaulagiri (8,167m), Annapurna I (8,091m), and Machhapuchhre (6,993m)',
      'Walk through blooming rhododendron forests (March-April)',
      'Gurung and Magar ethnic villages - authentic mountain culture',
      'Natural hot springs at Jhinu Danda for relaxation',
      'Annapurna Conservation Area - diverse wildlife and birds',
      'Traditional stone-paved trails and prayer flags',
      'Perfect beginner trek with tea house comfort'
    ],
    lowlights: [
      'Can be crowded during peak season (Oct-Nov, March-April)',
      'Long stone staircase climbs (3,300+ steps from Tikhedhunga to Ulleri)',
      'Basic tea house facilities in some villages',
      'Weather can change quickly at higher elevations'
    ],
    summary: 'The Ghorepani Poon Hill trek is the most popular short trek in Nepal, perfect for those with limited time wanting to experience the Himalayas. This 4-5 day journey through the Annapurna region offers spectacular mountain views without extreme altitudes. Starting from Nayapul (1 hour from Pokhara), the trek winds through terraced farmlands, dense rhododendron forests that explode with color in spring, and traditional Gurung villages where locals maintain centuries-old traditions. The absolute highlight is the pre-dawn climb to Poon Hill (3,210m) where you witness one of the world\'s most stunning sunrise views - over 20 peaks above 6,000m including Dhaulagiri (8,167m, world\'s 7th highest), Annapurna I (8,091m, world\'s 10th highest), and the sacred Machhapuchhre (Fishtail Mountain). The route passes through Ghorepani (meaning "horse water" - historic horse rest stop), Tadapani with its fairy-tale forest setting, and the beautiful stone-paved village of Ghandruk, offering deep cultural immersion. An optional detour to Jhinu Danda natural hot springs provides perfect post-trek muscle relaxation. Suitable for beginners with moderate fitness, requires no technical climbing, comfortable tea house accommodation throughout.',
    itinerary: [
      { 
        day: 1, 
        title: 'Drive Pokhara to Nayapul (1,070m), Trek to Tikhedhunga (1,540m) - 3-4 hrs', 
        description: 'Scenic 1.5-hour drive from Pokhara along Seti River gorge to Nayapul trailhead. Trek begins alongside Modi Khola river through Birethanti village (mandatory ACAP permit check). Pass through Sudami and Hile villages. Gentle first day walk gaining 470m elevation through terraced rice fields and small settlements. Cross suspension bridges. Overnight at Tikhedhunga tea house with river views.'
      },
      { 
        day: 2, 
        title: 'Tikhedhunga to Ghorepani (2,874m) - The Famous 3,300 Steps - 5-6 hrs', 
        description: 'Most challenging day - climb the legendary 3,300 stone steps from Tikhedhunga through Ulleri village (2,070m). Steep but steady ascent rewarded with tea stops. After Ulleri, trail eases into magnificent rhododendron and oak forests (ablaze with red flowers March-April). Pass through Banthanti (2,250m) and Nangethanti (2,460m) with small tea houses. Final climb to Ghorepani village (2,874m). Total elevation gain 1,334m. Clear evening views of Annapurna South and Nilgiri. Ghorepani means "horse water" - historic rest stop for traders between India and Tibet.'
      },
      { 
        day: 3, 
        title: 'Pre-dawn Poon Hill Summit (3,210m), Trek to Tadapani (2,630m) - 6-7 hrs', 
        description: 'Wake 4:30 AM, headlamp climb 45 minutes to Poon Hill summit (3,210m). Witness legendary sunrise illuminating Dhaulagiri massif (8,167m), Annapurna I (8,091m), Annapurna South (7,219m), sacred Machhapuchhre/Fishtail (6,993m), Nilgiri, Hiunchuli, Tukuche Peak, and over 20 Himalayan giants turning golden-pink. Photography paradise. Return to Ghorepani for breakfast. Trek 3-4 hours through enchanting rhododendron forests to Tadapani (2,630m) - initial descent then gradual climb. Forest feels like fairy tale with moss-covered trees and bird songs. Stunning close-up Machhapuchhre views from Tadapani tea houses.'
      },
      { 
        day: 4, 
        title: 'Tadapani to Ghandruk (1,940m) - Cultural Immersion - 3-4 hrs', 
        description: 'Descend 3-4 hours through oak and rhododendron forests into beautiful Ghandruk village (1,940m) - Nepal\'s second-largest Gurung settlement with 1,200+ households. Visit Old Gurung Museum (NPR 50 entry) showcasing traditional Gurung lifestyle, clothing, jewelry, and customs. Explore stone-paved streets lined with traditional slate-roofed houses. Watch elderly Gurung women weaving traditional rugs. Magnificent close-up views of Annapurna South, Hiunchuli, and Machhapuchhre dominating the skyline. Experience authentic mountain hospitality - many locals served as Gurkha soldiers. Optional cultural evening program.'
      },
      { 
        day: 5, 
        title: 'Ghandruk to Nayapul (1,070m) via Optional Jhinu Danda Hot Springs - 5-6 hrs',  
        description: 'Two route options: OPTION A (Hot Springs): Descend to Kimche, steep 20-min trail down to Jhinu Danda natural hot springs (1,780m) by Modi Khola riverside - perfect for soaking tired muscles in mineral-rich thermal pools (NPR 50 entry). Return uphill and continue to Nayapul. OPTION B (Direct): Trek through Kimche and Syauli Bazaar villages to Nayapul (4-5 hours walking). Both routes end at Nayapul. Private vehicle returns to Pokhara (1.5 hours). Celebratory dinner at Pokhara lakeside. Trek complete!'
      }
    ],
    faqs: [
      {
        question: 'How fit do I need to be for Ghorepani Poon Hill Trek?',
        answer: 'Moderate fitness required. Day 2 (Tikhedhunga to Ghorepani) is challenging with 3,300 stone steps and 1,334m elevation gain over 5-6 hours. If you can walk 6 hours with breaks and handle stairs, you\'ll be fine. Prior hiking experience helpful but not mandatory. Pre-trek jogging/stair training recommended.'
      },
      {
        question: 'What is the best time/month for this trek?',
        answer: 'Best: October-November (clear skies, perfect views, stable weather) and March-April (rhododendrons in full bloom, warm). Avoid: June-August (monsoon - leeches, rain, cloud-covered peaks). December-February possible but cold nights (-5°C at Ghorepani) and occasional snow.'
      },
      {
        question: 'Can I do this trek independently without guide?',
        answer: 'Yes, it\'s one of Nepal\'s easiest treks to do solo. Well-marked trails, frequent tea houses, many other trekkers. However, hiring a guide enriches experience with cultural insights, plant/wildlife knowledge, and supports local economy. Porter service available to carry your backpack (USD 20-25/day).'
      },
      {
        question: 'How much does Ghorepani Poon Hill trek cost?',
        answer: 'Budget DIY: USD 25-30/day (accommodation USD 3-5, meals USD 15-20, permits NPR 3,000). With guide/porter: USD 550-650 total including permits, accommodation, meals, guide. Luxury lodges available for USD 100+/night.'
      },
      {
        question: 'What about altitude sickness at 3,210m?',
        answer: 'Very unlikely. Maximum altitude (Poon Hill 3,210m) is below the risk zone (usually 3,500m+). Gradual ascent over 2-3 days allows natural acclimatization. Drink plenty of water, avoid alcohol, ascend slowly. Symptoms are rare but descend immediately if severe headache/nausea occurs.'
      },
      {
        question: 'What are tea houses like? Do I need camping gear?',
        answer: 'No camping needed! Tea houses (lodges) are simple but comfortable - basic rooms with twin beds, shared bathrooms (some have attached western toilets), dining halls with heating stoves, charging facilities (small fee). Bring sleeping bag or rent blankets. Hot showers available (USD 2-3). WiFi in most places (paid).'
      }
    ],
    accommodation: 'Clean tea houses/lodges throughout. Twin-sharing rooms with basic beds, pillows, blankets (bring sleeping bag or rent extras). Shared bathrooms standard, some lodges have attached. Dining halls with wood/yak-dung stoves for warmth. Ghorepani and Ghandruk have best facilities with hot showers (extra charge). Electricity and WiFi available (charging USD 1-2/hour, WiFi USD 2-3/day). Simple but comfortable mountain hospitality.',
    meals: 'Full board included - breakfast, lunch, dinner, tea/coffee. Menu: Dal Bhat (unlimited Nepali rice/lentils), momos, noodles, pasta, pancakes, porridge, eggs, soups. Vegetarian-friendly. Bottled water expensive at higher altitudes (USD 2-4/liter) - bring purification tablets or SteriPEN. Snickers and chocolate bars available but pricey. Tea houses earn more from food/drinks than rooms, so eat at your lodging.',
    physicalConditions: 'Moderate fitness needed. Expect 5-7 hours walking daily on stone steps, forest trails, some steep sections. Day 2 most challenging (3,300 steps gain). Must be comfortable with: multi-hour hiking, basic accommodation, squat toilets, no daily showers. Suitable for ages 12-65 with reasonable health. Not recommended for serious heart/lung conditions or recent surgery. Pre-trek cardio training beneficial.',
    seasonDescription: 'AUTUMN (Sept-Nov): Best season - clear skies, stable weather, perfect visibility, comfortable temps (15-20°C days, 5-10°C nights), dry trails. Peak crowds October-November. SPRING (March-May): Second best - rhododendrons bloom (March-April spectacular), warm days (15-25°C), some afternoon clouds, good visibility mornings. WINTER (Dec-Feb): Possible but cold (-5 to 10°C), occasional snow, fewer trekkers, crystal-clear views, need warm sleeping bag. MONSOON (June-Aug): Wet, slippery trails, leeches, mountain views obscured, not recommended unless experienced. Year-round tea houses open.'
  },
  {
    id: 'everest-base-camp',
    title: 'Everest Base Camp Trek',
    shortDescription: 'Have more days to travel Nepal and want to increase the time in lap of Himalayas? Then Everest Base Camp Trek with Gokyo Lake will be perfect combination. This trekking trail will add 3 more extra days with 12 days of Everest Base Camp Trek. Gokyo Lake is sacred lake in both Hinduism and Buddhism.',
    image: 'https://via.placeholder.com/800x600/0891b2/ffffff?text=Everest+Base+Camp',
    price: 'Contact for pricing',
    duration: '12-15 days',
    tripDuration: '16 days',
    difficulty: 'Challenging',
    maxElevation: '5364m at Everest Base Camp',
    season: 'March-May, September-November',
    trekType: 'Tea House Trek',
    permits: 'Sagarmatha National Park Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Reach the legendary Everest Base Camp',
      'Visit the sacred Gokyo Lakes - world\'s highest freshwater lake system',
      'Stunning views of Mt. Everest (8,848m), Lhotse, Makalu, and Cho Oyu',
      'Experience Sherpa culture and visit ancient monasteries',
      'Cross the famous Hillary Suspension Bridge'
    ],
    lowlights: [
      'High altitude - requires proper acclimatization',
      'Longer duration trek requiring good fitness level'
    ],
    summary: 'Everest Base Camp Trek is the ultimate Himalayan adventure. This iconic trek takes you to the foot of the world\'s highest mountain. Experience breathtaking mountain vistas, unique Sherpa culture, and the thrill of walking in the footsteps of legendary mountaineers.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Flight to Lukla and Trek to Phakding' },
      { day: 3, title: 'Trek to Namche Bazaar' },
      { day: 4, title: 'Acclimatization day in Namche' },
      { day: 5, title: 'Trek to Tengboche' },
      { day: 6, title: 'Trek to Dingboche' },
      { day: 7, title: 'Acclimatization day in Dingboche' },
      { day: 8, title: 'Trek to Lobuche' },
      { day: 9, title: 'Trek to Gorak Shep and Everest Base Camp' },
      { day: 10, title: 'Hike to Kala Patthar and trek to Pheriche' },
      { day: 11, title: 'Trek to Namche Bazaar' },
      { day: 12, title: 'Trek to Lukla' },
      { day: 13, title: 'Flight back to Kathmandu' },
      { day: 14, title: 'Rest day in Kathmandu' },
      { day: 15, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'How difficult is the Everest Base Camp Trek?',
        answer: 'The trek is considered challenging due to high altitude and long trekking days. Good physical fitness and mental preparation are essential.'
      },
      {
        question: 'What is the best time for EBC Trek?',
        answer: 'The best times are pre-monsoon (March-May) and post-monsoon (September-November) when weather is stable and views are clear.'
      }
    ],
    accommodation: 'Tea houses and lodges throughout the trek with basic but comfortable facilities.',
    meals: 'Three meals a day with tea/coffee. Dal Bhat (traditional Nepali meal) is recommended for energy.',
    physicalConditions: 'Good physical fitness required. Prior trekking experience recommended. Regular cardio training before the trek is beneficial.',
    seasonDescription: 'Best in Spring (March-May) and Autumn (September-November). Winter is very cold and summer has monsoon rains.'
  },
  {
    id: 'annapurna-base-camp',
    title: 'Annapurna Base Camp Trek',
    shortDescription: 'Annapurna Base Camp Trek is one of the most beautiful and popular trek in Nepal due to the presence of Majestic Himalayas Annapurna I (8091m, world 10th highest mountain peak), Annapurna South (7219m), Annapurna II (7937m) Annapurna III (7555m), Annapurna IV (7525m).',
    image: 'https://images.unsplash.com/photo-1610720223971-ccab98d2c8f7?w=800',
    price: 'Contact for pricing',
    duration: '7-10 days',
    tripDuration: '12 days',
    difficulty: 'Moderate to Challenging',
    maxElevation: '4130m at Annapurna Base Camp',
    season: 'March-May, September-November',
    trekType: 'Tea House Trek',
    permits: 'ACAP Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Spectacular 360-degree mountain panorama from ABC',
      'Views of Annapurna I (8091m), Machhapuchhre (6993m), Hiunchuli',
      'Walk through diverse landscapes from subtropical to alpine',
      'Experience Gurung culture in traditional villages',
      'Natural hot springs at Jhinu Danda'
    ],
    lowlights: [
      'Steep ascents and descents',
      'Weather can be unpredictable in the mountains'
    ],
    summary: 'Annapurna Base Camp Trek takes you into the heart of the Annapurna Sanctuary, surrounded by towering peaks. This moderately challenging trek offers diverse landscapes, from lush rhododendron forests to high alpine terrain, culminating in a breathtaking amphitheater of mountains at the base camp.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive to Pokhara' },
      { day: 3, title: 'Drive to Nayapul and trek to Ghandruk' },
      { day: 4, title: 'Trek to Chhomrong' },
      { day: 5, title: 'Trek to Bamboo' },
      { day: 6, title: 'Trek to Deurali' },
      { day: 7, title: 'Trek to Annapurna Base Camp via MBC' },
      { day: 8, title: 'Trek back to Bamboo' },
      { day: 9, title: 'Trek to Jhinu Danda' },
      { day: 10, title: 'Trek to Nayapul and drive to Pokhara' },
      { day: 11, title: 'Drive back to Kathmandu' },
      { day: 12, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'Is ABC trek suitable for beginners?',
        answer: 'While it\'s more challenging than Poon Hill, fit beginners with determination can complete it. Proper acclimatization and pacing are important.'
      },
      {
        question: 'What makes ABC special?',
        answer: 'The unique amphitheater setting surrounded by peaks over 7000m and 8000m creates an unforgettable 360-degree mountain panorama.'
      }
    ],
    accommodation: 'Tea houses and lodges with basic facilities. Rooms are simple but adequate.',
    meals: 'Three meals daily with variety of options including local and continental cuisine.',
    physicalConditions: 'Moderate fitness level required. Ability to walk 5-7 hours daily with elevation gains.',
    seasonDescription: 'Best in Spring and Autumn. Summer monsoon brings heavy rain, winter brings snow and cold.'
  },
  {
    id: 'manaslu-circuit',
    title: 'Manaslu Circuit Trek',
    shortDescription: 'Manaslu Circuit Trek is a spectacular journey around the eighth highest mountain in the world (8,163m). This remote and less-crowded trail offers pristine mountain views, diverse cultures, and the challenging Larkya La Pass crossing.',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    price: 'USD 1,200 per Person',
    duration: '14-16 days',
    tripDuration: '18 days',
    difficulty: 'Challenging',
    maxElevation: '5,160m at Larkya La Pass',
    season: 'March-May, September-November',
    trekType: 'Tea House Trek',
    permits: 'Manaslu Conservation Area Permit, Manaslu Restricted Area Permit, Annapurna Conservation Area Permit',
    category: 'Trekking',
    highlights: [
      'Circle the majestic Mt. Manaslu (8,163m - 8th highest peak)',
      'Cross the dramatic Larkya La Pass at 5,160m',
      'Experience authentic Tibetan Buddhist culture in remote villages',
      'Less crowded alternative to Annapurna and Everest regions',
      'Stunning views of Manaslu, Himlung Himal, and Ganesh Himal ranges',
      'Walk through diverse landscapes from subtropical to high alpine'
    ],
    lowlights: [
      'High altitude requires proper acclimatization',
      'Remote area with basic facilities',
      'Restricted area requires special permits and guide'
    ],
    summary: 'The Manaslu Circuit Trek is one of Nepal\'s most spectacular and rewarding treks, offering a perfect blend of natural beauty and cultural richness. Circling the world\'s eighth highest mountain, this trek takes you through remote villages inhabited by Tibetan communities, ancient monasteries, terraced fields, and dramatic mountain landscapes. The challenging Larkya La Pass crossing is the highlight, offering panoramic views of snow-capped peaks. Being less crowded than Everest and Annapurna regions, Manaslu provides an authentic Himalayan experience.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive to Soti Khola' },
      { day: 3, title: 'Trek to Machha Khola' },
      { day: 4, title: 'Trek to Jagat' },
      { day: 5, title: 'Trek to Deng' },
      { day: 6, title: 'Trek to Namrung' },
      { day: 7, title: 'Trek to Samagaon' },
      { day: 8, title: 'Acclimatization day at Samagaon' },
      { day: 9, title: 'Trek to Samdo' },
      { day: 10, title: 'Trek to Dharamsala' },
      { day: 11, title: 'Cross Larkya La Pass and trek to Bimthang' },
      { day: 12, title: 'Trek to Tilije' },
      { day: 13, title: 'Trek to Dharapani' },
      { day: 14, title: 'Drive to Kathmandu' },
      { day: 15, title: 'Rest day in Kathmandu' },
      { day: 16, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'Do I need a guide for Manaslu Circuit?',
        answer: 'Yes, Manaslu is a restricted area and requires a registered guide. Solo trekking is not permitted.'
      },
      {
        question: 'How difficult is the Larkya La Pass?',
        answer: 'The pass is challenging due to high altitude (5,160m) and steep ascent/descent. Good acclimatization and physical fitness are essential.'
      },
      {
        question: 'Is Manaslu less crowded than Annapurna?',
        answer: 'Yes, significantly less crowded. You\'ll experience a more remote and peaceful trekking environment.'
      }
    ],
    accommodation: 'Basic tea houses and lodges. Facilities are more rustic than in popular regions, especially in higher elevations.',
    meals: 'Three meals daily. Dal Bhat is the main staple. Menu options are limited in remote areas.',
    physicalConditions: 'Excellent physical fitness required. Prior high-altitude trekking experience highly recommended. Preparation with cardio and strength training essential.',
    seasonDescription: 'Best in Spring (March-May) and Autumn (September-November). Winter is extremely cold with heavy snow. Monsoon makes trails slippery and views obscured.'
  },
  {
    id: 'langtang-valley',
    title: 'Langtang Valley Trek',
    shortDescription: 'Langtang Valley Trek is known as the "Valley of Glaciers" and offers stunning mountain scenery, Tamang culture, and beautiful rhododendron forests. Located close to Kathmandu, it\'s perfect for those with limited time but seeking an authentic Himalayan experience.',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800',
    price: 'USD 650 per Person',
    duration: '7-9 days',
    tripDuration: '11 days',
    difficulty: 'Moderate',
    maxElevation: '4,984m at Tserko Ri viewpoint',
    season: 'March-May, September-November',
    trekType: 'Tea House Trek',
    permits: 'Langtang National Park Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Close proximity to Kathmandu - less travel time',
      'Stunning views of Langtang Lirung (7,227m) and surrounding peaks',
      'Experience authentic Tamang culture and hospitality',
      'Visit ancient Kyanjin Gompa monastery',
      'Optional climb to Tserko Ri (4,984m) for panoramic views',
      'Beautiful alpine forests and diverse wildlife',
      'Support communities rebuilding after 2015 earthquake'
    ],
    lowlights: [
      'Some areas still recovering from 2015 earthquake damage',
      'Can be cold at higher elevations'
    ],
    summary: 'Langtang Valley Trek is a gem hidden in the Himalayas north of Kathmandu. Known for its scenic beauty, rich Tamang culture, and proximity to the capital, this trek offers spectacular mountain views, glaciers, and high alpine meadows. The valley was heavily affected by the 2015 earthquake, but has been rebuilt and welcomes trekkers to support local communities. The trek passes through Langtang National Park, home to red pandas, Himalayan black bears, and diverse bird species. The highlight is reaching Kyanjin Gompa and optionally climbing Tserko Ri for breathtaking 360-degree mountain panoramas.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive to Syabrubesi' },
      { day: 3, title: 'Trek to Lama Hotel' },
      { day: 4, title: 'Trek to Langtang Village' },
      { day: 5, title: 'Trek to Kyanjin Gompa' },
      { day: 6, title: 'Acclimatization day - Hike to Tserko Ri or Kyanjin Ri' },
      { day: 7, title: 'Trek back to Lama Hotel' },
      { day: 8, title: 'Trek to Syabrubesi' },
      { day: 9, title: 'Drive to Kathmandu' },
      { day: 10, title: 'Rest day in Kathmandu' },
      { day: 11, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'Is Langtang safe after the earthquake?',
        answer: 'Yes, the trail has been rebuilt and is safe. Trekking here also helps support local communities in their recovery.'
      },
      {
        question: 'How does Langtang compare to Annapurna or Everest?',
        answer: 'Langtang is less crowded, closer to Kathmandu, and offers equally stunning views with rich cultural experiences at a lower cost.'
      },
      {
        question: 'Can I see wildlife in Langtang?',
        answer: 'Yes, Langtang National Park is home to red pandas, Himalayan tahrs, musk deer, and various bird species, though sightings require luck and patience.'
      }
    ],
    accommodation: 'Comfortable tea houses with twin-sharing rooms. Facilities improving as communities rebuild.',
    meals: 'Three meals daily with good variety. Local cheese from Kyanjin is a must-try!',
    physicalConditions: 'Moderate fitness required. Suitable for first-time trekkers with basic preparation. Walking 5-6 hours daily.',
    seasonDescription: 'Best in Spring for rhododendron blooms and Autumn for clear skies. Winter is very cold with snow. Monsoon brings leeches and rain.'
  },
  {
    id: 'khumai-dada',
    title: 'Khumai Dada Trek (Korchan Trek)',
    shortDescription: 'Also known as Korchan Trek, Khumai Dada is located in Machhapuchhre Rural Municipality, Kaski. Experience authentic village life, stunning Annapurna views, and peaceful trails away from tourist crowds in this hidden gem near Pokhara.',
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=800',
    price: 'USD 380 per Person',
    duration: '3-4 trekking days',
    tripDuration: '4-5 days total',
    difficulty: 'Easy to Moderate',
    maxElevation: '3,245m at Khumai Dada',
    season: 'March-May, September-November',
    trekType: 'Community Homestay Trek',
    permits: 'ACAP Permit (NPR 3,000), TIMS Card',
    category: 'Trekking',
    highlights: [
      'Located in Machhapuchhre Rural Municipality, Kaski',
      'Also called Korchan Trek by locals',
      'Stunning views of Annapurna range and Machhapuchhre',
      'Community-based homestay experience',
      'Traditional Gurung and Magar villages',
      'Off-the-beaten-path - very few tourists',
      'Rhododendron forests and rural farmlands',
      'Perfect weekend trek from Pokhara'
    ],
    lowlights: [
      'Very basic homestay facilities',
      'Limited English communication',
      'Trails not well-marked',
      'Requires local guide recommended'
    ],
    summary: 'Khumai Dada Trek, locally known as Korchan Trek, is situated in Machhapuchhre Rural Municipality in Kaski district. This community-based trek offers an authentic rural Nepal experience just a few hours from Pokhara. The trek passes through traditional villages where tourism is still new, allowing genuine cultural interactions with Gurung and Magar communities. Unlike commercialized routes, here you stay in local homes, eat family meals, and experience daily village life. The trail winds through terraced rice fields, rhododendron forests, and small settlements before reaching Khumai Dada viewpoint with its panoramic Annapurna views. This trek supports community development - your homestay fees directly benefit local families. Perfect for travelers seeking authentic cultural immersion over tourist infrastructure. The peaceful, uncrowded trails and warm village hospitality make this a memorable alternative to busy trekking routes.',
    itinerary: [
      { 
        day: 1, 
        title: 'Drive Pokhara to Korchan, Trek to Village Homestay - 3-4 hrs',
        description: 'Drive from Pokhara to Machhapuchhre Rural Municipality area. Begin trek through local villages in Korchan region. Walk through terraced farmlands, pass local schools and temples. Reach village for homestay with Gurung/Magar family. Experience traditional welcome, home-cooked dinner.'
      },
      { 
        day: 2, 
        title: 'Village to Khumai Dada (3,245m) - 5-6 hrs',
        description: 'Early morning start through rhododendron forests and rural trails. Gradual ascent passing small settlements. Reach Khumai Dada viewpoint for spectacular Annapurna, Machhapuchhre, Lamjung Himal panorama. Descend to nearby village homestay.'
      },
      { 
        day: 3, 
        title: 'Sunrise View & Trek Down to Road, Drive to Pokhara - 4-5 hrs',
        description: 'Optional early sunrise hike to viewpoint. Return for traditional breakfast with host family. Descend through villages back to road. Drive to Pokhara.'
      }
    ],
    faqs: [
      {
        question: 'Why is it called Korchan Trek?',
        answer: 'Korchan is the local name for the area in Machhapuchhre Rural Municipality where the trek takes place. Both names (Khumai Dada and Korchan Trek) refer to the same route.'
      },
      {
        question: 'Is this trek suitable for beginners?',
        answer: 'Yes, it\'s a moderate trek perfect for first-timers. Short duration, not too high altitude, gradual ascents. However, being off-the-beaten-path means basic facilities - must be comfortable with simple homestays and limited amenities.'
      },
      {
        question: 'What is community-based homestay?',
        answer: 'You stay with local families in their homes, sleep in simple rooms, eat meals together, participate in daily life. Tourism income goes directly to families, supporting rural communities. Very authentic but basic - no hotels or lodges.'
      },
      {
        question: 'Do I need a guide?',
        answer: 'Highly recommended! Trails aren\'t well-marked, limited English in villages, and a local guide enriches cultural experience. Also required for homestay arrangements and permits.'
      },
      {
        question: 'How close is it to Pokhara?',
        answer: 'Very accessible! Located in Kaski district, just 1-2 hours drive from Pokhara. Perfect weekend trek without long travel time.'
      }
    ],
    accommodation: 'Community homestays with local Gurung/Magar families. Very basic - simple rooms with mattresses, shared outside toilets, no running hot water. Authentic village experience. Blankets provided but bring sleeping bag liner. This is cultural immersion, not comfort trekking.',
    meals: 'Traditional Nepali home-cooked meals with host families - Dal Bhat (rice, lentils, vegetables), seasonal vegetables, sometimes chicken. Fresh, organic, unlimited Dal Bhat refills. Tea/coffee available. Vegetarian-friendly.',
    physicalConditions: 'Moderate fitness sufficient. Daily 4-6 hours walking on village trails and forest paths. Some uphill sections but manageable with regular breaks. More about cultural experience than physical challenge. Suitable ages 12-65.',
    seasonDescription: 'BEST: March-April (rhododendrons bloom, warm weather, clear views) and October-November (crystal clear skies, comfortable temps, stable weather). AVOID: June-September (monsoon - muddy trails, leeches, obscured views). December-February cold but possible with warm clothes.'
  },
  {
    id: 'khopra-danda',
    title: 'Khopra Danda (Ridge) Trek',
    shortDescription: 'Khopra Danda Trek is a community-based eco-trek offering pristine mountain views, Khayer Lake pilgrimage, and authentic village experiences. This off-the-beaten-path trail provides close-up views of Annapurna South, Nilgiri, and Dhaulagiri without the crowds.',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
    price: 'USD 750 per Person',
    duration: '8-10 days',
    tripDuration: '12 days',
    difficulty: 'Moderate',
    maxElevation: '3,660m at Khopra Ridge',
    season: 'March-May, September-November',
    trekType: 'Community Lodge Trek',
    permits: 'ACAP Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Stunning close-up views of Annapurna South and Nilgiri',
      'Sacred Khayer Lake (4,660m) pilgrimage site',
      'Community-run eco-lodges supporting local villages',
      'Less crowded alternative to ABC and Poon Hill',
      'Beautiful rhododendron and oak forests',
      'Authentic Magar and Gurung cultural experiences',
      'Panoramic views of Dhaulagiri and Annapurna ranges',
      'Sustainable tourism model benefiting local communities'
    ],
    lowlights: [
      'Steep climb to Khayer Lake (optional)',
      'Limited facilities compared to main trails',
      'Weather can be unpredictable'
    ],
    summary: 'Khopra Danda Trek is a remarkable community-based trekking experience in the Annapurna region. Developed as a sustainable alternative to overcrowded trails, this trek supports local communities through eco-friendly lodges built and operated by villagers. The trail offers spectacular mountain views, especially from Khopra Ridge (3,660m), with stunning close-up vistas of Annapurna South, Nilgiri, and Dhaulagiri. An optional side trip to the sacred Khayer Lake at 4,660m is a highlight for many trekkers. The route passes through pristine rhododendron forests, terraced farmlands, and traditional villages, providing an authentic Himalayan experience while contributing to local development.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive or fly to Pokhara' },
      { day: 3, title: 'Drive to Nayapul and trek to Ghandruk' },
      { day: 4, title: 'Trek to Tadapani' },
      { day: 5, title: 'Trek to Dobato' },
      { day: 6, title: 'Trek to Upper Chistibung' },
      { day: 7, title: 'Trek to Khopra Ridge' },
      { day: 8, title: 'Day hike to Khayer Lake and return to Khopra' },
      { day: 9, title: 'Trek to Swanta village' },
      { day: 10, title: 'Trek to Ghorepani' },
      { day: 11, title: 'Early morning Poon Hill, trek to Nayapul, drive to Pokhara' },
      { day: 12, title: 'Drive or fly to Kathmandu' }
    ],
    faqs: [
      {
        question: 'What is community-based trekking?',
        answer: 'The lodges are owned and operated by local communities. Your trekking fee directly supports village development, schools, and sustainable livelihoods.'
      },
      {
        question: 'Should I do the Khayer Lake side trip?',
        answer: 'Highly recommended if you\'re acclimatized and weather permits. It\'s a sacred site with incredible views, but it\'s a challenging 6-7 hour round trip gaining 1,000m.'
      },
      {
        question: 'How crowded is this trek?',
        answer: 'Much less crowded than ABC or Poon Hill. You\'ll often have trails and viewpoints to yourself, especially during shoulder seasons.'
      }
    ],
    accommodation: 'Community lodges with simple but comfortable rooms. Eco-friendly practices, solar power, and local hospitality.',
    meals: 'Three meals daily. Good variety of Nepali and continental dishes. Food prepared by local communities.',
    physicalConditions: 'Good fitness required, especially if doing Khayer Lake. Regular uphill and downhill walking for 5-7 hours daily.',
    seasonDescription: 'Best in Spring (March-May) for rhododendrons and Autumn (September-November) for clear skies. Winter is cold but doable with proper gear.'
  },
  {
    id: 'kor-la-pass',
    title: 'Kor La Pass Trek (Naar Phu Valley)',
    shortDescription: 'Kor La Pass Trek explores the hidden Naar and Phu villages in the restricted Annapurna region. This adventurous trek combines dramatic landscapes, ancient Tibetan culture, high passes, and the remote beauty of Nepal\'s hidden valleys.',
    image: 'https://images.unsplash.com/photo-1602216056680-43f67e00a1dd?w=800',
    price: 'USD 1,400 per Person',
    duration: '14-16 days',
    tripDuration: '18 days',
    difficulty: 'Challenging',
    maxElevation: '5,240m at Kor La Pass',
    season: 'March-May, September-November',
    trekType: 'Tea House and Camping Trek',
    permits: 'Naar Phu Restricted Area Permit, ACAP Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Cross the challenging Kor La Pass (5,240m)',
      'Explore hidden Naar and Phu villages with ancient Tibetan culture',
      'Visit centuries-old monasteries and traditional settlements',
      'Dramatic landscapes from lush valleys to high-altitude deserts',
      'Views of Annapurna II, Gangapurna, Tilicho Peak, and Pisang Peak',
      'Remote and less-visited restricted area',
      'Experience authentic Tibetan Buddhist lifestyle',
      'Combination of cultural immersion and high-altitude adventure'
    ],
    lowlights: [
      'High altitude with challenging pass crossing',
      'Basic facilities in remote villages',
      'Weather-dependent - pass can be difficult in bad conditions',
      'Requires special permits and guide'
    ],
    summary: 'Kor La Pass Trek is an incredible journey into one of Nepal\'s most remote and culturally rich regions. The Naar and Phu valleys, opened to tourists only in 2002, remain wonderfully untouched and authentic. This trek takes you through diverse landscapes - from the lush Marshyangdi valley to the arid, Tibetan-like terrain of Naar and Phu. The villages here preserve ancient Tibetan Buddhist culture with stone houses, prayer wheels, and monasteries dating back centuries. The crossing of Kor La Pass at 5,240m is challenging but rewarding, offering spectacular mountain views. This trek can be combined with the Annapurna Circuit for an extended adventure.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive to Besisahar and onwards to Koto' },
      { day: 3, title: 'Trek to Meta' },
      { day: 4, title: 'Trek to Kyang' },
      { day: 5, title: 'Trek to Phu Village' },
      { day: 6, title: 'Exploration day in Phu Village' },
      { day: 7, title: 'Trek back to Kyang' },
      { day: 8, title: 'Trek to Naar Village' },
      { day: 9, title: 'Exploration day in Naar Village' },
      { day: 10, title: 'Trek to Naar Phedi' },
      { day: 11, title: 'Cross Kor La Pass and trek to Ngawal' },
      { day: 12, title: 'Trek to Manang' },
      { day: 13, title: 'Rest day in Manang for acclimatization' },
      { day: 14, title: 'Trek to Yak Kharka' },
      { day: 15, title: 'Trek to Thorong Phedi' },
      { day: 16, title: 'Cross Thorong La Pass and trek to Muktinath' },
      { day: 17, title: 'Drive to Pokhara via Jomsom' },
      { day: 18, title: 'Drive to Kathmandu' }
    ],
    faqs: [
      {
        question: 'How difficult is the Kor La Pass?',
        answer: 'It\'s challenging due to high altitude (5,240m), steep sections, and potential snow. Good acclimatization and physical fitness are essential. Many trekkers use ropes in icy conditions.'
      },
      {
        question: 'Can I trek solo in Naar Phu?',
        answer: 'No, it\'s a restricted area requiring a registered guide and minimum 2 trekkers. Solo trekking is not permitted.'
      },
      {
        question: 'What makes Naar and Phu special?',
        answer: 'These villages are among the most isolated in Nepal, preserving authentic Tibetan Buddhist culture. The people, architecture, and lifestyle have remained largely unchanged for centuries.'
      },
      {
        question: 'Should I combine this with Annapurna Circuit?',
        answer: 'Highly recommended! The trek naturally leads to the Annapurna Circuit, allowing you to cross both Kor La and Thorong La passes in one journey.'
      }
    ],
    accommodation: 'Basic tea houses in lower regions, very simple lodges in Naar and Phu villages. Possible camping in some areas.',
    meals: 'Three meals daily. Limited menu in remote villages. Traditional Tibetan food like tsampa and butter tea available.',
    physicalConditions: 'Excellent fitness required. Prior high-altitude trekking experience essential. Preparation should include cardio training and altitude acclimatization.',
    seasonDescription: 'Best in Spring (March-May) for stable weather and Autumn (September-November) for clear skies. Winter is extremely cold. Monsoon makes trails dangerous.'
  },
  {
    id: 'upper-mustang',
    title: 'Upper Mustang Trek',
    shortDescription: 'Upper Mustang is the last forbidden kingdom of Nepal, a restricted area that preserves ancient Tibetan Buddhist culture. Trek through a desert-like landscape with dramatic cliffs, ancient caves, and medieval walled city of Lo Manthang in the rain shadow of the Himalayas.',
    image: 'https://images.unsplash.com/photo-1626545222480-91798d6c253d?w=800',
    price: 'USD 1,800 per Person',
    duration: '12-14 days',
    tripDuration: '16 days',
    difficulty: 'Moderate to Challenging',
    maxElevation: '4,050m at Lo Manthang',
    season: 'March-November (Can trek during monsoon)',
    trekType: 'Tea House Trek',
    permits: 'Upper Mustang Restricted Area Permit (USD 500 for 10 days), Annapurna Conservation Area Permit',
    category: 'Trekking',
    highlights: [
      'Explore the ancient walled city of Lo Manthang',
      'Experience preserved Tibetan Buddhist culture and traditions',
      'Visit centuries-old monasteries and cave dwellings',
      'Unique desert-like landscape in the rain shadow region',
      'Trekking possible during monsoon season',
      'Views of Dhaulagiri, Annapurna, and Nilgiri ranges',
      'Interact with the local Loba people and their king'
    ],
    lowlights: [
      'Expensive restricted area permit required',
      'Must trek with registered guide - no solo trekking',
      'Limited facilities in remote villages'
    ],
    summary: 'Upper Mustang Trek is a journey to Nepal\'s "Last Forbidden Kingdom," a remote region that was closed to foreigners until 1992. This trek offers a rare glimpse into medieval Tibetan Buddhist culture preserved in its original form. The landscape is dramatically different from other Nepali treks - arid, desert-like terrain with colorful rock formations, ancient caves, and whitewashed villages. Lo Manthang, the capital, is a walled city with a royal palace and ancient monasteries. Being in the rain shadow of the Himalayas, this trek can be done even during monsoon season when other regions are wet.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Fly to Pokhara' },
      { day: 3, title: 'Fly to Jomsom and trek to Kagbeni' },
      { day: 4, title: 'Trek to Chele' },
      { day: 5, title: 'Trek to Syangboche' },
      { day: 6, title: 'Trek to Ghami' },
      { day: 7, title: 'Trek to Tsarang' },
      { day: 8, title: 'Trek to Lo Manthang' },
      { day: 9, title: 'Exploration day in Lo Manthang' },
      { day: 10, title: 'Trek to Yara' },
      { day: 11, title: 'Trek to Tangye' },
      { day: 12, title: 'Trek to Chhusang' },
      { day: 13, title: 'Trek to Jomsom' },
      { day: 14, title: 'Fly to Pokhara' },
      { day: 15, title: 'Drive to Kathmandu' },
      { day: 16, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'Why is Upper Mustang so expensive?',
        answer: 'The restricted area permit costs USD 500 for 10 days to limit tourism and preserve the culture. This fee goes to local development.'
      },
      {
        question: 'Can I trek during monsoon?',
        answer: 'Yes! Upper Mustang is in the rain shadow, making it one of the few regions perfect for monsoon trekking (June-August).'
      },
      {
        question: 'What makes Upper Mustang special?',
        answer: 'It\'s one of the most preserved Tibetan Buddhist cultures on Earth, with medieval architecture, ancient caves, and traditions unchanged for centuries.'
      }
    ],
    accommodation: 'Basic tea houses and home stays. Facilities are simple but clean. Limited electricity and hot water.',
    meals: 'Three meals daily. Tibetan cuisine like tsampa, thukpa, and butter tea. Dal Bhat also available.',
    physicalConditions: 'Good fitness required. Mostly moderate terrain but high altitude demands acclimatization. Suitable for experienced trekkers.',
    seasonDescription: 'Best in Spring and Autumn. Unique advantage: can trek during monsoon (June-August) due to rain shadow. Winter is very cold but clear.'
  },
  {
    id: 'kanchenjunga-base-camp',
    title: 'Kanchenjunga Base Camp Trek',
    shortDescription: 'Kanchenjunga Base Camp Trek takes you to the base of the world\'s third highest mountain (8,586m). This remote and challenging trek offers pristine wilderness, diverse flora and fauna, and authentic cultural experiences in one of Nepal\'s least visited regions.',
    image: 'https://images.unsplash.com/photo-1610720223971-ccab98d2c8f7?w=800',
    price: 'USD 1,500 per Person',
    duration: '18-21 days',
    tripDuration: '25 days',
    difficulty: 'Very Challenging',
    maxElevation: '5,143m at Kanchenjunga Base Camp',
    season: 'March-May, September-November',
    trekType: 'Tea House and Camping Trek',
    permits: 'Kanchenjunga Conservation Area Permit, Restricted Area Permit',
    category: 'Trekking',
    highlights: [
      'Trek to the base of world\'s third highest mountain (8,586m)',
      'Remote and pristine wilderness experience',
      'Diverse ecosystems from subtropical to high alpine',
      'Rich biodiversity including red pandas and snow leopards',
      'Experience Limbu and Sherpa cultures',
      'Views of five peaks over 8,000m',
      'Both North and South base camps possible'
    ],
    lowlights: [
      'Very long and strenuous trek',
      'Remote area with limited facilities',
      'Requires camping in some sections',
      'Weather can be unpredictable'
    ],
    summary: 'Kanchenjunga Base Camp Trek is the ultimate adventure for experienced trekkers seeking solitude and raw Himalayan beauty. Located in far eastern Nepal, this trek explores the Kanchenjunga Conservation Area, home to incredible biodiversity and dramatic mountain scenery. The trek can visit both the North Base Camp (Pang Pema) and South Base Camp (Oktang), offering views of five of the world\'s fourteen 8,000m peaks. The region sees very few trekkers, providing an authentic wilderness experience with pristine forests, glaciers, and traditional mountain villages.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Fly to Bhadrapur and drive to Ilam' },
      { day: 3, title: 'Drive to Taplejung' },
      { day: 4, title: 'Trek to Mitlung' },
      { day: 5, title: 'Trek to Chirwa' },
      { day: 6, title: 'Trek to Sukethum' },
      { day: 7, title: 'Trek to Amjilosa' },
      { day: 8, title: 'Trek to Gyabla' },
      { day: 9, title: 'Trek to Ghunsa' },
      { day: 10, title: 'Acclimatization day in Ghunsa' },
      { day: 11, title: 'Trek to Kambachen' },
      { day: 12, title: 'Trek to Lhonak' },
      { day: 13, title: 'Trek to Kanchenjunga North Base Camp and back to Lhonak' },
      { day: 14, title: 'Trek back to Ghunsa' },
      { day: 15, title: 'Trek to Sele La' },
      { day: 16, title: 'Trek to Tseram' },
      { day: 17, title: 'Trek to Ramche' },
      { day: 18, title: 'Hike to Kanchenjunga South Base Camp' },
      { day: 19, title: 'Trek to Torongding' },
      { day: 20, title: 'Trek to Yamphudin' },
      { day: 21, title: 'Trek to Khebang and drive to Taplejung' },
      { day: 22, title: 'Drive to Bhadrapur' },
      { day: 23, title: 'Fly to Kathmandu' },
      { day: 24, title: 'Rest day in Kathmandu' },
      { day: 25, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'How difficult is Kanchenjunga trek?',
        answer: 'Very challenging. It requires excellent fitness, previous high-altitude experience, and mental preparation for long trekking days in remote conditions.'
      },
      {
        question: 'Can I do this trek solo?',
        answer: 'No, it\'s a restricted area requiring a registered guide and minimum 2 trekkers. Solo trekking is not permitted.'
      },
      {
        question: 'What wildlife can I see?',
        answer: 'The area is home to red pandas, snow leopards, Himalayan black bears, musk deer, and over 250 bird species. However, sightings of rare animals require luck.'
      }
    ],
    accommodation: 'Mix of basic tea houses and camping. Facilities are very basic in remote sections.',
    meals: 'Three meals daily. Limited menu options in remote areas. Camping meals provided where needed.',
    physicalConditions: 'Excellent physical fitness essential. Prior high-altitude trekking experience mandatory. Preparation should include long-distance hiking and altitude training.',
    seasonDescription: 'Best in Spring (March-May) and Autumn (September-November). Winter is extremely harsh with deep snow. Monsoon brings heavy rain and leeches.'
  },
  {
    id: 'mardi-himal',
    title: 'Mardi Himal Base Camp Trek',
    shortDescription: 'Mardi himal base camp trek is new trekking trail, off beaten path, less touristy and one of the short trek of Nepal in the Annapurna Region. Mardi himal base camp trek offers spectacular view of Annapurna Range with beautiful landscapes.',
    image: 'https://images.unsplash.com/photo-1602216056680-43f67e00a1dd?w=800',
    price: 'Contact for pricing',
    duration: '5-7 days',
    tripDuration: '9 days',
    difficulty: 'Moderate',
    maxElevation: '4500m at Mardi Himal Base Camp',
    season: 'March-May, September-November',
    trekType: 'Tea House Trek',
    permits: 'ACAP Permit, TIMS Card',
    category: 'Trekking',
    highlights: [
      'Off-the-beaten-path trail with fewer crowds',
      'Close-up views of Machhapuchhre (Fishtail Mountain)',
      'Views of Annapurna South, Hiunchuli, and Mardi Himal',
      'Walk through pristine rhododendron forests',
      'Diverse landscapes from farmland to high alpine'
    ],
    lowlights: [
      'Less developed infrastructure compared to popular routes',
      'Limited tea house options in higher camps'
    ],
    summary: 'Mardi Himal Trek is a hidden gem in the Annapurna region. This relatively new trekking route offers stunning mountain views, pristine forests, and authentic mountain village experience without the crowds of more popular treks. Perfect for those seeking solitude and natural beauty.',
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu' },
      { day: 2, title: 'Drive to Pokhara' },
      { day: 3, title: 'Drive to Kande and trek to Forest Camp' },
      { day: 4, title: 'Trek to Low Camp' },
      { day: 5, title: 'Trek to High Camp' },
      { day: 6, title: 'Trek to Mardi Himal Base Camp and back to High Camp' },
      { day: 7, title: 'Trek to Siding Village' },
      { day: 8, title: 'Drive to Pokhara and then Kathmandu' },
      { day: 9, title: 'Departure' }
    ],
    faqs: [
      {
        question: 'Why choose Mardi Himal over other treks?',
        answer: 'Mardi Himal offers stunning mountain views with fewer tourists, making it perfect for those seeking a more peaceful trekking experience.'
      },
      {
        question: 'Is it really less crowded?',
        answer: 'Yes, being a relatively new trail, it sees significantly fewer trekkers compared to ABC or Poon Hill, especially during peak season.'
      }
    ],
    accommodation: 'Basic tea houses with simple rooms. Facilities are more basic at higher elevations.',
    meals: 'Standard trekking meals with dal bhat, noodles, soups, and other options.',
    physicalConditions: 'Moderate fitness level required. Some steep sections but achievable with regular walking preparation.',
    seasonDescription: 'Best in Spring (March-May) for rhododendron blooms and Autumn (September-November) for clear skies.'
  }
];

export default treksData;
