import axios from 'axios'

export const getProduct = () =>{
    return axios.get('http://127.0.0.1:8000/products/')
    .then (response=>response.data)
}

export const getCategory = () =>{
    return axios.get('http://127.0.0.1:8000/categories/')
    .then(response=>response.data)

}