import PokemonOptions from "@/components/PokemonOptions"
import { shallowMount } from "@vue/test-utils"
import { pokemons } from "../mocks/pokemons.mock";



describe("PokemonOptions component", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: { pokemons }
        })
    })

    test("Debe hacer match con el snapshot", () => {
        // console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot();
        //     expect(wrapper.html()).toMatchInlineSnapshot(`
        //     <div class="options-container">
        //     <ul>
        //       <li>bulbasaur</li>
        //       <li>ivysaur</li>
        //       <li>venusaur</li>
        //       <li>charmander</li>
        //     </ul>
        //   </div>`);
    })


    test("Debe de mostrar las 4 opciones correctamente", () => {
        const liTag = wrapper.findAll("li")
        expect(liTag.length).toBe(4)

        expect(liTag[ 0 ].text()).toBe("bulbasaur")
        expect(liTag[ 1 ].text()).toBe("ivysaur")
        expect(liTag[ 2 ].text()).toBe("venusaur")
        expect(liTag[ 3 ].text()).toBe("charmander")
    })

    test("Debe emitir 'selection' con sus respectivos parametros al hacer click", () => {
        const [ li1, li2, li3, li4 ] = wrapper.findAll("li")

        li1.trigger("click")
        li2.trigger("click")
        li3.trigger("click")
        li4.trigger("click")

        console.log(wrapper.emitted("selection"));
        expect(wrapper.emitted("selection").length).toBe(4)
        expect(wrapper.emitted("selection")[ 0 ]).toStrictEqual([ 1 ])
        expect(wrapper.emitted("selection")[ 1 ]).toStrictEqual([ 2 ])
        expect(wrapper.emitted("selection")[ 2 ]).toStrictEqual([ 3 ])
        expect(wrapper.emitted("selection")[ 3 ]).toStrictEqual([ 4 ])
    })
})
