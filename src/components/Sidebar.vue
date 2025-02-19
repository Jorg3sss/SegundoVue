<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
  import { ref, watch } from 'vue';

  const registrarStore = useRegistrarStore();
  const nombre = ref(registrarStore.nombre.value);
  const email = ref(registrarStore.email.value);

  watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
  });

  watch(() => registrarStore.email, (newValue2) => {
    email.value = newValue2;
  });
</script>

<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>{{ nombre }}</h3>
    <h3>{{ email }} </h3>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/Lista">Lista</router-link></li>
      <li><router-link to="/Registrar">Login</router-link></li>

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
