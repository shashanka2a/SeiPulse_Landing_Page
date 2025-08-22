import Head from 'next/head'
import { HeroSection } from '../components/HeroSection'
import { PaymentsSection } from '../components/PaymentsSection'
import { WatcherSection } from '../components/WatcherSection'
import { FinalCTASection } from '../components/FinalCTASection'
import { Footer } from '../components/Footer'
import { StickyCTA } from '../components/StickyCTA'
import { ThemeProvider } from '../contexts/ThemeContext'

export default function Home() {
  return (
    <>
      <Head>
        <title>SeiPulse - The Future of Crypto Payments</title>
        <meta name="description" content="Experience lightning-fast P2P payments with AI-powered security and comprehensive crypto monitoring in one sleek app." />
        <meta name="keywords" content="crypto, payments, Sei blockchain, P2P, portfolio tracking" />
        <meta property="og:title" content="SeiPulse - The Future of Crypto Payments" />
        <meta property="og:description" content="Experience lightning-fast P2P payments with AI-powered security and comprehensive crypto monitoring in one sleek app." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SeiPulse - The Future of Crypto Payments" />
        <meta name="twitter:description" content="Experience lightning-fast P2P payments with AI-powered security and comprehensive crypto monitoring in one sleek app." />
      </Head>
      
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <HeroSection />
          <PaymentsSection />
          <WatcherSection />
          <FinalCTASection />
          <Footer />
          <StickyCTA />
        </div>
      </ThemeProvider>
    </>
  )
}