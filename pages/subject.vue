<template>
  <div>
    <h1 class="mt-10 text-center">ข้อมูลหลักสูตร</h1>
    <v-card depressed color="grey lighten-3">
      <v-col cols="4" md="4" class="d-flex-justify-center">
        <div class="container">
        <v-select class="mt-10" outlined label="เลือกวิชา"></v-select>
        </div>
  <v-btn class="ml-15" depressed color="success"
          >ข้อมูลหลักสูตร</v-btn
        >
        <v-btn class="mt-15" depressed color="success">ยืนยัน</v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.v-select {
  margin: 0;
}

</style>
