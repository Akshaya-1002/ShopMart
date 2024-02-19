import axios from "axios"

export async function productsData(){
    const products = await axios.get(
        // "https://fakestoreapi.com/products"
        "https://fakestoreapiserver.reactbd.com/products"

    );
    return products;
}