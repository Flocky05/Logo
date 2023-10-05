import img1 from "../../assets/images/contact-img.svg"

const GetInTouch = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-32 bg-gradient-to-r from-purple-500 to-pink-500">
            <div>
                <img className="p-4" src={img1} alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold py-6">Get In Touch</h2>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <input type="text" placeholder="Frist Name" className="border-2 rounded-lg p-3 bg-white text-black" />
                    <input type="text" placeholder="Last Name" className="border-2 rounded-lg p-3 bg-white text-black" />
                    <input type="text" placeholder="Email" className="border-2 rounded-lg p-3 bg-white text-black " />
                    <input type="text" placeholder="Phone Number" className="border-2 rounded-lg p-3 bg-white text-black" />
                </div>
                <textarea rows="10" placeholder="Message" className="rounded-lg p-4 bg-white w-full text-black"></textarea>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-orange-600 mt-3">Submite</button>
            </div>
        </div>
    );
};

export default GetInTouch;