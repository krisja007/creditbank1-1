<template>
  <div id="bg-index">
    <NavbarTea/>
    <v-container color="grey">
      <v-img :aspect-ratio="16 / 9" :src="require('~/assets/education.png')">
        <v-img
          max-height="90"
          max-width="90"
          class="ml-10 mt-10"
          :src="require('~/assets/mju_logo.png')"
        >
        </v-img>
        <p class="display-3 text-center">ยินดีต้อนรับเข้าสู่  ธนาคารหน่วยกิต</p>
      </v-img>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavbarTea from "../../components/navbarteacher.vue";
export default {
component:{
NavbarTea,
},
  methods: {
    ...mapMutations({
      SET_LOGIN: 'users/SET_LOGIN'
    }),
  },
  mounted() {},
};
</script>
<style scoped>
p {
  color: white; 
}
</style>