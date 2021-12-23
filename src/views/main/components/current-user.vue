<template>
  <div
    class="
      flex
      justify-between
      bg-winter-green bg-opacity-20
      rounded-full
      w-full
      h-20
      pr-4
      items-center
    "
  >
    <div class="flex items-center space-x-3">
      <img
        src="/img/svg/male-avatar.svg"
        class="h-20 w-20 border-4 border-winter-green rounded-full"
      />
      <div>
        <h4 class="flex justify-center text-2xl">Joseph Salac</h4>
        <p class="tracking-wider font-sm">Account Manager</p>
      </div>
    </div>

    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 sm:h-8 sm:w-8"
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
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>