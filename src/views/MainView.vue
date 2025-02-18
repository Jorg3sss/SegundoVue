<script setup>
  import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="contenido">
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
