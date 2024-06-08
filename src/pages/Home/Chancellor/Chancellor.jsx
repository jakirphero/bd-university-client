import { Link } from "react-router-dom";

const Chancellor = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center md:col-span-1">
                    <img src="https://i.ibb.co/PhCPXbM/ff.jpg" className=" w-60 rounded-lg shadow-2xl" alt="" />
                    <h2 className="mb-2">Dr.jakir hossain</h2>
                    <Link className="text-xl font-bold text-primary">Vice Chancellor</Link>
                </div>
                <div className="bg-white p-4 py-5 rounded shadow flex flex-col items-start justify-start md:col-span-2">
                    <h2 className="text-xl font-bold mb-2">Manege from the vice Chancellor</h2>
                    <p>To our distinguished researchers, your pioneering contributions stand at the vanguard of our institutional mission. Your groundbreaking discoveries have the potential to transform lives and shape the future of our nation, Bangladesh. I pledge firm support for the enhancement and empowerment of our research ecosystem, ensuring that our institution remains a bastion of innovation and intellectual exploration. To this end, we are committed to mobilizing the necessary resources for research and development from various quarters, including government support, private sector collaboration, and the  enduring commitment of our cherished alumni enduring commitment of our cherished alumni...</p>
                    <Link><button className="btn btn-outline mt-2 text-center">Read More</button></Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co/rkLWdfr/1629097468-Photo-Dr-Muhammad-Samad-4-Copy.jpg" className=" w-60 rounded-lg shadow-2xl" alt="" />
                    <div className="text-center">
                        <h2 className="text-x2 font-bold mb-2 text-gray-800 ">professor Dr.sumon</h2>
                        <Link className="text-xl font-bold text-primary">Pro Vice Chancellor (Administration)</Link>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co/fd8TspB/1706175623pro-vc-aca.jpg" className=" w-60 rounded-lg shadow-2xl" alt="" />
                    <div className="text-center">
                        <h2 className="text-x2 font-bold mb-2 text-gray-800 ">Professor Dr.kamal</h2>
                        <Link className="text-xl font-bold text-primary">Pro Vice Chancellor (Academic)</Link>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co/nCykYkL/Momtaj.jpg" className=" w-60 rounded-lg shadow-2xl" alt="" />
                    <div className="text-center">
                        <h2 className="text-x2 font-bold mb-2 text-gray-800 ">jakir hossain jk</h2>
                        <Link className="text-xl font-bold text-primary">Treasurer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chancellor;