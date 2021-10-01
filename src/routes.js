import Cadastro from './components/shared/painel/cadastro/Cadastro.vue';
import Home     from './components/home/home.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];
