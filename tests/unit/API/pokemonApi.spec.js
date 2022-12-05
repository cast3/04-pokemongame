import PokeApi from "@/api/pokemonApi"

describe("PokemonApi", () => {
    test("Axios debe de estar configurado con el API de pokemon", () => {
        expect(PokeApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon/")
    })
})
