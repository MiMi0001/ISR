import {fetchISR} from "../../utils/fetchISR";
import axios from "axios";

export async function productsListLoader() {

    let response = await fetchISR("/products/all/", "GET", {});


    return response
}
