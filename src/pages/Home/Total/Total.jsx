import { FaHome, FaSchool } from "react-icons/fa";
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import './Total.css'
import { FaUserGroup } from "react-icons/fa6";

const Total = () => {
    return (
        <section>
            <SectionTitle heading={'university of BD numbers'}></SectionTitle>
            <div className="totalNumber text-white opacity-50 bg-fixed py-10 my-16">
                <div className='bg-black opacity-70 px-36 py-20 grid md:grid-cols-4'>
                    <div>
                        <FaHome className="text-4xl text-red-700"></FaHome>
                        <h3 className='text-2xl font-bold'>1921</h3>
                        <p className="text-xl font-bold capitalize">founded</p>
                    </div>
                    <div>
                        <FaUserGroup className="text-4xl text-red-700"></FaUserGroup>
                        <h3 className='text-2xl font-bold'>2020+</h3>
                        <p className="text-xl font-bold capitalize">Regular Students</p>
                    </div>
                    <div>
                        < FaUserGroup className="text-4xl text-red-700"></FaUserGroup>
                        <h3 className='text-2xl font-bold'>2000+</h3>
                        <p className="text-xl font-bold capitalize">Faculty Members</p>
                    </div>
                    <div>
                        <FaSchool className="text-4xl text-red-700"></FaSchool>
                        <h3 className='text-2xl font-bold'>190</h3>
                        <p className="text-xl font-bold capitalize">Constituent & Affiliated Colleges</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Total;