"use client";

import { motion } from "framer-motion";
import { ServiceCategory } from "@/types/service";

interface ServiceCardProps {
  service: ServiceCategory;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{
        border: "1px solid rgba(226, 232, 240, 0.8)",
      }}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      {/* Icon */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-3xl transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-black">{service.title}</h3>
      </div>

      {/* Description */}
      {service.description && (
        <p className="mb-6 text-base leading-relaxed text-body-color">
          {service.description}
        </p>
      )}

      {/* Sub-Services */}
      <div className="mb-6">
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
          Sub-Services
        </h4>
        <div className="space-y-3">
          {service.subServices.map((subService, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
            >
              <span className="mt-0.5 text-lg transition-transform duration-200 group-hover/item:scale-110">
                {subService.icon}
              </span>
              <div className="flex-1">
                <span className="font-medium text-black transition-colors group-hover/item:text-primary">
                  {subService.title}
                </span>
                {subService.description && (
                  <p className="mt-1 text-xs leading-relaxed text-body-color">
                    {subService.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-md bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md"
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subtle animated border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl border border-primary/30"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

