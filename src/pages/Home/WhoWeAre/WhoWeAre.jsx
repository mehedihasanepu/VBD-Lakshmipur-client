/* eslint-disable react/no-unescaped-entities */
import  { useEffect } from "react";
import aboutImg from "../../../assets/image/banner-img2.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <div>
            <div
                className=" overflow-x-hidden container mx-auto my-12 bg-[#134d22]  rounded-3xl shadow-2xl"
               
            >
                <div className="flex flex-col lg:flex-row justify-center items-center p-5 lg:p-10 gap-6">
                    <div data-aos="zoom-in-up" className="flex-1">
                        <img src={aboutImg} alt="about_img" className="rounded-2xl h-[450px] mx-auto" />
                    </div>
                    <div data-aos="zoom-in-up" className="flex-1">
                        <h2 className="lg:text-5xl text-3xl text-[#fbc807] font-bold mb-5">
                            Who we are?
                        </h2>
                        <p className="mb-4 text-justify text-[#CCCCCC] font-semibold text-[14px]">
                            JAAGO Foundation has been the pioneer in providing the youth a
                            voice and a platform through its Youth Wing “Volunteer for
                            Bangladesh”. In 2011 with the support of U.S. Embassy by
                            empowering youths and facilitating volunteerism in Bangladesh
                        </p>

                        <p className="text-justify text-[#d8d5d5] font-semibold text-[18px]">
                            "Volunteer for Bangladesh" is a dynamic nonprofit established in
                            2011, dedicated to catalyzing positive change through
                            volunteerism. Focused on education, healthcare, and sustainable
                            development, the organization empowers communities and creates a
                            brighter future by harnessing the energy of volunteers.
                        </p>
                        <Link to="/about">
                            <button className="btn bg-[#fbc807] rounded-3xl text-[#134d22] font-bold text-lg mt-8 ">See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
