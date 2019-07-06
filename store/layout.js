export const state = () => ({
  sidebarMinimize: true,
  dropdownShow: false
})

export const getters = {
  
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