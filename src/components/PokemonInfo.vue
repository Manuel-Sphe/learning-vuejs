

<template>
    <div>
        <h2 class="text-2xl">
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
<script>

export default {
    name: "PokemonInfo",
    props: {
        name: {
            type: Object,
            requred: true,
        },
        base: {
            type: Object,
            required: true
        }
    }
}
</script>