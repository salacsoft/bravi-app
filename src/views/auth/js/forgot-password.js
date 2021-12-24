
//LIBRARIES
import { reactive } from "vue";

//COMPONENTS
import Email from "@/components/email.vue";

//HELPERS
import { errorHandler } from "@/api/helper";
import { createToast } from "mosha-vue-toastify";
import { apiClient } from "@/api/httpService.js";

export default {
   components: { Email },
   setup() {

      let credential = reactive({
         email: "",
         url: process.env.VUE_APP_DOMAIN + "/reset-password",
      });

      function forgotPassword() {
         apiClient.post("/forgot-password", credential)
            .then(response => {
               console.log(response);
               let msg = response.data.message || "Please check your email.";
               createToast({ title: "SUCCESS", description: msg }, { type: "success", timeout: 10000, position: "top-center" })
            })
            .catch(error => {
               let msg = errorHandler(error);
               createToast({ title: "ALERT", description: msg }, { type: "warning", timeout: 9000, position: "top-center" });
            });
      }

      return { credential, forgotPassword };
   },
};
