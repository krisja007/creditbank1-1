<template>
  <div class="">
    <NavbarAd />
    <v-card depressed color="light-green lighten-4 ">
      <v-row>
        <v-col class="">
          <v-btn
            class="headline pa-7"
            width="100%"
            elevation="5"
            @click="goadminpage"
          >
            <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลักแอดมิน
          </v-btn>
        </v-col>

        <v-col cols="12">
          <h2 class="display-1 text-center">รายชื่อผู้ขอเปิดสิทธิ์สร้างโพส</h2>
        </v-col>

        <v-card
          class="py-10 mx-7 mb-5"
          width="100%"
          elevation="8"
          rounded="xl"
          v-for="(item, admin) in approve"
          :key="admin"
        >
          <v-row>
            <v-col cols="6" class="pl-10">
              <p class="title tX-color">ชื่อ: {{ item.name }}</p>
              <p class="title mr-10">สถานะ: {{ item.role }}</p>
              <p class="title tX-color">สถานที่เรียน: {{ item.location }}</p>
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-center">
              <v-btn class="mr-5" depressed color="success" @click="goDetail"
                >ยืนยัน</v-btn
              >
              <v-btn class="ml-5" depressed color="red darken-2" @click="goDetail"
                >ปฏิเสธ</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
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
      ],
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