<template>
  <div class="bg-index">
    <v-container>
      <v-img :aspect-ratio="16 / 9" :src="require('~/assets/education.png')">
        <h1 class="ml-10 mt-15">หลักสูตรการศึกษาตลอดชีวิต</h1>
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
      <h1 class="ml-5">รายวิชาที่กำลังเปิดให้ลงทะเบียน</h1>
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
};
</script>

<style scoped>

</style>
