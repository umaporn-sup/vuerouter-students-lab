<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full">
      <div class="flex flex-col px-2">
        <div id="nav" class="flex justify-end m-2 text-xs">
          <router-link to="/">Home</router-link>
          <span class="px-2">|</span>
          <router-link to="/about">About</router-link>
        </div>
        <the-navigator class="mb-2"></the-navigator>
      </div>
      <div class="flex flex-col items-center justify-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TheNavigator from './layouts/TheNavigator.vue'
export default {
  provide() {
    return {
      projects: this.projects
    }
  },
  components: {
    TheNavigator
  },

  data() {
    return {
      projects: [
        { id: 'p001', name: 'Student Project' },
        { id: 'p002', name: 'Faculty Development' },
        { id: 'p003', name: 'Academic Project' },
        { id: 'p004', name: 'Research and Development' }
      ]
    }
  }
}
</script>
