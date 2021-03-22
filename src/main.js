import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
    apiKey: "AIzaSyABL1k0xgqwiLBf5yQLIXH1UJKs28zUinU",
    authDomain: "vue-cli-crm-26e4f.firebaseapp.com",
    projectId: "vue-cli-crm-26e4f",
    storageBucket: "vue-cli-crm-26e4f.appspot.com",
    messagingSenderId: "62362158902",
    appId: "1:62362158902:web:f7aba44d03afe3d9c15597"
})

let app

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})

