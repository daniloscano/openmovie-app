import {createContext} from "react";
import {useAllItems} from "../hooks/useAllItems.js";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const { items, page, totalPages, error, isLoading, getTrendings } = useAllItems()


    return (
        <ItemsContext.Provider value={{ items, page, totalPages, error, isLoading, getTrendings }}>
            { children }
        </ItemsContext.Provider>
    )
}