<template>
  <div>
    <h1 class="my-10 text-center">ข้อมูลหลักสูตร</h1>
    <v-card
      depressed
      color="grey lighten-3"
      class=""
    >
      <v-row no-gutters>
        <v-col cols="8" md="8" lg="8" class="d-flex mx-auto justify-end">
          <div class="d-flex justify-start" style="width: 360px">
            <v-select
              class="mt-10 px-2"
              outlined
              label="เลือกวิชา"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="4" md="4" lg="4" class="d-flex justify-start align-center pl-5 pt-2">
          <v-btn class="" depressed color="success" @click="goDetail"
            >หลักสูตร</v-btn
          >
        </v-col>
        <v-col cols="12" class="text-center mb-5">
          <v-btn class="" depressed color="success">ยืนยัน</v-btn>
        </v-col>
      </v-row>
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
