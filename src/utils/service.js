import API, { headers } from './api';
const GET_ALL_PRODUCTS = '/products';


//Get ALl Products
export const getAllProducts = async () => {
    try {
        const response = await API.get(GET_ALL_PRODUCTS, headers);
        return response;
    } catch (error) {
        console.log(error)
    }
}
