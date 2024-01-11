
const PageBanner = ({ title, description, img }) => {
    return (
        <div className="lg:h-[500px] h-[350px] relative">
            <div className="relative">
                <img src={img} alt="" className="w-full lg:h-[500px] h-[350px]" />
                <div className="lg:top-20 lg:left-20 left-10 top-10 absolute z-10">
                    <h2 className="  lg:text-5xl text-3xl font-bold z-10 text-primary">
                        {title}
                    </h2>
                    <p className="text-white mt-4 font-semibold lg:w-1/2 pr-5  text-justify text-lg">
                        {description}
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
    );
};

export default PageBanner;


