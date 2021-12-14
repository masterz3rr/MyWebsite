import Vue from 'vue';
import AOS from "aos";
import "aos/dist/aos.css";

require('./bootstrap');


window.Vue = require('vue').default;

Vue.component('profile-first', require('./components/ProfileFirst.vue').default);
Vue.component('about-website', require('./components/AboutWebsite.vue').default);
Vue.component('home-screen', require('./components/HomeScreen.vue').default);

const app = new Vue({
    el: '#app',
    created() {
        AOS.init();
    }
});
