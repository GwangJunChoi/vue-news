import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  //ES6 Destructuring
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(response => {
        commit("SET_USER", response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(response => {
  //       commit("SET_LIST", response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  async FETCH_LIST(context, pageName){
    console.log(pageName);
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  }
}; 