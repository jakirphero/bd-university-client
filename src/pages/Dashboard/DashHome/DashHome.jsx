import img from '../../../assets/logo.png';

const DashHome = () => {
    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content">
                <div>
                    <img src={img} className='md:w-60 mx-auto' alt="" />
                </div>
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Welcome Your Dashboard!</h1>
                </div>
            </div>
        </div>
    );
};

export default DashHome;