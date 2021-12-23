<template>
  <div class="flex flex-col justify-around h-screen p-2">
    <div
      class="
        flex
        text-3xl
        tracking-wider
        font-semibold
        items-center
        justify-center
      "
    >
      Dashboard
    </div>
    <div class="items-center h-4/5 overflow-y-auto">
      <div class="flex flex-wrap w-full xl:justify-between 2xl:justify-center">
        <div
          class="h-28 p-2 w-full sm:w-1/2 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-1/6"
        >
          <div
            class="
              h-full
              flex
              items-center
              shadow-md
              bg-winter-white
              opacity-80
              rounded-xl
              overflow-x-hidden
            "
          >
            <div
              class="
                flex
                items-center
                w-1/4
                justify-center
                border-r-2 border-gray-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-winter-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>

            <div class="ml-4 text-gray-600 w-full">
              <div class="flex justify-around">
                <div>
                  <div class="flex items-center space-x-1">
                    <h1 class="text-3xl font-extrabold">09</h1>
                    <p class="text-sm">Published Survey</p>
                  </div>
                  <p class="text-xs flex">as of March 2021</p>
                </div>
                <div class="flex items-center">
                  <span
                    class="
                      text-xs
                      font-semibold
                      text-white
                      bg-winter-blue
                      rounded-full
                      w-5
                      h-5
                      flex
                      justify-center
                      items-center
                    "
                  >
                    3</span
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-28 p-2 w-full sm:w-1/2 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-1/6"
        >
          <div
            class="
              h-full
              flex
              items-center
              shadow-md
              bg-winter-white
              opacity-80
              rounded-xl
              overflow-x-hidden
            "
          >
            <div
              class="
                flex
                items-center
                w-1/4
                justify-center
                border-r-2 border-gray-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-winter-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>

            <div class="ml-4 text-gray-600">
              <div class="flex items-center space-x-1">
                <h1 class="text-3xl font-extrabold">22</h1>
                <p class="text-sm">Branches Passed</p>
              </div>
              <p class="text-xs flex">as of March 2021</p>
            </div>
          </div>
        </div>
        <div
          class="h-28 p-2 w-full sm:w-1/2 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-1/6"
        >
          <div
            class="
              h-full
              flex
              items-center
              shadow-md
              bg-winter-white
              opacity-80
              rounded-xl
              overflow-x-hidden
            "
          >
            <div
              class="
                flex
                items-center
                w-1/4
                justify-center
                border-r-2 border-gray-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-winter-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>

            <div class="ml-4 text-gray-600">
              <div class="flex items-center space-x-1">
                <h1 class="text-3xl font-extrabold">11</h1>
                <p class="text-sm">Notes</p>
              </div>
              <p class="text-xs flex">as of March 2021</p>
            </div>
          </div>
        </div>
        <div
          class="h-28 p-2 w-full sm:w-1/2 md:w-3/6 lg:w-2/6 xl:w-2/6 2xl:w-1/6"
        >
          <div
            class="
              h-full
              flex
              items-center
              shadow-md
              bg-winter-white
              opacity-80
              rounded-xl
              overflow-x-hidden
            "
          >
            <div
              class="
                flex
                items-center
                w-1/4
                justify-center
                border-r-2 border-gray-500
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-winter-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <div class="ml-4 text-gray-600">
              <div class="flex items-center space-x-1">
                <h1 class="text-3xl font-extrabold">11</h1>
                <p class="text-sm">Clients Done</p>
              </div>
              <p class="text-xs flex">as of March 2021</p>
            </div>
          </div>
        </div>
      </div>
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