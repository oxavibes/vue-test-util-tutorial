<template>
  <div v-if="count % 2 === 0">Count is {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count is {{ count }}. Count is odd.</div>

  <button @click="increment" data-action="increment">Increment</button>
  <button @click="decrement" data-action="decrement">Decrement</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
