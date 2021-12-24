<template>
  <div class="flex flex-wrap justify-center">
    <div
      class="
        border-2
        bg-gray-100 bg-opacity-90
        h-40
        w-40
        m-1
        rounded-xl
        flex flex-col
        items-center
        justify-center
        cursor-pointer
        hover:bg-gray-200
      "
      v-for="item in menuList"
      :key="item.title"
    >
      <img :src="item.icon" alt="" srcset="" class="h-24 w-24" />
      <p class="tracking-wider font-semibold" :title="item.description">
        {{ item.label }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

//CONTANTS
import { menu } from "./js/menu.js";

export default {
  setup() {
    let menuList = reactive([]);

    menuList = computed(() => {
      return menu;
    });

    return { menuList };
  },
};
</script>

<style lang="scss" scoped>
</style>