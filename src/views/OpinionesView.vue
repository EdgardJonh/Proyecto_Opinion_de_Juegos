<template>
    <div id="opiniones">
        <span>Opinar del juego:</span><h1>{{ nombre }}</h1>
        <div class="container ">
            <form >
                <div  class="mb-3">
                    <label for="txtNombre" class="form-label d-flex justify-content-start">Nombre</label>
                    <input type="text" class="form-control" v-model="nombres" id="txtNombre" aria-describedby="emailHelp">
                   
                </div>
                <div class="mb-3">
                    <label for="txtOpinion" class="form-label d-flex justify-content-start">Opinion</label>
                    <input type="text" class="form-control" v-model="Opinion" id="txtOpinion">
                </div>

                <button  @click="cargarOpinion()" type="button" class="btn btn-primary d-flex justify-content-start">{{ nombreBoton }}</button>
            </form>
            <hr>
            <h2>A continuacion podras ver las opiniones</h2>
            <div class="opina">
                <p  v-if="this.losDatos == false">no hay opiniones para mostrar</p>
            </div>
            <div v-for="(estosDatos, index) in losDatos" :key="index" class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button"  data-bs-toggle="collapse"
                            :data-bs-target="`#${index}`" aria-expanded="true" :aria-controls="index">
                           {{ estosDatos.elnombre }}
                        </button>
                    </h2>
                    <div :id="index" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           <p>{{ estosDatos.laopinion}}</p>
                           <button type="button" @click="eliminar(index)" class="btn btn-primary">Eliminar</button>
                           <button type="button" @click="actualizar(index)" class="btn btn-warning">Edtitar</button>
                        </div>
                    </div>
                </div>
                
            </div>

            <router-link to="/" class="btn btn-success d m-1 d-flex justify-content-start">Volver</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'opiniones',
    props: ['nombre'],
    data: function () {
        return {
            losDatos: [
                
            ],
            Opinion:'',
            nombres: '',
            index:0,
            nombreBoton: 'Agregar'

                
        }
    },
    methods:{
        cargarOpinion: function () {
            if (this.nombreBoton == 'Agregar') {
                this.Opinion = document.getElementById('txtOpinion').value
            this.nombres = document.getElementById('txtNombre').value
           

            this.losDatos.push({elnombre: this.nombres,laopinion: this.Opinion})
            console.log(this.losDatos)
           this.limpiarInput()
            } else if(this.nombreBoton== 'Actualizar') {
                let actualizarDatos = {
                    elnombre: this.nombres,
                    laopinion: this.Opinion
                }
                this.losDatos.splice(this.index,1,actualizarDatos)
                this.nombreBoton = 'Agregar'
                this.limpiarInput()
            }
           

        },
        //FUNCION QUE LIMPIA LOS INPUT
        limpiarInput: function () {
            document.getElementById('txtOpinion').value = '' 
            document.getElementById('txtNombre').value = ''
            this.nombres= ''
            this.Opinion = ''
        },
        eliminar: function (index) {
            this.losDatos.splice(index,1)
            this.limpiarInput()
        },
        actualizar:function (indexx) {
            this.nombres = this.losDatos[indexx].elnombre
            this.Opinion = this.losDatos[indexx].laopinion
            this.nombreBoton = 'Actualizar'
            this.index = indexx
            
        }
       
    }
}
</script>
<style>
    .d{
        width: 10%;
    }
    .opina {
    background-color: thistle;
    color: tomato;
}</style>