import product from "../data/store.json";
const TIMEOUT_TIME: number = 3000;

export const MOCK_GET_PRODUCT_DATA = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product);
        }, TIMEOUT_TIME);
    });
};
