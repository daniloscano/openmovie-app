import {Card} from "primereact/card";
import {useState} from "react";

const CarouselCard = ({item}) => {
    const [isHover, setIsHover] = useState(false)

    const toggleHover = () => {
        setIsHover(prevState => !prevState)
    }

    const cardImage = isHover
        ? `https://image.tmdb.org/t/p/w780/${item.backdrop_path}`
        : `https://image.tmdb.org/t/p/w185/${item.poster_path}`

    return (
        <>
            <div className={`carousel-card ${ isHover ? 'hovered' : '' }`}>

                <Card
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    <div className="p-card-content">
                        <img

                            src={cardImage}
                            alt={item.title}
                        />
                    </div>
                </Card>
            </div>
        </>
    );
};

export default CarouselCard;