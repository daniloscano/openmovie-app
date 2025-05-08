import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import SliderCard from "./partials/SliderCard.jsx";
import 'swiper/css';
import 'swiper/css/navigation';

const SliderSection = ({title, items}) => {

    return (
        <>
            <section>
                <div className="container-fluid p-4 pb-5">
                    <h2 className="my-4">
                        {title}
                    </h2>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                    >
                        {
                            items.map((item, index) => (
                                <>
                                    <SwiperSlide
                                        key={`slide-${title}-${index}`}
                                    >
                                        <SliderCard item={item} />
                                    </SwiperSlide>
                                </>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default SliderSection;