<template>
  <div
    class="
      h-12
      bg-white
      flex
      justify-between
      items-center
      rounded-full
      px-4
      text-winter-black
    "
  >
    <h1 class="tracking-wider text-sm">
      <span class="text-lg font-semibold">{{ brand }}</span> copyright
      {{ year }}
    </h1>
    <p class="tracking-wider text-sm">{{ ver }}</p>
  </div>
</template>

<script>
//LIBRARIES
import { ref, onMounted } from "vue";

export default {
  setup() {
    let ver = ref("");
    let year = ref("");
    let brand = ref("");
    onMounted(() => {
      const d = new Date();
      year.value = d.getFullYear();
      ver.value = process.env.VUE_APP_VERSION;
      brand.value = process.env.VUE_APP_NAME;
    });
    return { ver, year, brand };
  },
};
</script>

<style lang="scss" scoped>
</style>