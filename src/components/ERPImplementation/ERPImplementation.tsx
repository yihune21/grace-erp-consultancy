const ERPImplementation = () => {
  return (
    <>
      <section className="bg-blue-900 py-10">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg relative shadow-lg hover:scale-105 transition-transform duration-500">
          {/* Top Browser-like Bar */}
          <div className="flex justify-between items-center bg-gray-100 p-3 rounded-t-lg border-b">
            <div className="flex space-x-2">
              <span className="block w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>

          {/* <!-- Main Quote Content --> */}
          <div className="text-center mt-6">
            <div className="flex justify-center mb-4">
              <span className="text-orange-400 text-6xl">&ldquo;</span>
              <img
                src="your-logo-url-here"
                alt="GraceERP Consultancy"
                className="h-12 ml-2"
              />
            </div>

            <h2 className="text-black font-bold text-3xl lg:text-4xl mb-4">
              A successful ERP implementation is a journey, not a destination.
            </h2>
            <p className="text-gray-500">Have a Productive Week!</p>
          </div>

          {/* <!-- Footer with Author --> */}
          <div className="text-center mt-8">
            <p className="text-black font-bold">@ErmiasTegegen</p>
          </div>

          {/* <!-- Bottom Quote --> */}
          <div className="flex justify-center mt-4">
            <span className="text-orange-400 text-6xl">&rdquo;</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPImplementation;
