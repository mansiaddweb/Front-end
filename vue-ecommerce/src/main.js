import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import HeaderLayout from './components/layouts/headerLayout.vue';
import FooterLayout from './components/layouts/footerLayout.vue';
import HomePage from './components/layouts/homePage.vue';

import ProductDetails from './components/products/productDetails.vue';
import PlaceOrder from './components/contact/PlaceOrder.vue';

const app = createApp(App);

app.component('header-layout',HeaderLayout);
app.component('footer-layout',FooterLayout);
app.component('home-page',HomePage);
app.component('product-details',ProductDetails);

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', redirect:'/home'},
        {path:'/home', component: HomePage},
        {path:'/product-details', component: ProductDetails},

        { path:'/place-order', component:PlaceOrder}
    ]
});
app.use(router);

app.mount('#app');

