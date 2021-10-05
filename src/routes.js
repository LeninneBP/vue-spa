import Cadastro from './components/shared/painel/cadastro/Cadastro.vue';
import Home     from './components/home/home.vue';

export const routes = [
    { path: '', name : 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '*', component: Home, menu: false}
];
