import { Link } from "react-router-dom";

const NotisHomeCard = ({ items }) => {
    const {name, id, details} = items;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}...</p>
                <div className="card-actions justify-end">
                    <Link to='/notices'><button className="btn btn-outline">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotisHomeCard;