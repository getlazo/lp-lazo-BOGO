
import { useState, useEffect } from 'react';
import { Menu, X, Gift } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/images/LazoOnWhite.png"
            alt="Lazo Logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-800 link-hover">How it works</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-800 link-hover">Testimonials</a>
          <a href="#faq" className="text-sm font-medium text-gray-800 link-hover">FAQ</a>
        </div>
        
        <a 
          href="https://www.getlazo.app/providers"
          rel="noopener noreferrer"
          className="hidden md:flex items-center px-5 py-2 rounded-full bg-lazo-bordeaux text-white text-sm font-medium transition-all hover:bg-lazo-bordeaux-light"
        >
          <Gift className="w-4 h-4 mr-1" />
          Get BOGO Offer
        </a>
        
        <button 
          className="md:hidden text-lazo-bordeaux"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-slide-down">
          <div className="flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-gray-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-gray-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-gray-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://www.getlazo.app/providers"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 rounded-full bg-lazo-bordeaux text-white text-sm font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              <Gift className="w-4 h-4 mr-1" />
              Get BOGO Offer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
