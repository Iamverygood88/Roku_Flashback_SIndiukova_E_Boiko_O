import KidsPage from './components/KidsPage.js';
import UsersComponent from "./components/UsersComponent.js";
import AdultPage from './components/AdultPage.js';
import LoginPage from './components/loginComponent.js';
import TheUpdateMoviesForm from './components/UpdateMoviesComponent.js';
import TheUpdateTVForm from './components/UpdateTVComponent.js';
import TheUpdateMusicForm from './components/UpdateMusicComponent.js';




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
    { path: "/updatemovies", name: "update_movies", component: TheUpdateMoviesForm },
    { path: "/updatetv", name: "update_tv", component: TheUpdateTVForm },
    { path: "/updatemusic", name: "update_music", component: TheUpdateMusicForm }


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



