import {Carousel} from "primereact/carousel";
import CarouselCard from "./partials/CarouselCard.jsx";
import './carouselSection.css'


const CarouselSection = ({title, items}) => {

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <>
            <section>
                <div className="container-fluid p-4 pb-5">
                    <h2 className="my-4">
                        {title}
                    </h2>
                    <div className="card">
                        <Carousel
                            value={items}
                            numScroll={1}
                            numVisible={5}
                            responsive={responsiveOptions}
                            itemTemplate={(item) => (
                                <CarouselCard
                                    item={item}
                                />
                            )}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarouselSection;