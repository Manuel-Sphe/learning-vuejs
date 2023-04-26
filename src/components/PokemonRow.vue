<script>
   
    import PokemonType from '../../pokemonType';
    import PropTypes from 'prop-types';
    export default {
        name: 'PokemonRow',
        props: {
            pokemon: PropTypes.arrayOf(PokemonType),
        },
        methods: {
            onClick(pokemon) {
                this.$emit('click', pokemon);
            },
        },
    };

 
</script>

<template>
    <tr :key ="pokemon.id">
        <td>{{ pokemon.name.english }}</td>
        <td>{{ pokemon.type.join(', ') }}</td>
        <td>
            <button @click = "onClick(pokemon)" class="btn btn-prima">
                More Information
            </button>
        </td>
    </tr>
</template>