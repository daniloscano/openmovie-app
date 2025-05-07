import BaseLayout from "../layouts/BaseLayout.jsx";
import SliderSection from "../components/sliderSection/SliderSection.jsx";
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
                <SliderSection
                    title={'Weekly Trendings'}
                    items={items}
                />

                <SliderSection
                    title={'Second Trendings'}
                    items={items}
                />
            </BaseLayout>
        </>
    );
};

export default HomePage;