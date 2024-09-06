import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin, faEnvelope);

export const About = () => {
  return (
    <div>
      <div className="about-info flex flex-col justify-center">
        <div className="about-info-details">
          <h2 className="text-darkmode-accent font-bold font-opensans text-center text-[40px] ">
            About me
          </h2>
          <p className="text-darkmode-text font-light font-opensans text-center">
            I’m a recent Lighthouse Labs Web Flex Program graduate transitioning
            from Architecture to tech. Passionate about using the latest
            technologies to bring ideas to life, I’m dedicated to delivering
            high-quality software with meticulous attention to detail. Eager to
            continuously learn and improve, I thrive on new challenges and
            opportunities to enhance my skills as a developer.
          </p>
          <div className="flex flex-row justify-between items-center py-3">
            <button className="border-[1px] rounded-lg p-1">
              <span className="text-darkmode-text">Resume</span>
            </button>
            <FontAwesomeIcon
              className="text-4xl"
              icon={faGithub}
              style={{ color: "#FFFFFF" }}
            />
            <FontAwesomeIcon
              className="text-4xl"
              icon={faLinkedin}
              style={{ color: "#FFFFFF" }}
            />
            <FontAwesomeIcon
              className="text-4xl"
              icon={faEnvelope}
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </div>
        <div className="about-info-imgs flex flex-col gap-y-5 items-center pt-5">
          <img
            className="w-56 border-2 border-darkmode-secondary rounded-3xl"
            src="/about/coding-buddy.png"
            alt="bobby coding"
          />
          <img
            className="border-2 border-darkmode-secondary rounded-3xl"
            src="/about/jose-coding.png"
            alt="jose coding during bootcamp"
          />
          <img
            className="w-56 border-2 border-darkmode-secondary rounded-3xl"
            src="/about/coding-cafe.png"
            alt="coding at a bubble tea place"
          />
        </div>
      </div>
    </div>
  );
};
