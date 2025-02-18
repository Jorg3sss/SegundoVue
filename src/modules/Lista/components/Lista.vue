<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import {ref} from 'vue';

  const tareas = ref([]);
  const tarea1 = ref("");

  const agregar = () => {

    if(tarea1.value != ""){
      tareas.value.push(tarea1.value);

      tarea1.value = "";
    }

  }

  const borrar = (i) =>{
    tareas.value.splice(i,1);
  }
</script>

<template>
  <div>
    <h2>Lista de tareas</h2>
    <input type="text" v-model="tarea1" @keyup.enter="agregar">
    <button v-on:click="agregar">Agregar tarea</button>
    <ul v-for="(i,j) in tareas" :key="j">
      <li>{{ i }} <button @click="borrar(j)">Borrar</button></li>
    </ul>
  </div>

</template>

<style>

</style>
