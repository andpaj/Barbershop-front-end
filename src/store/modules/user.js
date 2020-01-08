const state = {
    user: {
      isActive: false
    }
}

const getters = {
    getUser (state) {
      return state.user
    }
}

export default {
    state,
    getters
}