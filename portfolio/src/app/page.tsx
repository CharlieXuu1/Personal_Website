'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="relative mx-auto w-32 h-32 mb-6">
              <Image
                src="/avatar.jpg"
                alt="Jingyu (Charlie) Xu"
                fill
                className="rounded-full object-cover border-4 border-red-500 shadow-2xl"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-red-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Jingyu
              </span>{" "}
              <span className="text-white">(Charlie)</span>{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Xu
              </span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Marketing Analyst & Operations Manager | AI & Data Analytics Specialist
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about leveraging AI, data analytics, and web technologies to drive business growth and operational excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Pasadena, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span>949-562-3833</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/charliexjy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-500"
              whileHover={{ scale: 1.1, rotate: -360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:charliexjy@hotmail.com"
              className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl"
              >
                View My Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/experience"
                className="px-8 py-3 border-2 border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-2xl"
              >
                My Experience
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-red-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore my expertise across AI, data analytics, marketing operations, and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Technical Projects', 
                href: '/projects', 
                description: 'AI/ML systems, web development, data analytics',
                icon: '🚀'
              },
              { 
                title: 'Professional Experience', 
                href: '/experience', 
                description: 'Marketing analytics, operations management',
                icon: '💼'
              },
              { 
                title: 'Photography', 
                href: '/gallery', 
                description: 'Creative visual storytelling',
                icon: '📸'
              },
              { 
                title: 'Music & Interests', 
                href: '/music', 
                description: 'Current playlist & personal interests',
                icon: '🎵'
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Link
                  href={item.href}
                  className="block p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:from-red-900/20 hover:to-gray-800 transition-all duration-300 group border border-gray-700 hover:border-red-500 shadow-lg hover:shadow-2xl"
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
