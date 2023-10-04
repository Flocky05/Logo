

const Contract = () => {
    return (
        <div className="grid grid-cols-2 items-center m-8 bg-white p-20 rounded-xl">
            <div className="text-xl font-bold text-black">
                <h2>Subscribe to our </h2>
                <h2>newsletter</h2>
                <h2> & Never miss latest </h2>
                <h2>updates</h2>
            </div>
            <div className="relative">
                <input type="text" placeholder="Email Address" className="w-full p-2 py-3 border-2 border-pink-800 rounded-lg" />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-9 py-2 rounded-lg absolute -ml-32 mt-1">Submit</button>
            </div>
        </div>
    );
};

export default Contract;