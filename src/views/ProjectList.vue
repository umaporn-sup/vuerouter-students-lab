<template>
  <base-card class="w-3/4">
    <div class="flex flex-col justify-start">
      <h1 class="font-semibold text-lg tracking-widest">
        Project List
      </h1>

      <ul class="list-disc list-inside">
        <project-item
          v-for="project in projects"
          :key="project.id"
          :project="project"
        >
        </project-item>
      </ul>
    </div>
  </base-card>
</template>
<script>
import ProjectItem from '../components/projects/ProjectItem.vue'
export default {
  inject: ['projects'],
  components: {
    ProjectItem
  },
  data() {
    return {}
  }
}
</script>
