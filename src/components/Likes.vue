<template>
    <div id="like">
        <!-- BOTON INGRESAR DATOS -->
        <div v-if="mostrar">
            <button @click="cargar()" class="btn btn-success">Ingresar Datos</button>
        </div>
        <!-- FORMULARIO -->
        <div v-if="mostrarForm" class=" d-flex justify-content-center">
            <form class="w-50 m-2">
                <div class="mb-3">
                    <label for="txtNombre" class="form-label d-flex justify-content-start">Nombre</label>
                    <input type="text" class="form-control" v-model="usuario" id="txtNombre" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                    <label for="txtApellido" class="form-label d-flex justify-content-start">Apellido</label>
                    <input type="text" class="form-control" v-model="apellido" id="txtApllido">
                </div>

                <button @click="ingresar()" type="button"
                    class="btn btn-primary d-flex justify-content-start">Ingresar</button>
            </form>
        </div>
        <!-- VISTA  -->
        <div v-if="mostrarTitulo">
            <div class="container">
                <div class="row">
                    <div class="col-2" style="background-color: black;">
                        <p style="color: white;">Bienvenido@</p><span style="color: tan;">{{ usuario }} {{ apellido
                        }}</span>
                    </div>
                    <div class="col-10">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h4>{{ titulo }}</h4>
                                    <h4>Resumen de la Cuenta</h4>
                                    <h3><span style="font-size: 70%;">Le diste me gusta al juego: </span> {{ nombre }}</h3>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center ">
                                <div class="col-12 w-75 m-2 border">
                                    <p class="d-flex justify-content-start">Deseas comprar coins para este juego?</p>
                                    <button type="button" :disabled="btnDisabled" @click="agregarCoins" class="btn btn-warning">Agregar
                                        Coins</button>
                                    <hr>
                                    <h2 class="d-flex justify-content-start">Cantidad de Coins Comprados</h2>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25"
                                        aria-valuemin="0" aria-valuemax="100">
                                        <div :class="['progress-bar', clase]" :style="estilo">${{ contador }}</div>
                                    </div>

                                    <p>{{ mensaje }}</p>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center  ">
                                <div class="col-4 bg-warning w-25">
                                    <p>% de finalizacion del juego</p>
                                    <p>17%</p>
                                </div>
                                <div class="col-4 bg-success w-25">
                                    <p class="text-white">Logros en el juego</p>
                                    <p class="text-white">166</p>
                                </div>
                                <div class="col-4 bg-info w-25">
                                    <p class="bg-opacity-75">Recompensas</p>
                                    <p>200</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    </div>
</template>
<script>
export default {
    name: 'like',
    props: ['nombre'],
    data: function () {
        return {
            titulo: 'Componente Administracion',
            mostrar: true,
            mostrarTitulo: false,
            mostrarForm: false,
            contador: 0,
            mensaje: '',
            usuario: '',
            apellido: '',
           
            estilo: '',
            clase:''
        }
    },
    methods: {
        cargar: function () {
            this.mostrar = false
            this.mostrarForm = true
        },
        ingresar: function () {
            if (this.usuario == '') {
                alert('debe ingresar nombre')
            } else {
                this.mostrar = false
                this.mostrarForm = false
                this.mostrarTitulo = true
            }

        },
        agregarCoins: function () {
            this.contador++
            if (this.contador ==0) {
                
            }
            if (this.contador == 1) {
            //    this.mensaje='verde'
               this.estilo='width: 10%'
               this.clase='bg-success'
            }if (this.contador ==20) {
                // this.mensaje='amarillo'
                this.estilo='width: 20%'
               this.clase='bg-warning'
            }if (this.contador ==30) {
                // this.mensaje='celeste'
                this.estilo='width: 25%'
               this.clase='bg-info'
            }if (this.contador == 49) {
                // this.mensaje='rojo'
                this.estilo='width: 50%'
                this.clase='bg-danger'
            }

                
        


        }
        
    },
    computed:{
        btnDisabled: function(){
            let btnBoton = false
            if (this.contador == 50) {
                btnBoton = true
                this.mensaje='Llegaste al máximo de tu crédito'
                
                
            }
            return btnBoton

        }
    }
    
    
}
</script>
<style></style>