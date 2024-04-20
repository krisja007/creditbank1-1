export default {
  //   checkAuth() {
  //     return localStorage.getItem("token");
  //   },

  register({ commit }, data) {
    return this.$axios
      .$post("api/reg/register", data)
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  },
};
