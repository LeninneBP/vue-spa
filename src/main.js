import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './assets/css/teste.css'
import './assets/js/teste'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.js'

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({ 
  routes ,
  mode: 'history'
});
/* Quando tem o mesmo nome, 
 exemplo "routes: routes:" 
 pode ser deixado apenas um "routes" */

 Vue.use(VeeValidate, {
   locale: 'pt_BR',
   dictionary: {
     pt_BR: {
       messages: msg
     }
   }
 });



new Vue({                     // <-----------------
  el: '#app',               // <--- View instance |   
   router,                   // <------------------
  render: h => h(App)     
})
