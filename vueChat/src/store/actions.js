import {
  SET_MESSAGE,
  GET_CHANNELS
} from './mutation-types'

export const messages = state => state.messages.slice().reverse()
export const messages = state => state.channles

export default {
  [SET_MESSAGE] ({commit}, message) {
    commit(SET_MESSAGE, message)
  },
  
  // Ajax 통신을 통해 데이터를 불러옴.
  [GET_CHANNELS] ({ commit }) {
    fetch('https://us-centrall-demoapp-1779c.cloudfunctions.net/v1/channels')
    .then((response) => {
      return response.json()
    }).then((json) => {
      commit(GET_CHANNELS, json.channles)
    })

  }
}