import {fetchISR} from "../../utils/fetchISR";

export async function productsListLoader() {
    let products = await fetchISR("/products/all/", "POST", {
        "orderby":"fast_code",
        "ascdesc":"DESC"
    });

    return products
}
