<template>
  <div >
    <NavbarAd />
<<<<<<< HEAD
    <h1 class="text-center">หน้าจัดการโพสต์ของ Admin</h1>

    <v-row row="10" justify="center">
      <v-col cols="10">
        <v-card class="green accent-3 mt-5 mx-auto" >
          <v-card-title>
          <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      > 
    </v-avatar>
    <span class="ml-2 text-h6 white--text font-weight-bold">อาจารย์ สมสัก เที่ยงตรง </span>

    <v-spacer></v-spacer>

    <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-card-title>

        <v-spacer></v-spacer>

        <v-img src="~assets/ai.png"></v-img>

        <v-spacer></v-spacer>

        <v-text>
          <span class="ml-2 text-h6 white--text font-weight-bold"><h2>หัวข้อการอบรม: การอบรมความรู้เบื้องต้นเทคโนโลยี AI</h2> </span>
          <span class="ml-2 text-h6 white--text font-weight-bold"><h2>จำนวนที่นั่ง:    30 คน</h2> </span>
          <span class="ml-2 text-h6 white--text font-weight-bold"><h2>เวลา:  9.00 - 15.00 น.</h2></span>
          <span class="ml-2 text-h6 white--text font-weight-bold"><h2>วัน/เดือน/ปี:  15/04/2024</h2></span>
        </v-text>
    </v-card>
      </v-col>
    </v-row>

=======
  <v-card depressed color="light-green lighten-4 " class="mx-100"
            width="100%"
            elevation="8"
            rounded="xl"
  >
    <v-row>
         <v-col class="">
      <v-btn class="headline pa-7" width="100%" elevation="5" @click="goadminpage">
        <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลักแอดมิน
      </v-btn>
    </v-col>
    
      <v-col cols="12">
        manageSubject
      </v-col>
    </v-row>
    </v-card>
>>>>>>> 6d74dc8e686b29779c219e9104d7b37d9bf62318
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapMutations } from "vuex";
export default {
  components: {
    NavbarAd,
  },
  data: () => ({
      items: [
        { title: 'แก้ไขโพสต์' },
        { title: 'ลบโพสต์' },
      ]
    }),
  created() {
    this.SET_LOGIN(true);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
     goadminpage() {
      this.$router.push("/admin/adminpage");
      this.citizenID = "";
    }, 
  },
};
</script>

<style>
</style>