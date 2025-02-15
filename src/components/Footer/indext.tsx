import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="bg-gray-800 relative z-50">
        <section className="max-w-[1200px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-3xl sm:text-left text-justify mb-3">
                Be ready to Grow
              </h1>
              <p>
                Get Exclusive
                <span className="font-bold">Update</span>
                straigt to your inbox.
              </p>
              <br />
              <div className="flex items-center h-10">
                <input
                  type="email"
                  className="py-1 px-3 w-full h-[100%] inline-block bg-gray-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 border-gray-200 border-2"
                />
                <button className="primary-button h-full">OK</button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Login</a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Login</a>
                  </li>
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
                <div className="space-y-3">
                  <div className="flex  items-center gap-2">
                    <HiLocationMarker />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                  <div className="flex  items-center gap-2">
                    <MdMessage />
                    <p>abc@gmail.com</p>
                  </div>
                  <div className="flex  items-center gap-2">
                    <MdCall />
                    <p>+55 9382-23023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">
              @copyright 2024 Travery || Dilshad
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaMeta className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
