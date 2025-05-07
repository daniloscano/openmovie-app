const SliderCard = ({ item }) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center rounded rounded-2 overflow-hidden">
                <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt={item.title}
                />
            </div>
        </>
    );
};

export default SliderCard;