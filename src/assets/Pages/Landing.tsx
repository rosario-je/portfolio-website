export const Landing = () => {
  return (
    <div id="home" className="min-h-screen">
      <div className="landing-info flex flex-col-reverse lg:flex-row pb-20 h-screen justify-center gap-y-10 lg:items-center">
        <div className="personal-intro flex flex-col">
          <p className="text-darkmode-text font-opensans font-light text-center lg:text-start">
            Hi, my name is
          </p>
          <h1 className="text-darkmode-text font-semibold lg:text-[64px] text-[32px] font-opensans text-center lg:text-start">
            Jose E. Payamps
          </h1>
          <h2 className="text-darkmode-text font-semibold font-opensans text-center lg:text-start">
            I am a{" "}
            <span className="text-darkmode-accent">Software Developer</span>
          </h2>
          <p className="text-darkmode-text font-light font-opensans pt-[20px] text-center lg:text-start lg:w-9/12">
            I thrive on crafting software solutions from ideation to execution.
            From envisioning innovative concepts to building user-focused
            products, I use the latest technologies to deliver impactful
            solutions that create a better user experience.
          </p>
        </div>
        <div className="head-shot w-full lg:w-9/12">
          <img
            className="px-12 mask mask-hexagon bg-gray-900 "
            src="jose.png"
            alt="jose-headshot"
          />
        </div>
      </div>
    </div>
  );
};
