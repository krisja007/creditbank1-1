<template>
  <div class="" v-if="!GET_LOGIN">
    <v-app-bar color="1E1E1E" dark>
      <v-toolbar-title>
        <v-img
          max-height="80"
          max-width="300"
          class="ml-4"
          :src="require('~/assets/mju_logo_FOOTER.png')"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="" v-if="!GET_LOGIN">
        <button class="mr-10" @click="teacherhome">หน้าหลัก</button>
        <button class="mr-10" @click="train">เพิ่มกำหนดการอบรม</button>
        <button class="mr-10" @click="addpeople">เพิ่มรายชื่อผู้ผ้่นเกณฑ์</button>
      </div>
      <v-btn depressed color="success" @click="login" v-if="!GET_LOGIN"
        >เข้าสู่ระบบ | Log in</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "navbarteacher",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      GET_LOGIN: "users/GET_LOGIN",
    }),
  },
  methods: {
    teacherhome() {
      this.$router.push("/Teacher/teeacherhome");
    },
    train() {
      this.$router.push("/Teacher/train");
    },
    addpeople() {
      this.$router.push("/Teacher/addpeople");
    },
    login() {
      this.$router.push("/Teacher/login");
    },
  },
};
</script>
