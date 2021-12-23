<template>
  <div class="max-w-lg w-full py-4 px-5">
    <div class="flex justify-center items-center space-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-14 w-14"
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
      <h1 class="text-4xl font-bold">Brand</h1>
    </div>

    <!-- form -->
    <div class="mt-10">
      <h1 class="tracking-widest text-xl sm:text-2xl mb-5">
        Create new Password
      </h1>
      <div class="login-form space-y-14">
        <div class="space-y-6">
          <Password
            customClass="new-password"
            v-model="newPassword"
            label="New Password"
            placeholder="Enter your new password"
            id="newPassword"
          />
          <Password
            customClass="retype-new-password"
            v-model="reTypePassword"
            label="Re-type Password"
            placeholder="Re-type your new password"
            id="reTypeNewPassword"
          />
        </div>

        <div class="space-y-3">
          <button class="btn btn-neutral w-full tracking-wider">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Password from "./components/password.vue";
export default {
  components: {
    Password,
  },
  setup() {
    const newPassword = ref("");
    const reTypePassword = ref("");
    return { newPassword, reTypePassword };
  },
};
</script>

<style lang="scss" scoped>
</style>