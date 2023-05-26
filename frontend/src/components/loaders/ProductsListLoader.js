import {fetchISR} from "../../utils/fetchISR";

export async function productsListLoader() {
    let products = await fetchISR("/products/all/", "GET", {});

    return products
}
