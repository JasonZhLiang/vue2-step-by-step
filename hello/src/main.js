import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

//we basically compile every thing down into one bundler file that every browser can understand. that's the webpack come to play.
//npm install -g vue-cli; this will install vue-cli using vue-cli you can scaffold a project with vue-cli, in order to inject vue-loader
//vue-loader is a loader for webpack that allows you to author Vue components in a format called Single-File Components (SFCs):
//vue init webpack-simple hello-vue; will initial a project using webpack-simple template, this will as simple as possible a vue plus webpack example.
//npm install; will install project dependencies by reading package.json file devDependencies and pull in all those dependencies.
//npm run dev; will point to package.json scripts dev, boots up a server
//using vue-cli--scaffold a project using vew-loader with vue-cli
