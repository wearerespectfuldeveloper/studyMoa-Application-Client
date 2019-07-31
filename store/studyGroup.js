
export const state = () => ({
  categories: [],
  testText: ""
});

export const getters = {
  
}

export const mutations = {
  set_categories (state, payload) {
    state.categories = payload;
  },
  set_testText (state, payload) {
    state.testText = payload;
  }
}

export const actions = {

}