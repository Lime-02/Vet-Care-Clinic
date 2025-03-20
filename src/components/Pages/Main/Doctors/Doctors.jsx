import { Link } from "react-router-dom";
import "./Doctors.scss";
import { Carousel } from "antd";
import { useRef } from "react";

const DoctorDetail = () => {
  const carouselRef = useRef();

  return (
    <div className="mt-20 px-4">
      <h2 className="my-6 px-4 text-center text-3xl font-bold text-blackGreen">
        Meet Our Expert Veterinary Doctor
      </h2>
      <div className="relative mx-auto max-w-[750px]">
        <Carousel autoplay effect="fade" className="h-[500px] w-[750px]" ref={carouselRef}>
          <div className="h-[500px] w-[375px] rounded-r-sm bg-secGreen bg-opacity-10">
            <div className="absolute top-0 flex h-[500px] justify-start">
              <img
                src="/assets/logo/logo.png"
                className="h-[500px] w-[375px] rounded-l-sm"
                alt="Doctor"
              />
              <div className="flex w-[375px] flex-col items-center justify-start px-6 py-10">
                <p className="text-2xl font-bold text-blackGreen">Dr. Sachin Venkataravanappa</p>
                <div className="my-2 h-[3px] w-36 rounded-sm bg-secGreen" />
                <p className="text-md">
                  Experience: <span className="font-bold">5</span> yrs.
                </p>
                {/* <p className="mt-5 text-center">{doctor.description}</p> */}
                <p>Email: pawsomeveterinarycare@gmail.com</p>
                {/* <Link to={`/doctors/${doctor.link}`} className="mt-4 underline">
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DoctorDetail;
