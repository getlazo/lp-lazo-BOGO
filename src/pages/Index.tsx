
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CheckersSection from '@/components/CheckersSection';
import BackgroundShapes from '@/components/BackgroundShapes';
import HowItWorksSection from '@/components/HowItWorksSection';
import ChatSection from '@/components/ChatSection';
import PressSection from '@/components/PressSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    // Set title and meta tags for BOGO offer
    document.title = 'Buy 1 Get 1 FREE Loyalty Test | Lazo Special Offer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Limited time offer: Buy 1 Get 1 FREE loyalty test! Test your partner's fidelity discreetly or share with a friend. Claim your BOGO offer now with Lazo.");
    }

    // Add structured data for the special offer
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Offer',
      'name': 'Buy 1 Get 1 Free Loyalty Test',
      'description': 'Special promotional offer for Lazo loyalty testing service - buy one test and get another one free',
      'url': 'https://getlazo.app',
      'seller': {
        '@type': 'Organization',
        'name': 'Getlazo',
        'url': 'https://getlazo.app'
      },
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'price': '0',
        'priceCurrency': 'USD'
      }
    });
    document.head.appendChild(script);

    // Handle navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-sm');
        } else {
          navbar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Remove the script when component unmounts
      const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdScript) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* SEO-optimized hidden heading for search engines */}
      <h1 className="sr-only">Buy 1 Get 1 Free Loyalty Test - Limited Time Offer | Lazo Fidelity Testing</h1>
      
      <BackgroundShapes />
      <Navbar />
      
      <main className="relative">
        <div className="space-y-0">
          <HeroSection />
          <CheckersSection />
          <HowItWorksSection />
          <ChatSection />
          <PressSection />
          <Testimonials />
          <FaqSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
