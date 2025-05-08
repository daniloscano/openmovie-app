import './sliderCard.css'
import {useState} from "react";
import {Star} from "lucide-react";

const SliderCard = ({item}) => {
    const [isHover, setIsHover] = useState(false)

    const hoverHandler = () => {
        setIsHover(prev => (!prev))
    }

    const {title, name, backdrop_path: backdrop, overview, release_date, first_air_date, vote_average} = item;

    const cardTitle = title || name;
    const cardYear = (release_date || first_air_date).split('-')[0];

    return (
        <>
            <div
                onMouseOver={hoverHandler}
                onMouseOut={hoverHandler}
                className={`rounded rounded-2 slider-card ${isHover ? 'hovered' : ''}`}
            >
                <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/original${backdrop}`}
                    alt={cardTitle}
                />
                <div className="card-title p-2">
                    <h4>{cardTitle}</h4>
                </div>
                <div className="d-flex flex-column justify-content-end gap-2 card-details p-2">
                    <small className="trucate-3-line">{overview}</small>
                    <div className="d-flex justify-content-between align-items-center pt-2">
                        <small>
                            <Star
                                className="pb-1"
                                fill="#FFF"
                                size={16}
                            />
                            {Number(vote_average).toFixed(1).toString()}
                        </small>
                        <small>{cardYear}</small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderCard;