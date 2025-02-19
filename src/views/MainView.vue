<script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import Header from '@/components/Header.vue';
</script>

<template>
  <Header></Header>
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
