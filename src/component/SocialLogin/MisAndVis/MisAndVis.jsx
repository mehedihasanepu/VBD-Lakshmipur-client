/* eslint-disable react/no-unescaped-entities */

const MisAndVis = () => {
    return (
        <div>
            <div className="container mx-auto px-5" data-aos="fade-up">
                <div className="text-center lg:text-5xl text-3xl font-bold text-[#134d22] mb-5">
                    <h2>Mission & Vission</h2>
                </div>
                <div className="grid lg:grid-cols-2 mb-20 mt-10 gap-7">
                    <div className="rounded-2xl shadow-2xl p-5  border border-card">
                        <h2 className="text-[#134d22] font-bold lg:text-3xl text-2xl mb-3">
                            Our Mission
                        </h2>
                        <p className="text-justify font-semibold text-[#747272]">
                            Developing an interdependent Bangladesh through volunteerism to
                            achieve the nation’s highest potential highlights the importance of
                            volunteerism in building a strong and resilient society, fostering
                            interdependence, empowering citizens to take ownership of their own
                            development and ultimately achieving the country's full potential.
                        </p>
                    </div>

                    <div className="rounded-2xl shadow-2xl p-5 border border-card">
                        <h2 className="text-[#134d22] font-bold lg:text-3xl text-2xl mb-3 lg:text-right">
                            Our Vission
                        </h2>
                        <p className="text-justify font-semibold text-[#747272]">
                            Empowering and facilitating volunteerism to develop the nation by
                            reallocating skills and resources to foster self-reliance and growth
                            within every youth Bangladesh" emphasizes the importance of
                            volunteerism in the development of a nation by empowering
                            individuals and communities, making it easy for them to volunteer,
                            reallocating resources effectively, fostering self-reliance, and
                            promoting growth and development among the youth of Bangladesh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisAndVis;