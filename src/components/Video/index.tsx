"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const featureCards = [
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Advanced cybersecurity solutions protecting your digital assets 24/7",
  },
  {
    icon: "☁️",
    title: "Cloud Expertise",
    description: "Scalable cloud infrastructure and DevOps solutions for modern businesses",
  },
  {
    icon: "⚡",
    title: "Automation & AI",
    description: "Intelligent automation to streamline operations and reduce costs",
  },
  {
    icon: "🔧",
    title: "24/7 Support",
    description: "Round-the-clock technical support and managed services",
  },
  {
    icon: "👥",
    title: "Expert Teams",
    description: "Dedicated third-party developers integrated into your workflow",
  },
  {
    icon: "📈",
    title: "Digital Transformation",
    description: "End-to-end solutions to modernize and scale your business",
  },
];

export default function Video() {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help secure your digital ecosystem"
            paragraph="Whether you're a startup, growing SaaS company, or enterprise, our expert team delivers enterprise-grade cybersecurity and technology solutions tailored to your needs. Contact us to learn how we can help."
            center
            mb="80px"
          />
        </div>
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-black transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-body-color">
                  {card.description}
                </p>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 opacity-0 transition-opacity duration-300 group-hover:border-primary/20 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute right-0 top-0 z-[-1] opacity-5">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_features)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_features"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};
