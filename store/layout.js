export const state = () => ({
  sidebarMinimize: true,
  dropdownShow: false
})

export const getters = {
  sidebarMinimize (state) {
    return state.sidebarMinimize;
  },
  dropdownShow (state) {
    return state.dropdownShow;
  }
}

export const mutations = {
  toggle_sidebar (state) {
    state.sidebarMinimize = !state.sidebarMinimize;
  },
  toggle_dropdown (state) {
    state.dropdownShow = !state.dropdownShow;
  }
}

export const actions = {
  
}