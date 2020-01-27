import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import Styles from '../components/Styles.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HelloWorld },
    { path: '/styles', name: 'styles', component: Styles }
  ]
});

export default router;