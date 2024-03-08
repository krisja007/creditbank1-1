<template>
  <div class="bg-index">
    <v-container>
      <v-img :aspect-ratio="16 / 9" :src="require('~/assets/education.png')">
        <h1 class="ml-10 mt-15">หลักสูตรการศึกษาตลอดชีวิต</h1>
        <v-btn class="ml-10 mt-3" depressed color="success" @click="goSubject"
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
<v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text">
            รายวิชาที่กำลังเปิดให้ลงทะเบียน {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
  
</script>
<style scoped>

</style>
