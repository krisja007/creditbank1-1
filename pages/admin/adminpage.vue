<template>
  <div class="" >
    <NavbarAd />
<<<<<<< HEAD
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
=======
    <v-row>
  <v-container>
      <v-card depressed color="green lighten-2">
        <h3 class="ml-6">จำนวนผู้ใช้ที่ออนไลน์</h3>   
        <h3 class="ml-6">จำนวนผู้ใช้ที่สมัครใช้งานใหม่วันนี้</h3>
>>>>>>> 6d74dc8e686b29779c219e9104d7b37d9bf62318
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
<<<<<<< HEAD
=======
    </v-row>
    <v-container>
      <v-card depressed color="green lighten-2">
     <p class="display-1 text-center">จำนวนคำร้องขอเปิดสร้างโพสต์</p>
      </v-card>
    </v-container>
>>>>>>> 6d74dc8e686b29779c219e9104d7b37d9bf62318
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

<<<<<<< HEAD
<style>

=======
<style scoped>
>>>>>>> 6d74dc8e686b29779c219e9104d7b37d9bf62318
</style>
