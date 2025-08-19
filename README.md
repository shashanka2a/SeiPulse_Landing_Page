# SeiPulse - Next.js 14 Application

A production-ready Next.js 14 application for crypto payments and portfolio tracking on the Sei blockchain.

## Features

- 🚀 **Next.js 14** with App Router and static export support
- ⚡ **Lightning-fast P2P payments** with AI-powered security
- 📊 **Comprehensive crypto tracking** for memecoins, NFTs, and wallets
- 🎨 **Modern UI** with Tailwind CSS and Radix UI components
- 🌙 **Dark/Light mode** support with next-themes
- 📱 **Mobile-first responsive design**
- 🔒 **TypeScript** for type safety
- 🎯 **Static export ready** for deployment anywhere

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Static Export

```bash
npm run export
# or
yarn export
# or
pnpm export
```

This will create a `dist` folder with static files ready for deployment.

## Project Structure

```
├── components/           # React components
│   ├── ui/              # Reusable UI components (Radix UI + Tailwind)
│   ├── HeroSection.tsx  # Landing page hero
│   ├── PaymentsSection.tsx # P2P payments showcase
│   ├── WatcherSection.tsx  # Portfolio tracking
│   └── ...
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme provider
├── pages/               # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # HTML document
│   └── index.tsx       # Home page
├── styles/              # Global styles
│   └── globals.css     # Tailwind CSS + custom variables
└── public/              # Static assets
```

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes
- **Notifications**: Sonner

## Key Features

### 🏠 Landing Page
- Hero section with animated elements
- Feature showcases for payments and tracking
- Responsive design with dark mode support

### 💸 P2P Payments
- CashApp-style payment interface
- AI-powered security checks
- Real-time transaction processing
- QR code and handle-based transfers

### 📊 Portfolio Tracking
- Memecoin monitoring with trending indicators
- NFT collection floor price tracking
- Wallet balance and transaction history
- AI market insights and recommendations

### 🎨 UI Components
- Fully accessible Radix UI primitives
- Custom styled with Tailwind CSS
- Consistent design system
- Mobile-optimized interactions

## Deployment

This app is configured for static export and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ for the Sei ecosystem