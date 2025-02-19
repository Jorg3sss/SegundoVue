<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import {Form, Field, ErrorMessage} from 'vee-validate';
  import { schema } from '../schemas/Validation';
  import { useRegistrarStore } from '../stores/registrarStore';
  import { ref } from 'vue';

  const registrarStore = useRegistrarStore();
  const nombre = ref("");
  const email = ref("");

  const Onsubmit = () => {
    registrarStore.guardar(nombre.value, email.value)
    alert("Se ha enviado correctamente");
  }
</script>

<template>
  <div class="container">
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="Onsubmit">
      <div class="form">
        <label for="nombre">Nombre </label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>

      <div class="form">
        <label for="Correo">Correo </label>
        <Field v-model="email" type="email" name= "email" id="Correo" placeholder="Ingrese su email" />
        <ErrorMessage name="email"></ErrorMessage>
      </div>

      <div class="form">
        <button type="submit">Registrar</button>
      </div>

    </Form>

  </div>
</template>

<style scoped>
  .container{
    display:contents;
  }
  .form{
    margin-bottom: 10px;
  }
</style>
