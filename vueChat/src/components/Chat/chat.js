import { mapGetters, mapActions} from 'vuex'
import { 
  GET_CHANNELS,
  SET_MESSAGE 
} from '../../store/mutation-types'

export default {
  name: 'chat',
  mounted() {
    this.GET_CHANNELS()
  },

  computed: {
    ...mapGetters([
      'messages',
      'channels'
    ]),
  },

  methods: {
    ...mapActions([
      SET_MESSAGE,
      GET_CHANNELS
    ]),

    send_message() { // message값을 message에 저장한 다음 message를 초기화.
      this.SET_MESSAGE(this.message)
      // this.messages.push(this.message)
      this.message = ""
    }
  },
  // data()는 함수 형태로 데이터 정의함
  // 이 데이터는 해당 컴포넌트 내에서만 유효함. 
  data() {
    return { 
      // channels: ["general", "random"],
      message: "",
      // messages: [] // 폼에서 입력한 데이터를 배열에 저장함
    }
  }
}