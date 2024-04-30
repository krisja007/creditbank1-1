<template>
      <div class="">
    <NavbarAd />
    <v-card depressed color="light-green lighten-4 ">
    <v-row>
 <v-col class="">
      <v-btn class="headline pa-7" width="100%" elevation="5" @click="goadminpage">
        <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลักแอดมิน
      </v-btn>
    </v-col>
    
<v-col cols="12">
<h2 class="display-1 text-center">รายชื่อผู้ขอเปิดสิทธิ์สร้างโพส</h2>      
</v-col>
<v-container>
<v-card class="py-10"
            width="100%"
            elevation="8"
            rounded="xl"
            v-for="(item, admin) in approve"
            :key="admin"
>                         
              <v-row>
                <v-col cols="6">
                  <p class="title tX-color">ชื่อ: {{ item.name }}</p></v-col
                >
                <v-col cols="7">
                  <p class="title mr-10">สถานะ: {{ item.role }}</p>
                  </v-col>
                <v-col cols="10"
                  ><p class="title tX-color">สถานที่เรียน: {{ item.location }}</p>
                </v-col>
             <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="success" @click="goDetail"
            >ยืนยัน</v-btn
          >
        </v-col>
             <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="red darken-2" @click="goDetail"
            >ปฏิเสธ</v-btn
          >
        </v-col>
        
        </v-row>          
</v-card>
<v-card class="py-10"
            width="100%"
            elevation="8"
            rounded="xl"
            v-for="(item, admin) in approve"
            :key="admin"
>                         
              <v-row>
                <v-col cols="6">
                  <p class="title tX-color">ชื่อ: {{ item.name }}</p></v-col
                >
                <v-col cols="7">
                  <p class="title mr-10">สถานะ: {{ item.role }}</p>
                  </v-col>
                <v-col cols="10"
                  ><p class="title tX-color">สถานที่เรียน: {{ item.location }}</p>
                </v-col>
             <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="success" @click="goDetail"
            >ยืนยัน</v-btn
          >
        </v-col>
             <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="red darken-2" @click="goDetail"
            >ปฏิเสธ</v-btn
          >
        </v-col>
        
        </v-row>          
</v-card>
</v-container>

    </v-row> 
   
    </v-card>
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
    return {
      approve: [
        {
          name: " อาจารย์แสนดี บุญรอด ",
          role: "อาจารย์",
          location: "มหาวิทยาลัยแม่โจ้ เชียงใหม่ ",


        },
      ]
    };
  },
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

<style scoped>
</style>