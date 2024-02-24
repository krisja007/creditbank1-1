<template>
  <v-row class="text-center">
    <v-col class="">
      <v-btn class="headline pa-7" width="100%" elevation="5" @click="goHome">
        <v-icon large>mdi mdi-home</v-icon>กลับสู่หน้าหลัก
      </v-btn>
    </v-col>
    <v-col cols="12" class="mt-8">
      <p class="display-2 text-center">เข้าสู่ระบบ</p>
    </v-col>
    <v-col cols="12">
      <v-card
        width="550px"
        class="mx-auto mt-10 outlined shaped"
        rounded="xl"
        elevation="8"
      >
        <v-card-text class="pb-0">
          <p class="title">เลขบัตรประจำตัวประชาชน 13 หลัก (Passport Number)</p>
          <v-text-field
            class="mt-9"
            outlined
            label="กรุณากรอกเลขบัตรประชาชน"
            placeholder=""
            v-model="citizenID"
            maxlength="13"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="">
          <v-btn
            class="mx-auto mb-5 rounded-md"
            color="primary"
            @click="checkUser"
            ><v-icon>mdi mdi-magnify</v-icon>ตรวจสอบข้อมูลผู้ใช้</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      citizenID: "",
      checkCitizenId: "",
    };
  },
  watch: {
    citizenID(newVal) {
      if (newVal.length === 13) {
        this.citizenID =
          newVal.slice(0, 3) +
          "-" +
          newVal.slice(3, 6) +
          "-" +
          newVal.slice(6, 10) +
          "-" +
          newVal.slice(10, 12) +
          "-" +
          newVal.slice(12);
      }
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
      this.citizenID = "";
    },
    checkUser() {
      this.checkCitizenId = this.citizenID.replace(/-/g, "");
    },
  },
};
</script>

<style scoped>
</style>
