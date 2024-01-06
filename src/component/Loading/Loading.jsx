import Lottie from "lottie-react";
import loadingIcon from "../../assets/icon/loading.json";

const Loading = () => {
    return (
        <div className="relative">
            <div className="flex absolute items-center justify-center top-40 left-96  z-50">
                <div className="w-[500px]">
                    <Lottie animationData={loadingIcon} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Loading;







