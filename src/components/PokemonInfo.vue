<script>
    export default{
        name : "PokemonInfo",
        props :{
            name : {
                type : Object,
                requred : true,
            },
            base : {
                type : Object,
                required : true
            }
        }
    }
</script>

<template>
    <div>
        <h2>
            {{ name.english }}
        </h2>

        <table>
            <tbody>
                <tr v-for = "(value, key) in base" :key = "key" >
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>