import Vue from 'vue';
import App from './app.vue';
import './index.less';
import Vix from '../src';

// require.ensure([], require => {
//     Vue.use(require('../../../src').default);
// }, 'vix');
Vue.use(Vix);

new Vue({
    el: '#app',
    render: h => h(App)
});