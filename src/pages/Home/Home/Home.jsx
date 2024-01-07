import Banner from "../Banner/Banner";
import BestProjects from "../BestProjects/BestProjects";
import Faq from "../Faq/Faq";
import WhoWeAre from "../WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div >
            <div className="">
                <Banner></Banner>
                <WhoWeAre></WhoWeAre> 
                <BestProjects></BestProjects>
                <Faq></Faq>
                
            </div>
        </div>
    );
};

export default Home;