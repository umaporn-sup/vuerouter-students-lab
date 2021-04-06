<template>
  <div>
    <h1 class="text-xs tracking-widest">
      {{
        member.name === 'Kriengkrai Porkaew' ? 'Team Advisor' : 'Team Member'
      }}
    </h1>
  </div>
  <li class="flex flex-row items-center m-2">
    <img
      class="w-18 h-24"
      :src="require(`../../assets/team-photos/${member.src}`)"
    />
    <span class="text-sm p-2">{{ member.title }} {{ member.name }}</span>
  </li>
</template>
<script>
export default {
  props: ['member']
}
</script>
