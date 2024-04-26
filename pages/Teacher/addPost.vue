<template>
  <div class="">
    <navbarteacher />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-start">
          <h2 class="display-1 t-green">หน้าเพิ่มกำหนดการอบรม</h2>
        </v-col>
        <v-col cols="12" class="text-start">
          <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
            <h4 class="title">การอบรมความรู้เบื้องต้นเทคโนโลยี AI</h4>
          </v-card>
        </v-col>

        <v-col cols="12" class="text-start">
          <v-img :src="require('~/assets/ai.png')" width="100%" />
        </v-col>
        <v-col cols="12" class="text-start">
          <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
            <h4 class="title">
              เป็นการอบรมเพื่อให้ความรู้เกี่ยวกับเทคโนโลยี AI และการนำเทคโนโลยี
              AI ไปประยุกต์ใช้ในด้านสายงานต่างๆ
              สามารถเข้ามาติดต่อเพื่อลงทะเบียนอบรมได้ที่: ใต้ตึก จุฬา
              คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
              เบอร์โทรสอบถาม 091-111-222
            </h4>
          </v-card>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-select outlined label="วัน/เดือน/ปี"></v-select>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-select outlined label="เวลาเริ่มต้น"></v-select>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-select outlined label="กำหนดจำนวนผู้เรียน"></v-select>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-select outlined label="เวลาจบอบรม"></v-select>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="mx-auto" style="width: 100%">
            <v-select outlined label="กำหนดหน่วยกิต"></v-select>
          </div>
        </v-col>
        <v-col cols="6" class=""> </v-col>
        <v-col cols="12" class="">
          <v-btn color="green" block>ยืนยัน</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.t-green {
  color: green !important;
  font-weight: 700 !important;
}
</style>