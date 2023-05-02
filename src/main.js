import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PokemonRow from './components/PokemonRow.vue'
import PokemonInfo from './components/PokemonInfo.vue'
import '../index.css'


const app = createApp(App)
app.component('pokemon-row' , PokemonRow);
app.component('pokemon-info',PokemonInfo);

app.use(createPinia())


app.mount('#app')
