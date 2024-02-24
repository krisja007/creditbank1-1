<template>
  <div>
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
      <button class="mr-10" @click="services">ระบบสารสนเทศ</button>
      <button class="mr-10" @click="about">เกี่ยวกับเรา</button>
      <v-btn depressed color="success" @click="login"
        >เข้าสู่ระบบ | Log in</v-btn
      >
    </v-app-bar>
    <v-container>
      <v-img :aspect-ratio="16 / 9" :src="require('~/assets/education.png')">
        <h1 class="ml-10 mt-15">หลักสูตรการศึกษา</h1>
        <v-btn class="ml-10 mt-3" depressed color="success"
          >เลือกหลักสูตร</v-btn
        >
        <h4 class="ml-10 mt-10">คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์</h4>
        <h4 class="ml-10 mt-0">มหาวิทยาลัยแม่โจ้</h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-phone</v-icon>0 5387 3827
        </h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-map-marker</v-icon>Nong Han, San Sai
          District, Chiang Mai 50290
        </h4>
        <h4 class="ml-10 mt-2">
          <v-icon large color="black">mdi-email</v-icon>science@mju.ac.th
        </h4>
      </v-img>
    </v-container>
    <v-container>
      <h1 class="ml-5">ข่าวประชาสัมพันธ์</h1>
      <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="require('~/assets/education.png')"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // ข้อมูลเกี่ยวกับเรา
    };
  },
  methods: {
    homepage() {
      this.$router.push('/')
      console.log("");
    },
    news() {
       this.$router.push('/news')
      console.log("");
    },
    services() {
       this.$router.push('/services')
      console.log("");
    },
    about() {
      this.$router.push({ path: "about" });
      console.log("");
    },
    login() {
      this.$router.push({ path: "login" });
      console.log("");
    },
  },
};
</script>
