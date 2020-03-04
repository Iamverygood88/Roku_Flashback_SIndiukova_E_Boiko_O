import KidsPage from './modules/KidsPage.js';
import UsersComponent from "./components/UsersComponent.js";
import AdultPage from './modules/AdultPage.js';

Vue.component('player', {
  props: ['movie'],

  template: `
      <div>
      <h3 class="movie-title">{{ movie.videotitle }}</h3>
      <video :src="'video/'+ movie.vidsource" controls autoplay></video>
      <div class="movie-details">
        <p>{{ movie.videodescription }}</p>
      </div> 
      </div>
  `

})

const router = new VueRouter({
  routes: [
    {path: "/", name: "home", component: UsersComponent},
    {path: '/kids', name: "kids", component: KidsPage},
    {path: '/adult', name: "adult", component: AdultPage}

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


    // this data would also come from the database, but we'll just mock it up for now
 


    showDetails: false
  },

  created: function() {
    // run a fetch call and get the user data
    console.log('created lifecycle hook fired here, go get user data');
    // this.getUserData();

  },

  methods: {
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

});