import {SET_MESSAGE} from './mutation-types'

export const SET_MESSAGE = "SET_MESSAGE"
export const GET_CHANNELS = "GET_CHANNELS"

export default {
  [SET-MESSAGE] (state, message) {
    state.messages.push(message)
  }
}

