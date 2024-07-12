import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck} from '@fortawesome/free-solid-svg-icons'
function Services3() {
  return (
    <div>
        <div className="bg-black mt-7 pt-28">
            <h1 className="text-white font-bold text-4xl text-center">
            Keep Your Mercedes-Benz Running Like New with Our Products

            </h1>
            <p className="text-gray-500 text-center mt-3">
            Protect your investment with our service contracts and extended warranties. Avoid unexpected repair costs and keep your vehicle running at its best. Call today to learn more.
            </p>
          </div>
          <div className="flex items-center justify-center bg-black pt-12 pb-5">
          <div className="flex flex-wrap gap-40">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white ml-5">Service Contract
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white ml-5">Extended Warranty
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#fcfcfc"}} />
              <h1 className="font-bold text-white ml-5">Genuine Parts
              </h1>
            </div>
          </div>
        </div>
<div className='bg-black h-28'>
        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1720763446/SIZCOM/merc_xnvk0q.webp" alt=""/>
    </div>
    </div>
  )
}

export default Services3
