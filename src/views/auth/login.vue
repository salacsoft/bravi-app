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
      <form @submit.prevent="login">
        <div class="login-form space-y-14">
          <div class="space-y-6">
            <Email
              label="Email"
              placeholder="Enter your email address"
              v-model="credential.email"
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              v-model="credential.password"
              id="password"
            />
          </div>

          <div class="space-y-3">
            <button
              class="btn bg-winter-black w-full tracking-wider font-bold"
              type="submit"
            >
              Log in
            </button>
            <div class="flex justify-end">
              <router-link
                class="underline items-start tracking-wider"
                to="/forgot-password"
                >Forgot password</router-link
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import Password from "./components/password.vue";
import Email from "./components/email.vue";
import { createToast } from "mosha-vue-toastify";

import { apiClient } from "@/api/httpService.js";

import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    Password,
    Email,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const credential = reactive({ email: "", password: "" });

    function login() {
      apiClient
        .post("login", { ...credential })
        .then((response) => {
          let data = response.data;

          createToast("Welcome " + data.data.full_name, { type: "success" });
          const { email, full_name, uuid, user_uuid, user_id } = data.data;

          store.dispatch("setUserToken", data.data);
          store.dispatch("setUserDetails", {
            email,
            full_name,
            uuid,
            user_uuid,
            user_id,
          });

          store.dispatch("initializeLogoutTimer");
          router.push("/");
        })
        .catch((error) => {
          if (error && error.data) {
            let msg = error.data.message;
            createToast(msg, { type: "danger", timeout: 10000 });
          }
        });
    }

    return { login, credential };
  },
};
</script>

<style lang="scss" scoped>
</style>