import KidsPage from './components/KidsPage.js';
import UsersComponent from "./components/UsersComponent.js";
import AdultPage from './components/AdultPage.js';
import LoginPage from './components/loginComponent.js';
import AdminPage from './components/AdminComponent.js';




const router = new VueRouter({
  routes: [
    {path: "/", name: "home", component: UsersComponent},
    {path: '/kids', name: "kids", component: KidsPage},
    {path: '/adult', name: "adult", component: AdultPage,
    beforeEnter: (to, from, next) => {
      console.log('router guard fired');
      if(vm.authenticated == false){
        next("/login");
      } else {
        next();
      }
    }
  },
    {path: '/login', name: "login", component: LoginPage},
    {path: '/admin', name: "adminpanel", component: AdminPage},


  ]
})

var vm = new Vue({
  el: "#app",
  router,

  data: {

    authenticated: false, 
    administrator: false,
    user: [],

  },

  methods: {

    setAuthenticated(status, data) {
      this.authenticated = status;
      this.user = data; 
    },

    logout() {
      this.$router.push({ name: "home" });
      this.authenticated = false;

  },


  }

}).$mount("#app");



