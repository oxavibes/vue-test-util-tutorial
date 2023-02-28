<template>
  <div v-if="count % 2 === 0">Count is {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count is {{ count }}. Count is odd.</div>
  <button @click="increment" data-action="increment">Increment</button>
  <button @click="decrement" data-action="decrement">Decrement</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.state.count);

    const increment = () => store.commit("increment");
    const decrement = () => store.commit("decrement");

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>

<style lang="scss" scoped></style>
