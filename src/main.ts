import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Luna from './components/Luna.vue';
import Luna2 from './components/Luna2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Luna},
    {path: '/xxx', component: Luna2}

  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

