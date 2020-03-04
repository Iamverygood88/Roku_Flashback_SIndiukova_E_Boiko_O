import KidsPage from './modules/KidsPage.js';
import UsersComponent from "./components/UsersComponent.js";
import AdultPage from './modules/AdultPage.js';
import LoginPage from './components/loginComponent.js';




const router = new VueRouter({
  routes: [
    {path: "/", name: "home", component: UsersComponent},
    {path: '/kids', name: "kids", component: KidsPage},
    {path: '/adult', name: "adult", component: AdultPage},
    {path: '/login', name: "login", component: LoginPage}

  ]
})

var vm = new Vue({
  el: "#app",
  router,

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isLoggedIn: true,
      settings: {}
    },

    authenticated: false,
    administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

      
 


  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data');
    // this.getUserData();
    

  },

  methods: {



    setAuthenticated(status, data) {
      this.authenticated = status;
      // handle implicit type coercion (bad, bad part of JS)
      // turn out admin 1 or 0 back into a number
      this.administrator = parseInt(data.isadmin); 
      this.user = data; 
    },

    logout() {
      // delete local session

      // push user back to login page
      this.$router.push({ path: "/login" });
      this.authenticated = false;
      this.administrator = false;

    },

    getUserData() {
      //do a fetch call here and get the user from the DB
      const url = './includes/index.php?getUser=1';

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.user.settings = data[0];
      })
      .catch((error) => console.error(error))

    },
    setUserPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    }, 

    userLogin() {
      // call the login route, and / or load the login component
      console.log('do login / logout on click');
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    getKidMoviesData() {
      //do a fetch call here and get the user from the DB
      const url = '../../includes/index.php?getKidMovie=1';

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.movieKid.settings = data[0];
      })
      .catch((error) => console.error(error))

    },
    setKidMoviesPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    }, 

    getKidTelevisionData() {
      //do a fetch call here and get the user from the DB
      const url = '../../includes/index.php?getKidTelevision=1';

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.televisionKid.settings = data[0];
      })
      .catch((error) => console.error(error))

    },
    setKidTelevisionPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    },

    getMusicData() {
      //do a fetch call here and get the user from the DB
      const url = '../../includes/index.php?getMusic=1';

      fetch(url) // get data from the DB 
      .then(res => res.json()) // translate JSON from DB to plain object
      .then(data => { //use the plain data object (the user)
        console.log(data);
        
        // log it to the console (testing)
        this.music.settings = data[0];
      })
      .catch((error) => console.error(error))

    },
    setMusicPrefs() {
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    }

  }

}).$mount("#app");

// router.beforeEach((to, from, next) =>  {
//   console.log('router guard fired');
//   if(vm.authenticated == false){
//     next("/login");
//   } else {
//     next();
//   }
// })


