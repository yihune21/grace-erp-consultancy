import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import bgImg from "../assets/erp_imp(1).jpg";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="flex w-fill h-80 bg-gray-800 text-white mb-4 justify-center items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Contact Us
        </h1>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUsPage;
