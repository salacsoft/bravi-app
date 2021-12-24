//LIBRARIES
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

//COMPONENTS
import Password from "@/components/password.vue";
import Email from "@/components/email.vue";


//HELPERS
import { errorHandler } from "@/api/helper";
import { createToast } from "mosha-vue-toastify";
import { apiClient } from "@/api/httpService.js";

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
               let msg = errorHandler(error);
               createToast({ title: "ALERT", description: msg }, { type: "warning", timeout: 9000, position: "top-center" });
            });
      }

      return { login, credential };
   },
};