import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services - Syntrix Technology",
  description:
    "Comprehensive digital solutions engineered for performance, security & scale. Explore our software development, cloud engineering, automation, and cybersecurity services.",
  keywords: [
    "IT services",
    "software development",
    "cloud engineering",
    "DevOps",
    "automation",
    "cybersecurity",
    "enterprise solutions",
    "digital transformation",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

