import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"


describe("getPokemonOptions helpers", () => {

    test("Debe regresar un arreglo de 4 elementos", () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(4)
    })

    test("Debe regresar un arreglo de 4 elementos y 4 nombres", async () => {
        const pokemonsWithNames = await getPokemonNames([ 1, 2, 3, 4 ])
        const arrPokemonTest = [
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' }
        ];

        expect(pokemonsWithNames).toStrictEqual(arrPokemonTest)
    })

    test("getPokemonOptions debe regresar un arreglo mezclado o random", async () => {
        const pokemons = await getPokemonOptions();

        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            }
        ]
        );

    })

})
