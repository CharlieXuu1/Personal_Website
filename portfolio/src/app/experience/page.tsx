'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Marketing Analyst & Operations Manager",
    company: "Fred Stuart Guitars, Inc",
    location: "San Marino, CA",
    period: "June 2024 – Present",
    type: "Full-time",
    achievements: [
      "Spearheaded the design and refinement of standardized operational processes, aligning cross-departmental workflows with business goals and digital transformation efforts.",
      "B2C: Managed CRM and e-commerce platforms to implement personalized customer journeys, drive marketing campaigns, and improve user engagement.",
      "B2B: Built strategic alliances with retail partners, expanding distribution networks and optimizing revenue streams.",
      "Leveraged advanced analytics tools (Excel, Python, Power BI) to monitor operational KPIs and marketing performance metrics, enabling data-informed decisions.",
      "Created custom data visualizations and interactive dashboards for internal use, improving transparency and alignment across marketing, sales, and supply chain teams.",
      "Led vendor sourcing and negotiation processes, integrating data-driven cost analyses to balance quality, sustainability, and budget targets."
    ]
  },
  {
    title: "Operations Analyst - Part Time",
    company: "Wild West Guitars, Inc (AI-Integrated E-Commerce Optimization)",
    location: "Pasadena, CA",
    period: "June 2022 – Present",
    type: "Part-time",
    achievements: [
      "Architected and integrated an AI-powered guitar recommendation engine directly into the WordPress-based e-commerce site using OpenAI GPT-4, LangChain, and the WordPress REST API. Delivered dynamic, real-time product suggestions on the frontend, resulting in a 41% increase in product discovery click-through rate.",
      "Automated product data ingestion pipeline using Python (Playwright, BeautifulSoup, Pandas), enabling real-time scraping and structuring of product metadata and images from multiple vendor sources. Reduced manual content management time by 30+ hours per week, while ensuring 98% data consistency.",
      "Connected Flask-based AI microservice with WordPress via RESTful API, allowing the AI engine to fetch product embeddings and deliver personalized recommendations without overloading the main WP environment.",
      "Enhanced WooCommerce catalog usability and design by implementing dynamic content blocks and real-time AJAX interactions, seamlessly integrated with the AI backend. Boosted average session duration by 32% and reduced bounce rate.",
      "Redesigned site UI/UX and mobile experience using custom HTML/CSS/JS within the WordPress theme framework, aligning visual language with brand identity and improving return visit rates by 24%.",
      "Led planning for long-term WordPress + AI architecture, including model retraining workflow, CMS-friendly plugin wrappers for AI features, and cross-functional collaboration with marketing and dev teams to scale automation across campaigns."
    ]
  }
];

const education = [
  {
    degree: "Masters of Science in Information Systems",
    school: "Santa Clara University, Leavey School of Business",
    location: "Santa Clara, CA",
    period: "June 2024",
    courses: ["Data Analytics In Python", "Object-Oriented Analysis & Programming", "Web Programming"]
  },
  {
    degree: "Bachelor's in Business Information Management",
    school: "University Of California, Irvine",
    location: "Irvine, CA",
    period: "June 2022",
    honor: "Deans' Honor"
  }
];

const skills = {
  "Programming Languages": ["Python", "SQL", "JAVA", "HTML", "PHP"],
  "Tools": ["OpenAI API", "MS Office Suite", "Adobe Photoshop", "Tableau", "Power BI"],
  "Languages": ["Fluent in Mandarin and English (Bilingual Proficiency)"]
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-red-500">Experience</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My journey in marketing analytics, operations management, and AI/data integration
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <Calendar className="w-6 h-6 text-red-500" />
            Work Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-red-400 font-semibold mb-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: achIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <GraduationCap className="w-6 h-6 text-red-500" />
            Education
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-red-400 font-semibold mb-2">{edu.school}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.honor && (
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-red-500" />
                    <span className="text-red-400 text-sm font-semibold">{edu.honor}</span>
                  </div>
                )}
                {edu.courses && (
                  <div>
                    <p className="text-gray-300 text-sm font-semibold mb-1">Relevant Courses:</p>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-2 py-1 bg-red-600/20 text-red-400 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <ExternalLink className="w-6 h-6 text-red-500" />
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm hover:bg-red-600/30 transition-colors cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}