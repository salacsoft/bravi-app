<template>
  <div
    class="
      bg-winter-white
      drawer
      h-screen
      flex flex-col
      justify-between
      p-4
      main-page
    "
  >
    <div>
      <NavBar />
      <CurrentUser class="mt-5" />
    </div>

    <div
      class="
        flex
        justify-center
        items-center
        bg-winter-white bg-opacity-80
        h-1/4
        md:h-1/3
      "
    >
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
//COMPONENTS
import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import CurrentUser from "./components/current-user.vue";

export default {
  components: { NavBar, Footer, CurrentUser },
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.main-page {
  background-image: url("/img/svg/customer-survey.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @apply text-winter-black;
}
</style>