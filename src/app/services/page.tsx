"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceCard from "@/components/Services/ServiceCard";
import { servicesData } from "@/components/Services/servicesData";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return servicesData;

    const query = searchQuery.toLowerCase();
    return servicesData.filter((service) => {
      // Search in title
      if (service.title.toLowerCase().includes(query)) return true;
      // Search in description
      if (service.description?.toLowerCase().includes(query)) return true;
      // Search in sub-services
      if (
        service.subServices.some((sub) =>
          sub.title.toLowerCase().includes(query)
        )
      )
        return true;
      // Search in tech stack
      if (
        service.techStack.some((tech) =>
          tech.name.toLowerCase().includes(query)
        )
      )
        return true;
      return false;
    });
  }, [searchQuery]);

  return (
    <>
      <ScrollUp />
      
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pb-20 pt-28 lg:pt-[150px]">
        {/* Background Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(74, 108, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(74, 108, 247, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute right-0 top-0 z-[-1] opacity-10 lg:opacity-20">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_services)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_services"
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

        <div className="container relative z-10">
          <Breadcrumb
            pageName="All Services"
            description="Comprehensive digital solutions engineered for performance, security & scale"
          />

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Find a service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-6 py-4 pl-12 text-base text-black placeholder-gray-400 shadow-lg transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
              />
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Results Count */}
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-sm text-body-color"
            >
              Found {filteredServices.length} service
              {filteredServices.length !== 1 ? "s" : ""}
            </motion.p>
          )}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative z-10 bg-gradient-to-b from-white via-gray-50/50 to-white py-20">
        {/* Section Divider */}
        <div className="container mb-12">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="container">
          {filteredServices.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <p className="text-xl text-body-color">
                No services found matching &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-primary hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Transform Your Digital Infrastructure?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Let&apos;s discuss how our comprehensive services can elevate your business.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

