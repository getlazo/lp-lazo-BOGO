
import { motion } from 'framer-motion';
import { EyeOff, Lock, CheckCircle2, ChevronDown, Gift, Users, Heart } from 'lucide-react';

const trustFeatures = [
  {
    icon: Gift,
    text: "Buy 1 Get 1 FREE",
    color: "from-pink-400 to-pink-500",
    animationDelay: 0
  },
  {
    icon: EyeOff,
    text: "100% Discreet",
    color: "from-violet-400 to-violet-500",
    animationDelay: 0.5
  },
  {
    icon: Heart,
    text: "Share with a friend",
    color: "from-emerald-400 to-emerald-500",
    animationDelay: 1
  }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-lazo-pink/5">
      <div className="container relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Title Section - Moved to top */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold mb-4">
                <Gift className="w-5 h-5" />
                <span>Limited Time Offer</span>
              </div>
              <h1 className="text-lazo-bordeaux mb-4 leading-tight text-4xl md:text-6xl font-bold">
                Buy 1
                <span className="gradient-text block">Get 1 FREE</span>
                <span className="text-lazo-bordeaux block">Loyalty Test</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.a
                href="https://www.getlazo.app/providers"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-white bg-lazo-bordeaux rounded-full hover:bg-lazo-bordeaux-light transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Free Loyalty Test Now
              </motion.a>
            </motion.div>
          </div>

          {/* Hero Image - Moved below CTA, cropped and smaller */}
          <motion.div
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-[280px] mx-auto"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative will-change-transform"
            >
              <img
                src="/lovable-uploads/430c04db-81ad-4c6e-ba64-14dc88cbb054.png"
                alt="Two friends sharing Lazo loyalty test - Buy 1 Get 1 Free offer"
                className="w-full h-auto object-cover object-center rounded-2xl shadow-lg"
                style={{ objectPosition: 'center 30%' }}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </motion.div>

          {/* Logo above How it Works */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src="/images/LazoOnWhite.png"
              alt="Lazo Logo"
              className="h-8 w-auto opacity-80"
              loading="lazy"
            />
            <a
              href="#how-it-works"
              className="inline-flex items-center text-gray-600 hover:text-lazo-bordeaux transition-colors duration-300"
            >
              <span className="text-lg">How a Loyalty Test Works</span>
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
            </a>
          </motion.div>

          {/* Content Section */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-lazo-bordeaux max-w-3xl mx-auto text-lg font-semibold"
            >
              Get 2 loyalty tests for the price of 1! Perfect for testing your own relationship more thoroughly or helping out a friend who's also in doubt.
            </motion.p>

            {/* Trust Features */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {trustFeatures.map((feature) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + feature.animationDelay
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="small-text font-medium text-gray-700">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
