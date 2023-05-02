<template>
    <tr>
        <td >{{ pokemon.name.english }}</td>
        <td>{{ pokemon.type.join(", ") }}</td>
        <td>
           
            <button @click="onClick(pokemon)" type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Information</button>
        </td>
    </tr>
</template>

<script>
export default {
    name : 'PokemonRow',
    props: {
        pokemon: {
            type: Object,
            required: true,
            validator: (value) => {
                return (
                    typeof value === "object" &&
                    value.hasOwnProperty("id") &&
                    value.hasOwnProperty("name") &&
                    value.hasOwnProperty("type") &&
                    value.hasOwnProperty("base")
                );
            },
        },
    },
    methods: {
        onClick(pokemon) {
            this.$emit("select", pokemon);
        },
    },
};
</script>
