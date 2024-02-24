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
      <h1>เกี่ยวกับเรา</h1>
      <h5>about</h5>
    </v-container>
  </div>
</template>
