export default {
  //   checkAuth() {
  //     return localStorage.getItem("token");
  //   },

  registerData({ commit }, data) {
    return this.$axios
      .$post("api/reg/registerData", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
  addSub({ commit }, data) {
    return this.$axios
      .$post("api/sub/addSub", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
