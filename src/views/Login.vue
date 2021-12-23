<template>
  <div>
    <h1>Log in</h1>
    <div
      class="
        h-screen
        flex
        items-center
        w-full
        px-4
        py-10
        bg-cover
        card
        bg-base-200
      "
      style="background-image: url('https://picsum.photos/id/314/1000/300')"
    >
      <div class="card glass lg:card-side text-neutral-content">
        <figure class="p-6">
          <img
            src="https://picsum.photos/id/1005/300/700"
            class="rounded-lg shadow-lg"
          />
        </figure>
        <div class="max-w-md card-body">
          <h2 class="card-title">Glass</h2>

          <div class="card bordered">
            <figure>
              <img src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Top image
                <div class="badge mx-2 badge-secondary">NEW</div>
              </h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div class="justify-end card-actions">
                <button class="btn btn-secondary">More info</button>
              </div>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn glass rounded-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        firstName: "Joseph",
        lastName: "Salac",
        middleName: "Salac",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>