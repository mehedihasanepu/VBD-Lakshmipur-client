import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import bannerImg1 from "../../../assets/image/banner-img1.jpg";
import bannerImg2 from "../../../assets/image/banner-img2.jpg";
import bannerImg3 from "../../../assets/image/banner-img3.jpg";
import bannerImg4 from "../../../assets/image/banner-img4.jpg";
import bannerImg5 from "../../../assets/image/banner-img5.jpg";
import bannerImg6 from "../../../assets/image/banner-img6.jpg";
import bannerImg7 from "../../../assets/image/banner-img7.jpg";

import { Autoplay, Navigation } from "swiper/modules";

function VolunteerForBangladeshBanner() {
    const settings = {
        modules: [Navigation, Autoplay],
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    };

    const bannerImages = [
        bannerImg1,
        bannerImg2,
        bannerImg3,
        bannerImg4,
        bannerImg5,
        bannerImg6,
        bannerImg7,
    ];

    const slideContents = [
        {
            h2: 'Volunteer',
            h1: 'Empowerment',
            p: 'Engaging youth in meaningful volunteer work to create a positive and lasting impact on society. Together, we strive to build a better future for all.',
        },
        {
            h2: 'Community',
            h1: 'Development',
            p: 'Join hands with us in developing communities by fostering collaboration, inclusivity, and sustainable growth. Together, we build stronger and brighter communities for generations to come.',
        },
        {
            h2: 'Environmental',
            h1: 'Conservation',
            p: 'Our commitment to environmental conservation spans generations, preserving nature’s beauty and resources for our children and grandchildren. Let’s protect our planet together.',
        },
        {
            h2: 'Disaster',
            h1: 'Response',
            p: 'During times of crisis, we stand united in providing immediate aid and long-term support to communities affected by disasters. Together, we help rebuild and restore hope.',
        },
        {
            h2: 'Education',
            h1: 'Initiatives',
            p: 'Education is the key to empowerment. Join us in our initiatives to provide quality education, unlock potential, and create opportunities for brighter futures.',
        },
        {
            h2: 'Healthcare',
            h1: 'Missions',
            p: 'Ensuring access to healthcare is fundamental. We work towards this goal, ensuring everyone has the right to good health and well-being.',
        },
        {
            h2: 'Youth',
            h1: 'Leadership',
            p: 'Empowering the leaders of tomorrow through mentorship, skill-building, and opportunities. Join us in shaping a generation of empowered and responsible leaders.',
        },
    ];


    return (
        <div className="relative">
            <Swiper {...settings} className="mySwiper" navigation={true}>
                {bannerImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <img
                                className="h-96 md:h-screen w-screen object-cover"
                                src={image}
                                alt={`Banner ${index + 1}`}
                            />
                            <div className="hero h-full absolute top-0 left-0 bg-black bg-opacity-50 text-white">
                                <div className="hero-continent text-center">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                                        {slideContents[index].h2}
                                    </h2>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-3">
                                        {slideContents[index].h1}
                                    </h1>
                                    <p className="tracking-widest mt-3 max-w-screen-lg">
                                        {slideContents[index].p}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default VolunteerForBangladeshBanner;
