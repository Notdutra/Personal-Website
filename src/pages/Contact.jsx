import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="relative z-10">
        <ContactHero />
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
