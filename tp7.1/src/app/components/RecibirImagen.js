"use client";
import axios from "axios";

export async function conseguirProductos() {
var response = await axios.get('https://dummyjson.com/products');
response = response.json;
console.log(response);
return response;
}