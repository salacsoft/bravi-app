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

    <router-view />
    <Footer />
  </div>
</template>

<script>
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
  background-image: url("/img/svg/account-manager.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @apply text-winter-black;
}
</style>