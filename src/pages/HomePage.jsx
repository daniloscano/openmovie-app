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
                    title={'Trendings'}
                    items={items}
                />

                <SliderSection
                    title={'Action'}
                    items={items}
                />
            </BaseLayout>
        </>
    );
};

export default HomePage;