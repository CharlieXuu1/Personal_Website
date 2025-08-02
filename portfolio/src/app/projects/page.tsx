'use client';

import { motion } from 'framer-motion';
import { Code, Database, Brain, Users, ExternalLink, Github, Calendar, Award } from 'lucide-react';

const projects = [
  {
    title: "SVN to Git Migration Project",
    category: "Project Management",
    description: "Led enterprise version control migration with hybrid Scrum/Waterfall methodology",
    fullDescription: [
      "Developed and implemented data-driven retention strategies focusing on identified risks, notably through age-related insights.",
      "Developed and oversaw a hybrid Scrum/Waterfall roadmap, breaking the migration into six key milestones (documentation, training, repository cloning, access control, testing, go-live)",
      "Coordinated cross-functional teams (System Admin, DevOps, QA, Release Management) through sprint planning, daily stand-ups, and sprint reviews to ensure alignment and on-time delivery",
      "Managed resource allocation, conducting Planning Poker sessions to estimate story points and balance workload across support engineers and developers",
      "Implemented risk management and mitigation plans, including credential-theft response procedures and data-breach contingency planning",
      "Tracked and reported project performance via burn-up charts, adjusting timelines and priorities based on velocity and stakeholder feedback"
    ],
    technologies: ["Jira", "Confluence", "AWS CodeCommit", "Jenkins CI/CD", "Agile (Scrum)", "Waterfall", "MFA-based IAM controls"],
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-600 to-purple-600",
    achievements: [
      "Successfully migrated enterprise-level version control system",
      "Improved development workflow efficiency",
      "Enhanced security with MFA-based controls"
    ]
  },
  {
    title: "SentixAnalytica - NLP Sentiment Analysis System",
    category: "AI/ML & Data Analytics",
    description: "Advanced NLP system for analyzing US airline customer sentiment with 85%+ accuracy",
    fullDescription: [
      "Processed and analyzed 15,000+ airline tweets using advanced NLP techniques, achieving 85%+ sentiment classification accuracy across positive, negative, and neutral categories",
      "Implemented end-to-end ML pipeline featuring data preprocessing (text normalization, tokenization), feature engineering (TF-IDF, CountVectorizer), and model evaluation with cross-validation",
      "Developed and compared performance of Naive Bayes, Random Forest, XGBoost, and RNN models, achieving optimal results through hyperparameter tuning and model selection",
      "Created interactive dashboards using Matplotlib and Seaborn to visualize sentiment trends, customer satisfaction metrics, and actionable insights for service improvement",
      "Engineered automated email response system using NLP techniques, resulting in 40% improvement in customer response time and 25% increase in satisfaction scores through A/B testing validation"
    ],
    technologies: ["Python", "NLP", "TF-IDF", "Naive Bayes", "Random Forest", "XGBoost", "RNN", "Matplotlib", "Seaborn", "Cross-validation"],
    icon: <Brain className="w-8 h-8" />,
    color: "from-green-600 to-teal-600",
    achievements: [
      "85%+ sentiment classification accuracy",
      "40% improvement in customer response time",
      "25% increase in satisfaction scores"
    ]
  },
  {
    title: "Generative AI Chatbot for Bidgely UtilityAI",
    category: "AI Integration & Web Development",
    description: "Enterprise-grade generative AI chatbot with semantic retrieval and contextual responses",
    fullDescription: [
      "Designed and deployed a generative AI chatbot using LangChain, OpenAI GPT-3.5-Turbo, and AWS EC2, enabling Bidgely's customers to interactively explore energy solutions on its demo portal.",
      "Implemented document ingestion and vectorization using Chroma DB and OpenAI Embeddings, processing over 100 solution documents for semantic retrieval.",
      "Developed dynamic response generation with prompt templates, context retrieval, and fallback strategies (including paraphrasing and rephrased query rerouting) to ensure high response accuracy.",
      "Integrated a web interface via Gradio for real-time interaction, and established a paraphrasing fallback chain for unanswerable queries using custom prompt engineering.",
      "Built few-shot prompt templates from structured Q&A JSON files and implemented a retriever chain with context-aware responses."
    ],
    technologies: ["LangChain", "OpenAI GPT-3.5-Turbo", "AWS EC2", "Chroma DB", "OpenAI Embeddings", "Gradio", "Python", "Prompt Engineering"],
    icon: <Database className="w-8 h-8" />,
    color: "from-red-600 to-pink-600",
    achievements: [
      "Processed 100+ solution documents",
      "Real-time semantic document retrieval",
      "Advanced fallback strategies for high accuracy"
    ]
  }
];

const categories = ["All", "Project Management", "AI/ML & Data Analytics", "AI Integration & Web Development"];

export default function Projects() {
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
            Technical <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in AI/ML, data analytics, project management, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h2>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-red-500" />
                    Key Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-red-600/10 border border-red-500/20 rounded-lg p-3 text-center"
                      >
                        <p className="text-red-400 text-sm font-medium">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Project Details</h3>
                  <div className="space-y-3">
                    {project.fullDescription.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-red-500" />
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.03 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-red-600/20 hover:text-red-400 transition-all duration-200 cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Interested in My Work?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or 
              sharing insights about AI, data analytics, and project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:charliexjy@hotmail.com"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/experience"
                className="px-6 py-3 border-2 border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}