import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Syntrix Solutions",
  description: "Learn about Syntrix Solutions - a modern technology company specializing in cybersecurity, software development, cloud engineering, and automation services.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Syntrix Solutions"
        description="We are a modern technology company helping businesses innovate, scale, and secure their digital ecosystem with expertise across software engineering, cloud, and cybersecurity."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
