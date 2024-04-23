<template>
  <div class="">
    <NavbarAd />
    <v-row>
  <v-container>
      <v-card depressed color="grey lighten-2">
        <h1 class="ml-6">หลักสูตรสะสมหน่วยกิต(Credit Bank)</h1>
        <h2 class="ml-6">
          การสะสมหน่วยการเรียนรู้ ( Credit Bank) หรือ ธนาคารหน่วยกิต
          เป็นการเปิดโอกาสให้ผู้เรียนและประชาชนได้เรียนและทำงานไปในเวลาเดียวกันโดยสามารถนําผลการเรียนรู้
          หรือการฝึกอบรมเปิดสอนอยู่ทั้งในระดับปริญญาตรีและบัณฑิตศึกษาเป็นการตอบโจทย์นักเรียนและบุคคลทั่วไปที่มีแผนจะเข้ามาศึกษาต่อที่สถาบันฯ
          หรือผู้ที่สนใจเพิ่มพูนความรู้และพัฒนาทักษะตลอด
          นักศึกษาจนการเรียนรู้ตลอดชีพ
        </h2>
      </v-card>
    </v-container>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavbarAd from "../../components/navbaradmin";
export default {
  components: {
    NavbarAd,
  },
  data() {
    return {};
  },
  created() {
    this.SET_LOGIN(true);
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: "users/SET_LOGIN",
    }),
  },
};
</script>

<style>
</style>
