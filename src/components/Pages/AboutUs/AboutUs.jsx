import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-bgGreen md:min-h-screen">
      <NavBar />
      <h2 className="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        About Us
      </h2>
      <div className="md:container">
        <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center md:mt-10 md:flex-row md:items-start md:gap-10 md:pb-10">
          <div className="container mt-5 px-4">
            <p className="text-justify text-[18px] leading-8 font-bold text-[#001F3F] md:text-left md:text-[20px] md:leading-9 lg:text-[22px] lg:leading-[2rem]">
              <span className="text-[28px] font-extrabold text-[#0057B8] md:text-[32px] lg:text-[36px]">
                Welcome
              </span>
              <br />
              Welcome to our veterinary clinic, where your pet’s health and well-being are the top priorities. 
              With dedicated and compassionate care, our experienced veterinarian provides a comprehensive 
              range of services — from routine check-ups and vaccinations to diagnostic evaluations and 
              surgical procedures.
              <br /><br />
              Every pet is treated with the highest level of care and attention, ensuring they receive 
              exceptional treatment tailored to their unique needs. We believe in building a <strong>strong bond of trust</strong> 
              with both pets and their owners, ensuring that every visit feels comfortable and supportive for everyone.
            </p>
          </div>
          <div className="container w-full px-4">
            <img
              src="/assets/about-us/dog.jpg"
              alt="dog"
              className="rounded-md opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
