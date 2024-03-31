import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export default function Headingbar() {
  return (
    <div className="bg-customGray">
      <div className="container w-full text-white items-center justify-center flex md:justify-between h-10">
        <div className="hidden md:block font-poppins text-[13px]">
          The lake sparkled. <span className="text-yellow-500">Birds sang</span>
          . A peaceful escape.
        </div>
        <divs>
          <ul className="flex gap-5">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaBehance />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </divs>
      </div>
    </div>
  );
}
