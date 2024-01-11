import contactIMG from "../../assets/image/aboutBg.jpg";
import Swal from "sweetalert2";
import PageBanner from "../../component/PageBanner/PageBanner";

const Contact = () => {
    const title = "Contact Us";
    const description =
        "This is our contact page, you can know about our contact and any other information from here";

    const sendMessage = () => {
        Swal.fire("sorry!", "This button doesn't work yet!", "error");
    };
    return (
        <div>
            <PageBanner img={contactIMG} title={title} description={description} />
            <div className="my-10 text-center">
                <h2 className="lg:text-5xl text-secondary top-10 font-bold text-3xl">
                    Contact us
                </h2>
            </div>

            <div className="container mx-auto py-5 pt-2 lg:px-12 px-5">
                <div className="text-center">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border-2 rounded-md px-2 py-2 outline-secondary w-full"
                        />
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="border-2 rounded-md px-2 py-1 outline-secondary w-full"
                        />
                    </div>
                    <div>
                        <textarea
                            name=""
                            placeholder="Enter Your message here"
                            className="border-2 rounded-md px-2 py-2 outline-secondary w-full mt-5 h-[150px] resize-none"
                        ></textarea>
                        <button
                            onClick={sendMessage}
                            className="secondary-button w-full mt-4"
                        >
                            Send Message
                        </button>
                    </div>

                    <div className="mt-10">
                        <div className="mapouter">
                            <div className="gmap_canvas ">
                                <iframe
                                    title="unique"
                                    className="mapInner w-full h-[400px]"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=k&z=9&ie=UTF8&iwloc=&output=embed"
                                ></iframe>
                                <a href="https://www.embedgooglemap.net"> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
