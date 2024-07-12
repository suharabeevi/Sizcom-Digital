import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function cards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1
      };
      const data = [
        {
          img: "https://res.cloudinary.com/dpgbodkae/image/upload/v1720766880/SIZCOM/brake-service_2_urvh3t.webp",
        },
        {
          img: "https://res.cloudinary.com/dpgbodkae/image/upload/v1720766880/SIZCOM/brake-service_1_wamtbz.webp",
        },
        {
          img: "https://res.cloudinary.com/dpgbodkae/image/upload/v1720766880/SIZCOM/Air-Conditioner_gjzfz9.webp",
        },
        {
          img: "https://res.cloudinary.com/dpgbodkae/image/upload/v1720766880/SIZCOM/Air-Conditioner_gjzfz9.webp",
        },
        {
          img: "https://res.cloudinary.com/dpgbodkae/image/upload/v1720766880/SIZCOM/Air-Conditioner_gjzfz9.webp",
        },
      ];
    
      return (
        <div className="bg-black">
          <div className="bg-black mt-10 pt-14">
            <h1 className="text-white font-bold text-4xl text-center">
              High Quality Service, Affordable Prices
            </h1>
            <p className="text-white ml-3 mt-5">
              Choosing our Mercedes Service Centre isn’t just a choice; it’s a
              commitment to peace of mind. We are dedicated to providing a service
              experience that’s characterized by friendliness, transparency, and
            </p>
            <h1 className="text-white text-center">
              professionalism, always placing your needs at the forefront.
            </h1>
          </div>
          <div className="w-3/4 m-auto mt-20">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="rounded-xl">
                  <div className="m-4 flex justify-center items-center h-full">
                    <img src={d.img} alt="" className="border-4" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    }
    

export default cards;
