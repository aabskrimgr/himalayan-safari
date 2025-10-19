# Himalayan Safari - Modern Tourism Website

A modern, responsive tourism website for Himalayan trekking adventures in Nepal, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🏔️ Features

- **Modern Tech Stack**: Built with React 19, TypeScript, Vite, and Tailwind CSS
- **Smooth Animations**: Engaging user experience with Framer Motion animations
- **Responsive Design**: Fully responsive across all devices
- **Interactive Hero Carousel**: Beautiful image carousel showcasing Nepal's landscapes
- **Trek Catalog**: Browse 4 featured treks with detailed information
- **Dynamic Routing**: React Router for seamless navigation
- **Trek Details**: Comprehensive trek information including:
  - Highlights and lowlights
  - Day-by-day itinerary
  - Pricing and duration
  - FAQs
  - Accommodation and meals info
- **Modern UI Components**: Custom-designed components with hover effects and transitions
- **Eco-Friendly Focus**: Emphasis on sustainable tourism practices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd himalayan-safari-modern
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
himalayan-safari-modern/
├── public/
│   └── stupa.jpg              # Main image asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation bar with mobile menu
│   │   ├── Hero.tsx           # Hero carousel section
│   │   ├── TrekCard.tsx       # Trek card component
│   │   └── Footer.tsx         # Footer with links and contact
│   ├── pages/
│   │   ├── Home.tsx           # Home page layout
│   │   └── TrekDetails.tsx    # Trek detail page
│   ├── data/
│   │   └── treks.ts           # Trek data and TypeScript interfaces
│   ├── App.tsx                # Main app with routing
│   ├── App.css                # App-specific styles
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.tsx               # Application entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Featured Treks

1. **Ghorepani Poon Hill Trek**
   - Duration: 4 days / 3 nights
   - Difficulty: Easy to Medium
   - Max Elevation: 3210m
   - Famous for sunrise views

2. **Everest Base Camp Trek**
   - Duration: 12-15 days
   - Difficulty: Challenging
   - Max Elevation: 5364m
   - Includes Gokyo Lakes

3. **Annapurna Base Camp Trek**
   - Duration: 7-10 days
   - Difficulty: Moderate to Challenging
   - Max Elevation: 4130m
   - 360-degree mountain panorama

4. **Mardi Himal Base Camp Trek**
   - Duration: 5-7 days
   - Difficulty: Moderate
   - Max Elevation: 4500m
   - Off-the-beaten-path experience

## 🛠️ Technologies Used

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon set
- **PostCSS & Autoprefixer** - CSS processing

## 🎯 Key Features Implementation

### Animations
- Smooth scroll animations with Framer Motion
- Image carousel with auto-play and manual controls
- Hover effects on trek cards
- Page transitions
- Fade-in and slide-up animations on scroll

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Responsive grid layouts
- Optimized images for all screen sizes

### User Experience
- Smooth scrolling navigation
- Loading states and transitions
- Interactive elements with visual feedback
- Clear call-to-action buttons
- Easy-to-read typography

## 🌱 Eco-Friendly Commitment

This website promotes sustainable tourism by:
- Discouraging single-use plastic bottles
- Providing reusable water bottles to trekkers
- Promoting responsible trekking practices
- Supporting local communities

## 📝 Customization

### Adding New Treks

1. Open `src/data/treks.ts`
2. Add a new trek object to the `treksData` array following the `Trek` interface
3. The trek will automatically appear on the home page and be accessible via its route

### Changing Colors

1. Open `tailwind.config.js`
2. Modify the color values in the `extend.colors` section
3. The changes will apply throughout the application

### Modifying Images

- Replace images in the `public` folder
- Update image URLs in `src/data/treks.ts` and component files

## 🤝 Contributing

This is a portfolio/demonstration project showcasing modern web development practices for tourism websites.

## 📄 License

This project is created for educational and demonstration purposes.

## 🙏 Acknowledgments

- Original website concept from the basic HTML/CSS version
- Mountain images from various tourism websites
- Nepal trekking community for inspiration

## 📞 Contact Information

For inquiries about the website or trekking services:
- Location: Kathmandu, Nepal
- Email: info@himalayansafari.com
- Phone: +977 123 456 789

---

**Built with ❤️ for adventure seekers and mountain lovers**
