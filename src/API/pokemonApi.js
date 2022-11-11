import axios from "axios";

const endPoint = `https://pokeapi.co/api/v2/pokemon/`;
const PokeApi = axios.create({
    baseURL: `${endPoint}`,
})

export default PokeApi;
