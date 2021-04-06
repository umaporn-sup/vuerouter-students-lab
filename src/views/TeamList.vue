<template>
  <base-card class="w-3/4">
    <div class="flex flex-col justify-center ">
      <h1 class="font-semibold text-lg tracking-widest">Programming Team</h1>
      <ul>
        <team-member
          v-for="member in members"
          :key="member.id"
          :member="member"
        ></team-member>
      </ul>
    </div>
  </base-card>
</template>
<script>
import TeamMember from '../components/teams/TeamMember.vue'
export default {
  components: {
    TeamMember
  },
  data() {
    return {
      members: [
        {
          title: 'Asst.Prof.Dr.',
          name: 'Kriengkrai Porkaew',
          src: 'kriengkrai.jpg'
        },

        {
          title: 'Ajarn',
          name: 'Pichet Limvajiranan',
          src: 'pichet.jpg'
        },
        {
          title: 'Ajarn',
          name: 'Sanit Sirisawatvatana',
          src: 'sanit.jpg'
        },
        {
          title: 'Asst.Prof.Dr.',
          name: 'Umaporn Supasitthimethee',
          src: 'umaporn.jpg'
        },
        {
          title: 'Mr.',
          name: 'Tisanai Chatuporn',
          src: 'tisanai.jpg'
        }
      ]
    }
  }
}
</script>
