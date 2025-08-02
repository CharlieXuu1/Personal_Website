'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Camera, Music, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Experience', href: '/experience', icon: User },
  { name: 'Gallery', href: '/gallery', icon: Camera },
  { name: 'Music', href: '/music', icon: Music },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-xl font-bold text-white hover:text-red-500 transition-colors">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Charlie
              </span>
              <span className="text-white">.dev</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border border-red-400/50"
                        layoutId="activeNavBorder"
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-red-600/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-b-lg border-t border-red-500/20">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-700' 
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}