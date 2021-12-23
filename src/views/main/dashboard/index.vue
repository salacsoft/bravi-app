<template>
  <div class="flex flex-wrap justify-center">
    <!-- <div>
      <h1 class="text-4xl">Videos</h1>
      <video src="/videos/test.mp4" id="myVideo" alt="video player">
        video not supported
      </video>
    </div> -->
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
      "
    >
      <img src="/img/svg/dashboard.svg" alt="" srcset="" class="h-24 w-24" />
      <p class="tracking-wider font-semibold">Dashbopard</p>
    </div>
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
      "
    >
      <img src="/img/svg/fact-check.svg" alt="" srcset="" class="h-24 w-24" />
      <p class="tracking-wider font-semibold">Start Survey</p>
    </div>

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
      "
    >
      <img src="/img/svg/poll.svg" alt="" srcset="" class="h-24 w-24" />
      <p class="tracking-wider font-semibold">Reports</p>
    </div>
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
      "
    >
      <img src="/img/svg/face.svg" alt="" srcset="" class="h-24 w-24" />
      <p class="tracking-wider font-semibold">Time In/Out</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      let vid = document.getElementById("myVideo");
      vid.addEventListener("ended", myHandler, false);
      vid.autoplay = true;
      vid.load();
    });

    function myHandler(e) {
      console.log(e);
      alert("video finished");
    }
    return { myHandler };
  },
};
</script>

<style lang="scss" scoped>
</style>