<script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import Header from '@/components/Header.vue';
  import { ref } from 'vue';

  const texto = ref("");

</script>

<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="contenido">
      <input type="text" v-model="texto">
      {{ texto  }}
      <router-view></router-view>
    </div>
  </div>

</template>

<style>
  .container{
    display: flex;
  }

  .contenido{
    flex: 1;
    padding: 50px;
  }
</style>
