<template>
  <div class="">
    <NavbarAd />
    <v-row>
      <v-col cols="12">ภาพรวม</v-col>
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