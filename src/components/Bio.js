import { FaBootstrap } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoNetlify } from "react-icons/bi";
import { RxVercelLogo } from "react-icons/rx";

const Bio = () => {
  return (
    <div className="container bg-dark w-screen h-[60vh] grid grid-cols-[40%_auto] gap-4">
      <div className="left w-full h-full   overflow-hidden flex justify-center items-center">
        <div className="h-[20rem ] w-[20rem] overflow-hidden">
          <img
            className="h-full w-full rounded-2xl border-4 border-light shadow-lg"
            src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1675854663/portfolio/3-removebg-preview_qxlva5.png"
          />
        </div>
      </div>
      <div className="right w-[95%] h-full  flex justify bg-center items-center">
        <div className="intro h-[20rem] w-full flex gap-5">
          <div className="shape h-[8rem] w-2 bg-light rounded-2xl"></div>

          <div className="self text-white">
            <h2 className=" text-6xl font-[500] tracking-wider font-poppins">
              Sadril Amin Shuvo
            </h2>
            <h4 className="text-3xl py-3 text-lighter font-[400] tracking-wider font-lato">
              | React Js Developer
            </h4>
            {/* Tech part */}
            <div className="tech w-full h-full mt-8">
              <ul className="flex gap-4 text-light">
                <li>
                  <FaBootstrap size={40} />
                </li>
                <li>
                  <BiLogoTailwindCss size={40} />
                </li>
                <li>
                  <FaReact size={40} />
                </li>
                <li>
                  <BiLogoTypescript size={40} />
                </li>
                <li>
                  <AiFillGithub size={40} />
                </li>
                <li>
                  <BiLogoNetlify size={40} />
                </li>
                <li>
                  <RxVercelLogo size={40} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
