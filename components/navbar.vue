<template>
  <div class="">
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
      <button class="mr-10" @click="homepage">หน้าหลัก</button>
      <button class="mr-10" @click="news">ข่าวประชาสัมพันธ์</button>
      <button class="mr-10" @click="services">ระเบียบ ประกาศ ขอบังคับ</button>
      <button class="mr-10" @click="about">เกี่ยวกับเรา</button>
      <v-btn depressed color="success" @click="login"
        >เข้าสู่ระบบ | Log in</v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    homepage() {
      this.$router.push("/");
    },
    news() {
      const newsElement = document.getElementById("newss");
      // this.$router.push({ path: "/", hash: "#newss" });
      if (newsElement) {
        newsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    services() {
      this.$router.push("/services");
    },
    about() {
      this.$router.push("/about");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>