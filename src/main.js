import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PokemonRow from './components/PokemonRow.vue'
import '../index.css'


const app = createApp(App)
app.component('pokemon-row' , PokemonRow);
app.use(createPinia())


app.mount('#app')
