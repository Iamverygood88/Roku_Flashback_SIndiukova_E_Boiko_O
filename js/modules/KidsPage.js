import KidsMovie from "./kidMovies.js";
import kidTelevision from "./kidTelevision.js";
import musicSection from "./music.js";

export default {
    template: `
    <section class="kids-section">
    <div class="header-kids">
    <div>
    <h1 class="user-message"> {{message}} </h1>
    <h2 class="kids-message"> {{kidMess}} </h2>
    </div>
    <input type="text" placeholder="" class="colortext">
    <img :src="'images/' + search" alt="search button" class="search-button">
    <img :src="'images/' + logOut" alt="log out button" class="logOut-button">
    <img :src="'images/' + avatarIcon" alt="Avatar Icon" class="avatar-button">
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{movieHeader}} </h2>
    <div class="movie-flex">
    <movieKid v-for="movieKid in kidMoviesList" :moveskid="movieKid"></movieKid>
    </div>
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{televisionHeader}} </h2>
    <div class="movie-flex">
    <televisionKid v-for="televisionKid in kidTelevisionList" :televisionK="televisionKid"></televisionKid>
    </div>
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{musicHeader}} </h2>
    <div class="movie-flex">
    <music v-for="music in  musicList" :musicS=" music"></music>
    </div>
    </div>
    <footer> 
    <div class="margin-footer">
    <div>
    <h2>{{FAQ}}</h2>
    <p>Special offers</p>
    <p>How to use Roku</p>
    <p>Channel store</p>
    <p>How to pay</p>
    <p>How to explore</p>
    </div>
    <div>
    <h2>{{S}}</h2>
    <p>Support home</p>
    <p>Account</p>
    <p>Billing</p>
    <p>Your orders</p>
    <p>Agreement</p>
    </div>
    <div>
    <h2>{{C}}</h2>
    <p>Call back</p>
    <p> Public relations</p>
    <p>Resellers</p>
    <p>Call centre</p>
    </div>
    <div>
    <h2>{{P}}</h2>
    <p>Roku TV</p>
    <p> Roku music</p>
    <p>Roku movies</p>
    <p>Mobile app</p>
    </div>
    <div>
    <h2>{{CP}}</h2>
    <p>About us</p>
    <p>News</p>
    <p>Investors</p>
    <p>License</p>
    </div>
    </div>
    </footer>
    </section> 

    `, 

    

    data: function() {
        return {
            message: "Roku",
            kidMess: "Kids",
            search: "search.svg",
            logOut: "in_out.svg",
            avatarIcon: "login1.svg",
            movieHeader: "Movies",
            televisionHeader: "Television",
            musicHeader: 'Music',
            FAQ: 'FAQ',
            S: 'Support',
            C: 'Contact',
            P: 'Products',
            CP: 'Company',
            kidMoviesList: [],
            kidTelevisionList: [],
            musicList: []



        }
    },

    created: function() {
        // this will fire when the component gets build
        this.fetchAllKidMovies();
        this.fetchAllKidTelevision();
        this.fetchAllMusic();
    },

    methods: {
        fetchAllKidMovies() {
            let url = `./includes/index.php?getKidMovies=true`;
            fetch(url)
            .then(res => res.json())
            .then(data => {this.kidMoviesList = data})
            .catch((err) => {console.error(err)})
        },

        fetchAllKidTelevision() {
            let url = `./includes/index.php?getKidTelevision=true`;
            fetch(url)
            .then(res => res.json())
            .then(data => {this.kidTelevisionList = data})
            .catch((err) => {console.error(err)})


    },    
    fetchAllMusic() {
        let url = `./includes/index.php?getMusic=true`;
        fetch(url)
        .then(res => res.json())
        .then(data => {this.musicList = data})
        .catch((err) => {console.error(err)})


},

    
},

    components: {
        televisionKid: kidTelevision, 
        movieKid: KidsMovie,
        music: musicSection
        
    },

    
       
        
   
   
}