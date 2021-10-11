import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; 
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
// import  'bootstrap/dist/css/bootstrap.css';

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
