import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="container m-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      <div className="max-w-2xl w-full mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
