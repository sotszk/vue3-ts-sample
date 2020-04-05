<template>
  <div>
    <div>{{ name }}</div>
    <button @click="() => togglePortal()">toggle</button>
    <Portal target="#portal-target">
      <div v-if="showPortal">portal</div>
    </Portal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',

  setup() {
    const showPortal = ref(false);

    const togglePortal = () => showPortal.value = !showPortal.value;

    return {
      name: 'App です',
      showPortal,
      togglePortal,
    }
  },
});
</script>

<style scoped>
</style>
