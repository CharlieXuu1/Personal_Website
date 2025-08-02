'use client';

import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photography <span className="text-red-500">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my photography and visual storytelling
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 text-center border border-gray-700 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mb-6"
          >
            <Camera className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Gallery Coming Soon
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            This section will showcase my photography portfolio featuring travel adventures, 
            portrait sessions, landscape captures, and street photography from around the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Travel Photography", desc: "Adventures from around the globe" },
              { icon: <Camera className="w-6 h-6" />, title: "Portrait Sessions", desc: "Capturing human stories" },
              { icon: <Calendar className="w-6 h-6" />, title: "Street Photography", desc: "Urban life and culture" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-4 bg-red-600/10 border border-red-500/20 rounded-lg"
              >
                <div className="text-red-500 mb-2 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-red-400 font-medium"
          >
            Stay tuned for visual stories and captured moments...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}