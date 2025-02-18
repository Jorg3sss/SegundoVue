<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import {ref} from 'vue';

  const conta = ref(0);

  const aumentar = () =>{
    conta.value ++;
  }
</script>


<template>
  <h2>{{ conta }} <br></h2>
  <button v-on:click="aumentar">Incrementar</button>
</template>

<style scoped>

</style>
