<template>
  <div class="home">
    <p>Lista de juegos disponible</p>
    
    <Juegos></Juegos>
  </div>
</template>

<script>

import Juegos from '@/components/Juegos.vue'

export default {
  name: 'HomeView',
  components: {
   Juegos
  }
}
</script>
