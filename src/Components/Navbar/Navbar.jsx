import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-fuchsia-900 text-2xl p-4 px-10">
            <Link to="/">Logo</Link>
            <div className="grid grid-cols-3 gap-10">
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    );
};

export default Navbar;