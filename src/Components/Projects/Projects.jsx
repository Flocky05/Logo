import img1 from "../../assets/images/project-img1.png"
import img2 from "../../assets/images/project-img2.png"
import img3 from "../../assets/images/project-img3.png"
const Projects = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center p-6 py-10">This is Project Section</h2>
            <div className="grid grid-cols-3 gap-5">
                <div className="p-8  hover:transform hover:skew-y-12 duration-700">
                    <img src={img1} alt="" />
                </div>
                <div className="p-8 hover:p-0 duration-700">
                    <img src={img2} alt="" />
                </div>
                <div className="p-8 hover:transform hover:-skew-y-12 duration-700">
                    <img src={img3} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Projects;