<template>
  <div
    class="
      h-14
      sm:h-16
      bg-green-400
      rounded-full
      flex
      justify-between
      items-center
      px-4
    "
  >
    <div class="flex justify-center items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 sm:h-10 sm:w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
      <h1 class="text-xl sm:text-2xl font-bold tracking-wider">{{ brand }}</h1>
    </div>
    <div
      @click="logout"
      class="flex items-center cursor-pointer"
      title="click to logout"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 sm:h-8 sm:w-8 hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  </div>
</template>

<script>
//LIBRARIES
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    // VARIABLES
    let store = useStore();
    let brand = ref("");

    //FUNCTIONS
    onMounted(() => {
      brand.value = process.env.VUE_APP_NAME;
    });

    function logout() {
      store.dispatch("logout");
    }
    return { brand, logout };
  },
};
</script>

<style lang="scss" scoped>
</style>