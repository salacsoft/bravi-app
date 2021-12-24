//LIBRARIES
import { reactive } from "vue";
import { useRoute, useRouter } from 'vue-router';

//COMPONENTS
import Password from "@/components/password.vue";

//HELPERS
import { errorHandler } from "@/api/helper";
import { createToast } from "mosha-vue-toastify";
import { apiClient } from "@/api/httpService.js";

export default {
   components: {
      Password,
   },

   setup() {

      const route = useRoute();
      const router = useRouter();

      const reset = reactive({
         token: route.query.token,
         email: route.query.email,
         password: "",
         confirm_password: ""
      });


      function resetPassword() {
         let msg = "";
         apiClient.post("/reset-password", reset)
            .then(response => {
               msg = response.data.message;
               createToast({ title: "SUCCESS", description: msg }, {
                  type: "success", timeout: 5000, position: "top-center", onClose: function () {
                     router.push("/login");
                  }
               });
            })
            .catch(error => {
               msg = errorHandler(error);
               createToast({ title: "ALERT", description: msg }, { type: "warning", timeout: 12000, position: "top-center" });
            });
      }

      return { reset, resetPassword };
   },
};