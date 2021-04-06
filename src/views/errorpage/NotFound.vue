<template>
  <base-card class="w-3/4">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-row space-x-2">
        <svg
          class="fill-current text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          />
        </svg>
        <h2 class="text-xl font-semibold text-red-600">
          Page not found!
        </h2>
      </div>

      <h3 class="text-black text-sm font-semibold">
        Back to our
        <router-link to="/" class="text-blue-600 underline">Home</router-link>
      </h3>
    </div>
  </base-card>
</template>
