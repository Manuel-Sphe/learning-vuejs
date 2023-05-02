<template>
    <div class="container mx-auto w-full px-4 pt-4 justify-center">
        <h1 class="text-center text-2xl">Pokemon Search</h1>
        <div class="grid grid-cols-5 gap-4 pt-4">
            <div>
                <input v-model="filter" @input="updateFilter" class="w-full py-8 px-4 text-lg border border-black"
                    type="text" placeholder="Search for a Pokemon" />
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(pokemon, index) in filteredPokemon" :key="index">
                            <pokemon-row :pokemon="pokemon" @select-pokemon="selectPokemon" />
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonRow from "./components/PokemonRow.vue";

export default {
    name: "App",
    components: {
        PokemonRow,
    },
    data() {
        return {
            filter: "",
            pokemon: null,
            selectedPokemon: null,
        };
    },
    async mounted() {
        try {
            const response = await fetch("http://localhost:5173/pokemon.json");
            const data = await response.json();
            this.pokemon = data;
        } catch (error) {
            console.error("Error fetching the Pokemon Data ", error);
        }
    },
    computed: {
        filteredPokemon() {
            if (!this.pokemon) return null;
            return this.pokemon.filter((p) =>
                p.name.english.toLowerCase().includes(this.filter.toLowerCase())
            );
        },
    },
    methods: {
        updateFilter(event) {
            this.filter = event.target.value;
        },
        selectPokemon(pokemon) {
            this.selectedPokemon = pokemon;
        },
    },
};
</script>

<style scoped>
#app {
    background-color: black;
}
</style>
