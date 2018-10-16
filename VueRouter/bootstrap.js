//window.Vue=require('vue');
//window.axios=require('axios');
import Vue from 'vue';// this is es6 syntax to replace the sentence above.
import VueRouter from 'vue-router';
import axios from 'axios';


window.Vue = Vue;

Vue.use(VueRouter);//tell vue to use this plugin

window.axios = axios;


window.axios.defaults.headers.common={
    'X-Requested-With':'XMLHttpRequest'
};