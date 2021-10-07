import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter)


const router = new VueRouter({ 
  routes ,
  mode: 'history'
});
/* Quando tem o mesmo nome, 
 exemplo "routes: routes:" 
 pode ser deixado apenas um "routes" */

Vue.use(VeeValidate);



new Vue({                     // <-----------------
  el: '#app',               // <--- View instance |   
   router,                   // <------------------
  render: h => h(App)     
})
