import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin, faEnvelope);

export const Contact = () => {
  return (
    <section className="flex flex-col justify-center items center h-screen min-h-screen" id="contact" >
      <h1 className="font-opensans font-bold text-center text-darkmode-light-blue text-3xl pb-10 lg:text-left">
        Lets Connect!
      </h1>
      <div className="links flex flex-col items-center gap-y-5 lg:flex-row lg:justify-between">
        <a href="https://www.linkedin.com/in/joseeduardopayamps/" target="_blank" className="transition ease-in-out delay-150 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="w-48 h-48 bg-darkmode-secondary flex justify-center items-center">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faLinkedin}
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </a>
        <a href="https://github.com/rosario-je/" target="_blank" className="transition ease-in-out delay-150 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="w-48 h-48 bg-darkmode-secondary flex justify-center items-center">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faGithub}
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </a>
        <a href="mailto:jose.payampsrosario@outlook.com" target="_blank" className="transition ease-in-out delay-150 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <div className="w-48 h-48 bg-darkmode-secondary flex justify-center items-center">
            <FontAwesomeIcon
              className="text-4xl"
              icon={faEnvelope}
              style={{ color: "#FFFFFF" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};
