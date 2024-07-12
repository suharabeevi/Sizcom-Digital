import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck} from '@fortawesome/free-solid-svg-icons'


function service2() {
    return (
        <div>
        <div className="bg-black">
          <h1 className="text-white text-center font-bold text-4xl pt-20">27 Years of Experience in Mercedes Repair UAE</h1>
        </div>
        <div className="flex items-center justify-center bg-black pt-12">
          <div className="flex flex-wrap gap-40">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white">SAME DAY DELIVERY</h1>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white">PICKUP&DROP AVAILABLE</h1>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white">MANUFACTURES RECOMMENTED SERVICES</h1>
            </div>
          </div>
        </div>
        <div className='bg-black h-40'>
        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1720763446/SIZCOM/merc_xnvk0q.webp" alt="" className='pt-8'/>

        </div>


        <div className='bg-blue-50 mt-12 h-au pt-40 flex'>
  <div className='w-1/2 flex justify-center items-center'>
    <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1720764432/SIZCOM/img2_pg7yro.webp" alt="Mercedes-Benz Service" className='h-80 ml-56'/>
  </div>
  <div className='w-1/2 p-6 flex flex-col justify-center pr-36'>
    <h1 className='text-2xl font-bold mb-4'>Your Trusted Mercedes-Benz Specialists in Dubai</h1>
    <p className='mb-4'>
      Experience unrivalled service for your Mercedes-Benz at Al Maraghi, Dubais premier service center. Our team of expert technicians is dedicated to exceeding your expectations, offering exceptional maintenance, repair, and restoration services. We combine passion with expertise to ensure your Mercedes operates at peak performance, all while minimizing downtime. Proudly ESMA 5-star certified, we offer convenience, warranty, and service contracts, embodying the epitome of service excellence. Experience the Al Maraghi difference today.
    </p>
    <button className='bg-black text-white rounded w-24  p-3'>
      Call Now
    </button>
  </div>
</div>

      </div>
    );
  }
  
  export default service2;
  