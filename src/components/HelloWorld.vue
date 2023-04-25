<script setup>

    import {ref} from "vue"


    defineProps({
      msg : String,
    })

    const count = ref(0)

</script>


<template>
    <h1 >
          {{ msg }}
    </h1>

    <button type = "button" @click = "count++"> 
        count is : {{ count }}
    </button>
    
    <h2>
       Documentation
    </h2>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>
          |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a>
    </p>
</template>

<style scoped>
    h1{
        padding-right: 10px;
    }

    a{
      color : #42b983;
    }

    button{
      color: black;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      background-color: #42b983;
      text-align: center;
      border-radius: 1px;
    }

    p{
        padding-top: 10px;
    }
</style>