// module.exports = {
//     preset: '@vue/cli-plugin-unit-jest',
//     transformIgnorePatterns: [ '/node_modules/(?!(axios)/)' ],
// }
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    "moduleNameMapper": {
        "axios": "axios/dist/node/axios.cjs"
    },
    transform: {
        '^.+\\.vue$': 'vue3-jest',
        '^.+\\js$': 'babel-jest',
    },
}
