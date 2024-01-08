import aboutBg from "../../assets/image/aboutBg.jpg"
import MisAndVis from "../../component/SocialLogin/MisAndVis/MisAndVis";
import WhoWeAre from "../Home/WhoWeAre/WhoWeAre";
const About = () => {
    return (
        <div>
            <div>
                <img
                    className="h-96 md:h-screen w-screen object-cover"
                    src={aboutBg}
                    alt="Banner"
                />
                <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-70 text-white">
                    <div className="hero-continent text-center">

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-3 text-[#fbc807]" data-aos="fade-left">
                            About Us
                        </h1>
                        <p className="tracking-widest mt-3 max-w-screen-lg" data-aos="fade-left">
                            Volunteer for Bangladesh is a youth wing of JAAGO Foundation, established in 2011 with support of U.S Embassy to Bangladesh. Its goal is to empower young people in Bangladesh to volunteer and develop leadership skills to make positive change in their communities.
                        </p>
                    </div>
                </div>
            </div>
            <WhoWeAre></WhoWeAre>
            <div>
                
                <MisAndVis></MisAndVis>
            </div>
        </div>
    );
};

export default About;