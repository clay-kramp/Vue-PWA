import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue';
import Styles from '../components/Styles.vue';
import SpecificStyles from '../components/SpecificStyles.vue';
import Articles from '../components/Articles.vue';
import Subscribe from '../components/Subscribe.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HelloWorld },
    { path: '/styles', name: 'styles', component: Styles },
    { path: '/styles/:style', name: 'specific styles', component: SpecificStyles },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/subscribe', name: 'subscribe', component: Subscribe }
  ]
});

export default router;