import BaseLayout from "../layouts/BaseLayout.jsx";
import CarouselSection from "../components/carouselSection/CarouselSection.jsx";
import {ItemsContext} from "../contexts/ItemsContext.jsx";
import {useContext, useEffect} from "react";

const HomePage = () => {
    const { items, getTrendings } = useContext(ItemsContext)

    useEffect(() => {
        getTrendings();
    }, []);

    return (
        <>
            <BaseLayout>
                <CarouselSection
                    title={'Weekly Trendings'}
                    items={items}
                />

                <CarouselSection
                    title={'Second Trendings'}
                    items={items}
                />
            </BaseLayout>
        </>
    );
};

export default HomePage;