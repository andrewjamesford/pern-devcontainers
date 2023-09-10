const api = {
    getProducts: async () =>
        await fetch(`${import.meta.env.VITE_API_URL}/product`),
    getCategories: async () =>
        await fetch(`${import.meta.env.VITE_API_URL}/category`),
};

export const getProducts = async () => {
    try {

        const response = await api.getProducts();
        const results = await response.json();

        return results.products;

    } catch (error) {
        throw Error(error);
    }
}

export const getCategories = async () => {
    try {
        const response = await api.getCategories();
        const results = await response.json();

        return results.categories;

    } catch (error) {
        throw Error(error);
    }
}