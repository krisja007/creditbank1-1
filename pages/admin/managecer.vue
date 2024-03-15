<template>
  <div class="">
    <NavbarAd />
    <v-row>
      <v-col cols="12">
        manageCer
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavbarAd from "../../components/navbaradmin";
import { mapMutations } from "vuex";
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