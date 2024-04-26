<template>
  <div class="">
    <NavbarAd />
    <v-row>
  <v-container>
      <v-card depressed color="green lighten-2">
        <h3 class="ml-6">จำนวนผู้ใช้ที่ออนไลน์</h3>   
        <h3 class="ml-6">จำนวนผู้ใช้ที่สมัครใช้งานใหม่วันนี้</h3>
      </v-card>
    </v-container>
    </v-row>
    <v-container>
      <v-card depressed color="green lighten-2">
     <p class="display-1 text-center">จำนวนคำร้องขอเปิดสร้างโพสต์</p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavbarAd from "../../components/navbaradmin";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {};
  },
  created() {
    this.SET_LOGIN(true);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
  },
};
</script>

<style scoped>
</style>
