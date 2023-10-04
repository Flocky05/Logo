import img from "../../assets/images/meter1.svg"
import img2 from "../../assets/images/meter2.svg"
import img3 from "../../assets/images/meter3.svg"

const Skills = () => {
    return (
        <div>
            <div className="bg-blue-900 p-20 rounded-3xl m-10">
                <h3 className="text-center text-3xl font-bold p-3">Skills</h3>
                <p className="text-center py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro culpa minima exercitationem delectus nesciunt, dolorem amet possimus officiis, eligendi deleniti perferendis, cupiditate qui harum quasi? Vel, magnam. Harum nostrum consequatur quae blanditiis velit reiciendis deleniti reprehenderit, et modi perferendis. Quam voluptate eligendi hic itaque officiis fuga cumque molestias nam. Consequuntur.</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center">
                    <div className="flex flex-col  items-center">
                        <img className="w-20 lg:w-36" src={img} alt="" />
                        <p>Web Development </p>
                    </div>
                    <div className="flex flex-col  items-center">
                        <img className="w-20 lg:w-36" src={img2} alt="" />
                        <p>Brand Identity </p>
                    </div>
                    <div className="flex flex-col  items-center">
                        <img className="w-20 lg:w-36" src={img3} alt="" />
                        <p>Logo Design </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;