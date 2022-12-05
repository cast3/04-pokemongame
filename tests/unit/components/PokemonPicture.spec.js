import { shallowMount } from "@vue/test-utils"
import PokemonPicture from "@/components/PokemonPicture"

describe("PokemonPicture component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });
    })


    test("Debe hacer match con el snapshot", () => {

        expect(wrapper.html()).toMatchSnapshot();

    })

    test("Debe mostrar la imagen oculta y el pokemon 100", () => {

        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });

        const img = wrapper.find("img")

        expect(img.exists()).toBeTruthy()

        //Buscar o esperar que tenga unas clases especificas
        // console.log(img.classes());
        expect(img.classes("fade-in")).toBe(false)
        expect(img.attributes("src")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg")
    })

    test("Debe mostrar el pokemon si showpokemon:true", () => {
        const [ img ] = wrapper.findAll("img")

        expect(img.exists()).toBeTruthy()

        //Buscar o esperar que tenga unas clases especificas
        expect(img.classes("fade-in")).toBe(false)
    })

})
