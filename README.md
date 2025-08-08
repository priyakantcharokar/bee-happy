# GoSmiles - Climate-Positive Leisure Trips

A modern, responsive web application for booking eco-conscious leisure trips, farm stays, and sustainable travel experiences across India.

## 🌟 Features

- **Climate-Positive Travel**: Zero carbon emissions with sustainable practices
- **Off-Beat Destinations**: Hidden gems not on typical tourist maps
- **Cultural Immersion**: Connect with local communities and traditions
- **Eco-Conscious Experiences**: Afforestation and organic farming programs
- **Meaningful Impact**: Every journey contributes to conservation and community upliftment
- **Soul-Stirring Stories**: Create memories that inspire responsible travel

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v7
- **Animations**: Framer Motion
- **Styling**: MUI System + CSS-in-JS
- **State Management**: React Query (TanStack)
- **Forms**: React Hook Form + Zod validation
- **Date Handling**: Day.js
- **Icons**: MUI Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/priyakantcharokar/where-my-heart-goes.git
cd where-my-heart-goes
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. **Connect to GitHub**: 
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard

4. **Deploy**:
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (categories)/       # Category pages
│   ├── contact/           # Contact page
│   ├── explore/           # Explore trips page
│   ├── trips/             # Individual trip pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── dialogs/          # Modal dialogs
│   ├── Breadcrumbs.tsx   # Navigation breadcrumbs
│   ├── ContactForm.tsx   # Contact form
│   ├── Footer.tsx        # Site footer
│   ├── HeroSearch.tsx    # Hero section with search
│   ├── TopNav.tsx        # Navigation bar
│   ├── TripCard.tsx      # Trip display card
│   ├── UiShell.tsx       # UI wrapper component
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── contexts/             # React contexts
├── data/                 # JSON data files
└── public/               # Static assets
    └── images/           # Image files
```

## 🎨 Design System

- **Colors**: Organic green palette (#2D7D32, #689F38, #558B2F)
- **Typography**: Inter (body) + Playfair Display (headings)
- **Spacing**: 8px grid system
- **Breakpoints**: Mobile-first responsive design
- **Animations**: Subtle micro-interactions with Framer Motion

## 📱 Features

### User Experience
- **Responsive Design**: Works perfectly on all devices
- **Fast Loading**: Optimized images and code splitting
- **Accessible**: WCAG compliant design
- **SEO Optimized**: Meta tags and structured data

### Functionality
- **Trip Search**: Filter by destination, dates, and guests
- **Quick Booking**: Streamlined booking flow
- **WhatsApp Integration**: Direct communication
- **Contact Forms**: Multiple ways to get in touch
- **Testimonials**: Auto-rotating customer stories

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create components in `src/components/`
2. Add pages in `src/app/`
3. Update data in `src/data/`
4. Test responsiveness and accessibility

## 🌍 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Contact the maintainer for contribution guidelines.

## 📞 Support

For support, email gosmilescare@gmail.com or contact via WhatsApp through the website.

---

**Made with 💚 for conscious travelers • Creating positive impact, one journey at a time**