import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* Chat 컴포넌트를 임포트 */
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  /* mode 설정 추가 */
  mode: 'history',
  routes: [
    /* channel에 대한 라우팅 정의 */
    {
      // :cname -> 동적세그먼트 구현
      path: '/channel/:cname',
      name: 'channel',
      component: Chat
    }
  ]
})
