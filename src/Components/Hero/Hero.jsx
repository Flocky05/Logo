import img1 from "../../assets/images/banner-bg.png"
import img2 from "../../assets/images/header-img.svg"


const Hero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-20 bg-cover" style={{ backgroundImage:`url(${img1})` }}>
           <div>
                <button className="px-6 p-2 text-center text-lg border-2 my-2">Learn More </button>
                <h3 className="text-4xl font-bold text-pink-500 my-2">Let`s Do with Us</h3>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam molestias, obcaecati sit commodi deserunt vero numquam ducimus! Amet, rem temporibus fugit autem cupiditate accusamus quos unde repellendus, quia libero reprehenderit quas. Ab ullam quas consequuntur porro illo, quia quo?</p>
                <a href="/">Let`s Connect</a>
           </div>
           <div>
                <img className="p-8" src={img2} alt="" />
           </div>
        </div>
    );
};

export default Hero;