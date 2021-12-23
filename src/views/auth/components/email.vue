<template>
  <div class="">
    <label for="email" class="tracking-wider">{{ label }}</label>
    <div class="flex w-full rounded-xl bg-white h-10 py-2 px-2 shadow-md">
      <input
        type="email"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="
          w-full
          text-input
          focus:outline-none
          rounded-l-lg
          px-2
          py-2
          outline-none
        "
        required
      />
      <span>
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
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "modelValue", "label"],
  setup() {},
};
</script>

<style lang="css" scoped>
</style>