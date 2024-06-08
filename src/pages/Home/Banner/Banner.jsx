import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Untitled design (1).png'
import img2 from '../../../assets/Untitled design (2).png'
import img3 from '../../../assets/Untitled design (3).png'
import img4 from '../../../assets/Untitled design (4).png'
import img5 from '../../../assets/Untitled design.png'



const Banner = () => {
    return (
        <Carousel showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={5000}
        >
            <div className="">
                <img src={img1} className="w-full h-auto bg-no-repeat" />
            </div>
            <div className="">
                <img src={img2} className="w-full h-auto bg-no-repeat" />
            </div>
            <div className="">
                <img src={img3} className="w-full h-auto bg-no-repeat" />
            </div>
            <div className="">
                <img src={img4} className="w-full h-auto bg-no-repeat" />
            </div>
            <div className="">
                <img src={img5} className="w-full h-auto bg-no-repeat" />
            </div>
        </Carousel>
    );
};

export default Banner;
