

function Services() {
    return (
        <div className="bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3">
              <div className="mb-6 mt-6">
                <h1 className="text-white fond-bold text-4xl text-center">Mercedes Benz Services  </h1>
                <h1 className="text-white fond-bold text-4xl text-center"> Center in Dubai </h1>

                <p className="text-white text-lg">
  Skilled Technicean, same Day Delivery, Pickup & Drop Available, Manufacturers Recommended Service and Genuine Parts. <strong className="text-3xl">27 Year Experience</strong> in Mercedes Benz Service
</p>

              </div>
              <form action="">
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="First Name*"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="tel"
                      placeholder="Phone Number*"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button className="w-full bg-white text-blue-500 font-bold py-3 px-4 rounded">
                  BOOK SERVICE NOW
                </button>
              </div>
            </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-3 mt-7 ">
              <img
                src="https://res.cloudinary.com/dpgbodkae/image/upload/v1720758198/SIZCOM/1_ess1bg.webp"
                alt="Example"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
                </div>

      );
    }


export default Services
