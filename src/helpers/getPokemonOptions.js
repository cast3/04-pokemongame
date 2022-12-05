import PokeApi from "@/api/pokemonApi";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getPokemons = () => {
    let pokemons = [];
    for (let index = 0; index < 4; index++) {
        let pokid = 0;
        do {
            pokid = getRandomInt(1, 649);
        } while (pokemons.includes(pokid));
        pokemons.push(pokid);
    }
    return pokemons;
};

export const getPokemonNames = async ([ a, b, c, d ] = []) => {
    const priomiseArr = [
        PokeApi.get(`${a}`, { cache: false }),
        PokeApi.get(`${b}`, { cache: false }),
        PokeApi.get(`${c}`, { cache: false }),
        PokeApi.get(`${d}`, { cache: false }),
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
