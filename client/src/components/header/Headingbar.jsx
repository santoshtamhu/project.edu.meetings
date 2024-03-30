import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export default function Headingbar() {
  return (
    <div className="bg-customGray">
      <div className="container text-white items-center flex justify-between h-10">
        <div className="font-poppins text-[13px]">
          The lake sparkled. <span className="text-yellow-500">Birds sang</span>
          . A peaceful escape.
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
