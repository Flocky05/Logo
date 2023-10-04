import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-violet-950 text-xl p-4 px-10 shadow-lg">
            <Link className="hover:text-fuchsia-500" to="/">Logo</Link>
            <div className="grid grid-cols-4 items-center gap-10">
                <Link className="hover:text-fuchsia-500" to="/">Home</Link>
                <Link className="hover:text-fuchsia-500" to="/skills">Skills</Link>
                <Link className="hover:text-fuchsia-500" to="/projects">Projects</Link>
                <Link className="hover:text-fuchsia-500" to="/"><button className="border-2 px-4 py-1 rounded-lg">More</button></Link>
            </div>
        </div>
    );
};

export default Navbar;