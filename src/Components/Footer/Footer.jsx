import { Link } from "react-router-dom"
import img from "../../../public/logo.png"
import icon1 from "../../assets/footerIcons/facebook-64.png"
import icon2 from "../../assets/footerIcons/instagram-64.png"
import icon3 from "../../assets/footerIcons/linkedin-64.png"
import icon4 from "../../assets/footerIcons/twitter-64.png"
const Footer = () => {
    return (
        <div className="bg-black p-20 grid grid-cols-2">
            <div>
                <div className="flex items-center">
                    <img className="invert" src={img} alt="" />
                    <h2 className="text-3xl font-bold">Logo</h2>
                </div>
                <div className="grid grid-cols-4 w-2/4 py-5">
                    <Link to="/"> <img className="w-10" src={icon1} alt="" /></Link>
                    <Link to="/"><img className="w-10" src={icon2} alt="" /></Link>
                    <Link to="/"><img className="w-10" src={icon3} alt="" /></Link>
                    <Link to="/"><img className="w-10" src={icon4} alt="" /></Link>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-3xl">Contract</h2>
                    <div className="py-3">
                        <h3>How it works</h3>
                        <h3>Our mission</h3>
                        <h3>Your impact</h3>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl">Small Change Big Change</h2>
                    <p className="font-small">@copyRight from Logo</p>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis aliquid ex aut dolores inventore, laudantium in mollitia commodi vitae non minima ea,  doloribus facere reiciendis numquam!</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;