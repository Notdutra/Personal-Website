import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <ContactInfo />

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
