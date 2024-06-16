import { MOCK_GET_PRODUCT_DATA } from "../mock/product";

export const getProducts = () => {
    if (import.meta.env.VITE_IS_MOCK) {
        return MOCK_GET_PRODUCT_DATA();
    } else {
        return;
    }
};
