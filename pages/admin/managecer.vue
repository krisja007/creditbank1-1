<template>
  <v-main>
    <v-container >
      <NavbarAd />

       <h1 class=" pl-15 mx-auto"> รายชื่อของผู้ขอเปิดสิทธิ์สร้างโพสต์ </h1>
       <v-spacer></v-spacer>
       <v-card class="mt-8 mr-10  mx-auto blue-grey lighten-4">
        <v-row>
          <v-card-text>
            <h3>ชื่อ: อาจารย์แสนดี บุญรอด</h3>
            <h3>สถานะ: อาจารย์ </h3>
            <h3>โรงเรียน: ต้นกล้าเชียงใหม่</h3>

            <v-col class="pl-15">
              <v-btn elevation="4" color="green darken-2">
                <h2 color="white--text">ยืนยัน</h2>
              </v-btn>
            </v-col>

            <v-row>
              <v-col class="pl-15">
              <v-btn elevation="4" color="red darken-3">
                <h2 color="white--text">ปฏิเสธ</h2>
              </v-btn>
            </v-col>
            </v-row>
          </v-card-text>
        </v-row>
       </v-card>



    </v-container>
  </v-main>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapMutations } from "vuex";
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