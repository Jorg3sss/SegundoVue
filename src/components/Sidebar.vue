<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';


  const registrarStore = useRegistrarStore();

</script>

<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>{{ registrarStore.nombre }}</h3>
    <h3>{{ registrarStore.email }} </h3>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/Lista">Lista</router-link></li>
      <li><router-link to="/Registrar">Login</router-link></li>
      <li><router-link to="/Calcular">Calcular</router-link></li>

    </ul>

  </div>

</template>

<style>
  .sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
</style>
