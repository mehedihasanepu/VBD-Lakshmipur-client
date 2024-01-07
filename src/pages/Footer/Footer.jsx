
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="relative mt-16">
            <footer className="-mt-1 footer p-10 bg-[#161616] text-green-600 font-semibold">
                <div>
                    <span className="text-[#fbc807] uppercase text-xl">Services</span>
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
                    <span className="text-[#fbc807] uppercase text-xl">Terms</span>
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
                    <span className="text-[#fbc807] uppercase text-xl">Company</span>
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
                    <span className="text-[#fbc807] uppercase text-xl">Dev. info</span>
                    <Link
                        className="link link-hover"
                        to="https://mehedi-hasan-epu.netlify.app/"
                        target="_blank"
                    >
                        Portfolio
                    </Link>
                    <Link
                        target="_blank"
                        className="link link-hover"
                        to="https://github.com/mehedihasanepu"
                    >
                        Github
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://www.linkedin.com/in/md-mehedi-hasan-epu"
                        target="_blank"
                    >
                        Linkedin
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://www.facebook.com/mehedihasanepu"
                        target="_blank"
                    >
                        Facebook
                    </Link>
                    <Link
                        className="link link-hover"
                        to="https://www.instagram.com/__mh__epu/"
                        target="_blank"
                    >
                        Instagram
                    </Link>
                    
                </div>
            </footer>
            <div className="px-10 pb-4 bg-[#161616] flex items-center justify-between">
                <div>
                    <span className="font-bold text-2xl text-white">VBD</span> <br />
                    <span className="font-bold text-xl text-white">Lakshmipur District</span>
                </div>

                <div className="flex gap-3">
                    <Link
                        to="https://www.facebook.com/groups/VBDLakshmipur"
                        target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-[#fbc807] text-black duration-200 p-3"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-[#fbc807] text-black duration-200 p-3"
                    >
                        <AiFillYoutube />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-[#fbc807] text-black duration-200 p-3"
                    >
                        <AiFillInstagram />
                    </Link>

                    <Link
                        to="#"
                        // target="_blank"
                        className="hover:bg-secondary rounded-full hover:text-white bg-[#fbc807] text-black duration-200 p-3"
                    >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
