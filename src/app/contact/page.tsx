import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Syntrix Technology",
  description: "Get in touch with Syntrix Technology to discuss your cybersecurity, software development, cloud engineering, or automation needs.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to secure and scale your digital ecosystem? Get in touch with our team to discuss your cybersecurity, software development, cloud, or automation needs."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
