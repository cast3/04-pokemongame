import PokemonPage from "@/pages/PokemonPage"
import { shallowMount, mount } from "@vue/test-utils"
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonPage component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test("Debe hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("Debe de llamar el mixPokemonArr al montar", () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, "mixPokemonArr")
        // const wrapper = shallowMount(PokemonPage)
        shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test("Debe hacer match con el snapshot cuando cargan los pokemons", () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[ 3 ],
                    showPokemon: false,
                    message: "",
                    showAnswer: false,
                };
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })


    test("De be de mostrar los componentes de PokemonPicture y PokemonOptions", () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[ 0 ],
                    showPokemon: false,
                    message: "",
                    showAnswer: false,
                };
            }
        })
        const pokemonOpsTag = wrapper.find("pokemon-options-stub")
        const pokemonPicTag = wrapper.find("pokemon-picture-stub")

        //PokemonOptions debe de existir
        expect(pokemonOpsTag.exists()).toBeTruthy()

        //PokemonOptions attribute pokemons toBe true
        expect(pokemonOpsTag.attributes("pokemons")).toBeTruthy()

        //PokemonPicture debe de existir
        expect(pokemonPicTag.exists()).toBeTruthy()

        //PokemonPicture attribute pokemonid===1
        expect(pokemonPicTag.attributes("pokemonid")).toBe("1")

    })

    test("Pruebas con checkAnswer", async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[ 0 ],
                    showPokemon: false,
                    message: "",
                    showAnswer: false,
                };
            }
        })

        // console.log(wrapper.vm);
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find("h2").exists()).toBeTruthy()
        // console.log(wrapper.find("h2").text())
        expect(wrapper.find("h2").text()).toBe("Correcto!")
        expect(wrapper.vm.showPokemon).toBe(true)


        await wrapper.vm.checkAnswer(2)
        expect(wrapper.vm.message).toBe("Incorrecto!")

    })


})
