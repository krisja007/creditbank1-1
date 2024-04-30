<template>
  <div class="">
    <navbarteacher />
    <v-container>
      <v-row>
        <v-col cols="12" class="text-start">
          <h2 class="display-1 t-green text-center">หน้าเพิ่มกำหนดการอบรม</h2>
        </v-col>
        <v-col cols="12" class="text-start">
          <v-card
            class="py-10 text-center"
            width="100%"
            elevation="8"
            rounded="xl"
          >
              <v-text-field
            class="mt-1"
            outlined
            label="เพิ่มห้วการอบรม"
            v-model="nameSubject"
            
          ></v-text-field>
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
            <v-text-field
            class="mt-1"
            outlined
            label="เพิ่มข้อมูลรายวิชา"
            v-model="detailSub">
          

            </v-text-field>
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