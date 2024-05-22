import { useState } from "react";
import "./Card.css"

function Card({ id, image, info, name, price, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore
        ? `${info}...`
        : `${info.substring(0, 200)}....`;

    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} alt="" className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? "Show Less" : "Read More"}
                    </span>
                </div>
            </div>
            <button className="btn-not-interested" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
