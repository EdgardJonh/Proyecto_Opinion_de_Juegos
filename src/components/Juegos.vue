<template>
    <div id="juegos">
        <p>Componente juegos</p>
        <div class="contenedorPadre">
            <div v-for="(juego, index) in juegos" :key="index" class="card m-2" style="width: 18rem;">
            <img :src="juego.background_image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ juego.name }}</h5>
                <p class="card-text">ESRB Rating: {{ juego.esrb_rating.name }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Rating:{{ juego.rating }}</li>
                <li class="list-group-item">Released:{{ juego.released }}</li>
                <li class="list-group-item">Update: {{ juego.updated }}</li>
            </ul>
            <div class="card-body">
                <a @click="mostrarOpiniones(juego.name)" class="btn btn-primary">opinar</a>
                <a href="" class="m-1" @click.prevent="agregarLike" ><font-awesome-icon :icon="['fas', 'heart']" style="color: red;"/></a>
            </div>
        </div>
        </div>
       
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'juegos',
    data: function () {
        return {
            
            cantidadJuegos:0,
            juegos:[],
            titulo:'',
            img:''
        }
    },
    methods:{
        consumirApi: function () {
            let url = 'https://api.rawg.io/api/games?key=09c68133658d476f85bd0bdc9fbc8ebd'
            axios(url)
            .then(respuesta => {
                //logica para acumular en el arreglo juego en las distintas paginas
                for (let i = 0; i < respuesta.data.results.length; i++) {
                    this.juegos.push(respuesta.data.results[i])
                    
                }
                // this.titulo = respuesta.data.results[0].name
                // this.img = respuesta.data.results[0].background_image
                // console.log(respuesta.data.results[0].name)
                
                // console.log(respuesta)
            })
            .catch(error => {
                console.log(error)
            })

        },
        mostrarOpiniones: function (nombreJuego) {
            this.$router.push(`/opiniones/${nombreJuego}`)
        },
        agregarLike: function () {
            this.$router.push(`/likes`)
        }
    },
    created(){
        this.consumirApi()
    }
}
</script>
<style>
.contenedorPadre{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#juegos {
    background-color: tomato;
}
</style>