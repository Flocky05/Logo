
const Navbar = () => {
    return (
        <div className="flex justify-between bg-fuchsia-900 text-2xl p-4 px-10">
            <h2>Logo</h2>
            <div className="grid grid-cols-3 gap-10">
                <h2>Home</h2>
                <h2>Skills</h2>
                <h2>Projects</h2>
            </div>
        </div>
    );
};

export default Navbar;