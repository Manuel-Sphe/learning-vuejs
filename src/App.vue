<script >
    import PokemonRow from "./components/PokemonRow.vue";
    export default {

        name: "App",
        // for external components
        components : {
            PokemonRow,
        },
        // for the data we want to manage state for .
        data() {
          return {
            filter: "",
            pokemon: null,
            selectedPokemon: null,
          };
        },
        // fetching the data 
        async mounted(){
            try{
                const response  = await fetch("http://localhost:5173/pokemon.json");
                const data = await response.json();

                this.pokemon = data;

                console.log(this.pokemon)
            }
            catch(error){
                  console.error("Error fetching the Pokemon Data ", error );
            }
        },

      computed : {
          filterPokemon(){
              if(!this.pokemon) return null ;

              return this.pokemon.filter((p)=> p.name.english
                                              .toLowercase())
                                            .includes(this.filter.toLowerCase());
          }
        },

       methods:
          {
              updateFilter(event){
                this.filter = event.target.value;
                console.log(this.filter);
              },
              selectePokemon(pokemon){
                  this.selectedPokemon = pokemon; 
              }
          },

    }

</script>

<template >

  <div class=" container  mx-auto w-full px-4 pt-4">
     <h1 class = 'text-center text-2xl '>Pokemon search</h1>
     <div class="grid grid-cols-5 gap-4 pt-4">

      <div >
        
          <input v-model="filter" @input="updateFilter" class="w-full py-8 px-4 text-lg border border-black" type="text"
              placeholder="Search for a Pokemon"
            
          />

          <table width="100%" >
                <thead>
                      <tr >
                          <th>Name</th>
                          <th>Type</th>

                      </tr>
                </thead>
                  <template v-if = "filterPokemon">

                      <PokemonRow :pokemon="filterPokemon" @select-pokemon="selectePokemon"/>

                  </template>
                  
                <tbody>


                </tbody>
          </table>

      </div>

     </div>
  </div>
 
     
</template>

<style scoped>
    #app {
        background-color: black;
    };
</style>
