<template>
    <div class="container mx-auto w-full px-4 pt-4 justify-center " >
        <h1 class="text-center text-2xl">Pokemon Search</h1>
        <div class="grid grid-cols-3 pt-4">
            <div >
                <input v-model="filter" @input="updateFilter" class="w-full py-4 rounded-xl px-4 text-lg border border-blue-500"
                    type="text" placeholder="Search for a Pokemon" />
                <table width="100%" class="ml-10">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th class="">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for ='pokemon in filteredPokemon' :key=" pokemon.id">
                          <pokemon-row :pokemon="pokemon" @select="selectPokemon"/>
                        </template>
                       
                    </tbody>
                </table>
            </div>
            <div v-if = "selectedPokemon" class="p-20">
                <pokemon-info :name="selectedPokemon.name" :base="selectedPokemon.base" />
              
            </div>
            <div v-else class="p-20"><p>Nothing to show here </p></div>
        </div>
    </div>
</template>

<script>
import PokemonInfo from './components/PokemonInfo.vue';
import PokemonRow from "./components/PokemonRow.vue";

export default {
    name: "App",
    components: {
        PokemonRow,
        PokemonInfo,
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
        }
    },
};
</script>

<style scoped>
#app {
    background-color: black;
}
</style>
