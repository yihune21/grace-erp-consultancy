const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-screen bg-gradient-to-r from-black to-blue-900 p-6 md:p-0">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 md:p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Who We Are
        </h2>
        <p className="text-base md:text-lg mb-4 md:mb-6">
          GraceERP Consultancy is a registered Private Limited Company
          headquartered in Addis Ababa, Ethiopia. We pride ourselves on being a
          trusted local partner for businesses seeking to optimize their
          operations through the implementation of robust ERP systems. Our team
          consists of highly skilled professionals with extensive experience in
          ERP system customization, implementation, integration with third party
          software's, and training.
        </p>

        <a
          href="#"
          className="text-blue-300 underline hover:text-blue-400 transition"
        >
          Explore More
        </a>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default About;
// TODO:redirect it to about page
