import PokeApi from "@/API/pokemonApi";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPokemons = () => {
    let pokemons = [];
    for (let index = 0; index < 4; index++) {
        let pokid = 0;
        do {
            pokid = getRandomInt(1, 650);
        } while (pokemons.includes(pokid));
        pokemons.push(pokid);
    }
    return pokemons;
};

const getPokemonNames = async ([ a, b, c, d ] = []) => {
    const priomiseArr = [
        PokeApi.get(`${a}`),
        PokeApi.get(`${b}`),
        PokeApi.get(`${c}`),
        PokeApi.get(`${d}`),
    ];

    const [ p1, p2, p3, p4 ] = await Promise.all(priomiseArr);
    return [
        { id: p1.data.id, name: p1.data.name },
        { id: p2.data.id, name: p2.data.name },
        { id: p3.data.id, name: p3.data.name },
        { id: p4.data.id, name: p4.data.name },
    ];
};

const getPokemonOptions = async () => {
    const RandomsPokemons = getPokemons();
    const pokemons = await getPokemonNames(RandomsPokemons);
    // console.table(pokemons);
    return pokemons
};

export default getPokemonOptions;
