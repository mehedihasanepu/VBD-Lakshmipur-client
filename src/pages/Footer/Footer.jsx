
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import wave from "../../assets/image/wave.png";
const Footer = () => {
    return (
        <div className="relative">
            <img src={wave} alt="" className="w-full " />
            <footer className="-mt-1 footer p-10 bg-[#161616] text-green-600 font-semibold">
                <div>
                    <span className="text-primary uppercase text-xl">Services</span>
                    <Link className="link link-hover" to="#">
                        Branding
                    </Link>
                    <Link className="link link-hover" to="#">
                        Design
                    </Link>
                    <Link className="link link-hover" to="#">
                        Marketing
                    </Link>
                    <Link className="link link-hover" to="#">
                        Advertisement
                    </Link>
                </div>
                <div>
                    <span className="text-primary uppercase text-xl">Terms</span>
                    <Link className="link link-hover" to="#">
                        Branding
                    </Link>
                    <Link className="link link-hover" to="#">
                        Design
                    </Link>
                    <Link className="link link-hover" to="#">
                        Marketing
                    </Link>
                    <Link className="link link-hover" to="#">
                        Advertisement
                    </Link>
                </div>
                <div>
                    <span className="text-primary uppercase text-xl">Company</span>
                    <Link className="link link-hover" to="#">
                        Branding
                    </Link>
                    <Link className="link link-hover" to="#">
                        Design
                    </Link>
                    <Link className="link link-hover" to="#">
                        Marketing
                    </Link>
                    <Link className="link link-hover" to="#">
                        Advertisement
                    </Link>
                </div>
                <div>
                    <span className="text-primary uppercase text-xl">Dev. info</span>
                    <Link
                        target="_blank"
                        className="link link-hover"
                        to="https://github.com/AbuRaihan1"
                    >
                        Github
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://linkedin.com/in/aburaihan019"
                        target="_blank"
                    >
                        Linkedin
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://facebook.com/aburaihan019"
                        target="_blank"
                    >
                        Facebook
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://instagram.com/aburaihan019"
                        target="_blank"
                    >
                        Instagram
                    </Link>
                </div>
            </footer>
            <div className="px-10 py-4 bg-[#161616] flex items-center justify-between">
                <div>
                    <span className="font-bold text-2xl text-white">VBD</span> <br />
                    <span className="font-bold text-xl text-white">Gazipur District</span>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="https://www.facebook.com/groups/241233189259725"
                        target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-primary text-black duration-200 p-3"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-primary text-black duration-200 p-3"
                    >
                        <AiFillYoutube />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-primary text-black duration-200 p-3"
                    >
                        <AiFillInstagram />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-primary text-black duration-200 p-3"
                    >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
