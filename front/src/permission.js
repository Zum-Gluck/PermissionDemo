import router from './router'
import store from './store'
// import { Message } from 'element-ui'
// import { setToken, getToken } from '@/utils/token.js'
import { getToken } from '@/utils/token.js'

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    await store.dispatch('getUserInfo')
    next()
  } else  {
    /* has no token*/
    if (to.path !== '/login') {
      next('login')
    } else {
      next()
    }
  }
})

