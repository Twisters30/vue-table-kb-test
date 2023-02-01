<template>
  <Loader v-if="carsStore.isLoader" />
  <RouterView />
</template>

<script>
import Loader from "@/components/Loader.vue";
import { useCarsStore } from "@/stores/cars.js";

export default {
  components: { Loader },
  created() {
    this.carsStore = useCarsStore();
  },
};
</script>
