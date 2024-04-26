<template>
  <div>
    <h1 class="mt-10 text-center">ข้อมูลหลักสูตร</h1>
   <v-card depressed color="grey lighten-3" class="d-flex align-center justify-center">
  <v-col cols="5" md="6" class="d-flex flex-grow">
    <v-select class="mt-10" outlined label="เลือกวิชา"></v-select>
    <v-btn class="ml-10 mt-10" depressed color="success" @click="goDetail">ข้อมูลหลักสูตร</v-btn>
  </v-col>
   <v-btn class="ml-10 mt-10" depressed color="success">ยืนยัน</v-btn>
</v-card>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
       ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
    goDetail() {
      this.$router.push("/users/detailsubject");
    },
  },
};

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
