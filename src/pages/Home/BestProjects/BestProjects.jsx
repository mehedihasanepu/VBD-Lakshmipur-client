import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay } from "swiper/modules";


// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import bannerImg1 from "../../../assets/image/banner-img1.jpg";
import bannerImg2 from "../../../assets/image/banner-img2.jpg";
import bannerImg3 from "../../../assets/image/banner-img3.jpg";
import bannerImg4 from "../../../assets/image/banner-img4.jpg";
import bannerImg5 from "../../../assets/image/banner-img5.jpg";
import bannerImg6 from "../../../assets/image/banner-img6.jpg";
import bannerImg7 from "../../../assets/image/banner-img7.jpg";

const BestProjects = () => {
    const bannerImages = [
        bannerImg1,
        bannerImg2,
        bannerImg3,
        bannerImg4,
        bannerImg5,
        bannerImg6,
        bannerImg7,
    ];

    return (
        <div className="mt-16">
            <h2 className="lg:text-5xl text-3xl text-[#134d22] font-bold mb-10 text-center">
                Our Best Projects
            </h2>
            <div className="max-w-screen-sm lg:max-w-screen-lg mx-auto px-10 lg:px-3 ">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-7  lg:gap-28">

                    <div className="col-span-1 lg:col-span-3 px-14 " data-aos="zoom-in-up">

                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            {bannerImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-[#E1FFB1] p-3 md:p-10 rounded-lg">
                                        <div>
                                            <img
                                                className="h-52 md:h-80 w-full object-cover rounded-md"
                                                src={image}
                                                alt={`Banner ${index + 1}`}
                                            />

                                        </div>
                                        <div>
                                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum possimus sapiente excepturi repellendus maiores quas, commodi quidem ratione provident mollitia aut neque iste quam doloribus, odio aliquam distinctio temporibus.</h2>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="col-span-1 lg:col-span-2 " data-aos="zoom-in-up">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus autem dignissimos? Sequi repudiandae, distinctio quam dignissimos non minima aliquam earum qui ipsum nisi! Accusantium aut veniam saepe adipisci nobis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus autem dignissimos? Sequi repudiandae, distinctio quam dignissimos non minima aliquam earum qui ipsum nisi! Accusantium aut veniam saepe adipisci nobis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus autem dignissimos? Sequi repudiandae, distinctio quam dignissimos non minima aliquam earum qui ipsum nisi! Accusantium aut veniam saepe adipisci nobis.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BestProjects;

