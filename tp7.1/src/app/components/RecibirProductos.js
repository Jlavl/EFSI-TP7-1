"use client";
import axios from "axios";

export async function conseguirProductos() {
var response = await axios.get('//dummyjson.com/products');
console.log(response.data.products);
response = response.json;
console.log(response);
return response;
}

conseguirProductos(); 

// funcion para categorizar



// funcion para