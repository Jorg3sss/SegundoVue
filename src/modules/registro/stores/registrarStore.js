import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore("registrar", () => {
  const nombre = ref("");
  const email = ref("");

  const guardar = (name,ema) =>{
    nombre.value = name;
    email.value = ema;

  }

  return  {nombre, email, guardar};

});
