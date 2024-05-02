<template>
  <div class="" >
    <NavbarAd />
  <v-container  class="green darken-4 mx-auto">

        <h1 class="mx-auto text-center white--text" >จำนวนคำร้องขอเปิดสร้างโพสต์</h1>
      <v-spacer></v-spacer>
      
      <v-col cols="12">
        <v-card color="mx-auto text-center green darken-1" elevation="10">
        <v-card-title >
          <h1  class="text-lg-h6 white--text"> รายชื่อผู้ขอเปิดสิทธิ์: อาจารย์ แสนดี เดินไม่หนีห่าง </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> ชื่อการเรียนรู้: การอบรมเทคโนโลยี Ai </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> วัน/เดือน/ปี: 05/03/2024 </h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="green darken-3 text-center">
               <p class="font-weight-medium white--text">รายละเอียด</p> 
              </v-btn>
            </v-card-actions>
      </v-card>
      </v-col>

      <v-col cols="12">
        <v-card class="mt-5" color="mx-auto text-center green darken-1" elevation="10">
        <v-card-title >
          <h1  class="text-lg-h6 white--text"> รายชื่อผู้ขอเปิดสิทธิ์: อาจารย์ แสนดี เดินไม่หนีห่าง </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> ชื่อการเรียนรู้: การอบรมเทคโนโลยี Ai </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> วัน/เดือน/ปี: 05/03/2024 </h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="green darken-3 text-center">
               <p class="font-weight-medium white--text">รายละเอียด</p> 
              </v-btn>
            </v-card-actions>
      </v-card>

      </v-col>

      <v-col cols="12">
        <v-card class="mt-5" color="mx-auto text-center green darken-1" elevation="10">
        <v-card-title >
          <h1  class="text-lg-h6 white--text"> รายชื่อผู้ขอเปิดสิทธิ์: อาจารย์ แสนดี เดินไม่หนีห่าง </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> ชื่อการเรียนรู้: การอบรมเทคโนโลยี Ai </h1>
            </v-card-title>
            <v-card-title>
              <h1 class="pt-n2  text-lg-h6 white--text "> วัน/เดือน/ปี: 05/03/2024 </h1>
            </v-card-title>
            <v-card-actions>
              <v-btn color="green darken-3 text-center">
               <p class="font-weight-medium white--text">รายละเอียด</p> 
              </v-btn>
            </v-card-actions>
      </v-card>
      </v-col>
      
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

<style>

</style>
