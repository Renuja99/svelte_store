import {error } from '@sveltejs/kit';

export async function load({params}){
    const response = await fetch(`https://dummyjson.com/products/category/${params.collection}`)

    if(response.status ===200){
        const {products} = await response.json()

        if(products){
            return {products}
        }

        throw error(404)
    }else{
        throw error(response.status)
    }

}