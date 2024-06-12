import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Swal from 'sweetalert2'
const Banner = () => {

    const [carousels, setCarousels] = useState([]);
    useEffect(() => {
        fetch('banner.json')
            .then(res => res.json())
            .then(data => {
                setCarousels(data);
            })
    }, [])

    const handleButton = () => {
        Swal.fire({
            title: "All data here!",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    return (
        <Carousel showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={5000}
        >
            {
                carousels.map((slide, index) => <div key={index} className="relative">
                    <img src={slide.image} className="w-full h-auto object-cover" alt={`Slide ${index + 1}`} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="text-center text-white px-4">
                            <h1 className="text-3xl font-bold">{slide.title}</h1>
                            <p className="mt-2">{slide.description}</p>
                            <button onClick={handleButton} className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">Read More</button>
                        </div>
                    </div>
                </div>)
            }
        </Carousel>
    );
};

export default Banner;
