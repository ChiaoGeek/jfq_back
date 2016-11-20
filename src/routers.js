import Router from 'vue-router'

// import leftDown from 'components/left-down/left-down'
import login from './views/login/index'
import investmentIndex from './views/investment/index'
import marketIndex from './views/market/index'
import engineeringIndex from './views/engineering/index'
import financeIndex from './views/finance/index'
import userIndex from './views/user/index'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'login',path: '/', component: login },
    { name: 'investmentIndex',path: '/investment/index', component: investmentIndex },
    { name: 'marketIndex',path: '/market/index', component: marketIndex },
    { name: 'engineeringIndex',path: '/engineering/index', component: engineeringIndex },
    { name: 'financeIndex',path: '/finance/index', component: financeIndex },
    { name: 'userIndex',path: '/user/index', component: userIndex },

  ]
})
