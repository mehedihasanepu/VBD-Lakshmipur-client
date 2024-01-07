import Banner from "../Banner/Banner";
import BestProjects from "../BestProjects/BestProjects";
import WhoWeAre from "../WhoWeAre/WhoWeAre";


const Home = () => {
    return (
        <div >
            <div className="">
                <Banner></Banner>
                <WhoWeAre></WhoWeAre> 
                <BestProjects></BestProjects>
                
            </div>
        </div>
    );
};

export default Home;