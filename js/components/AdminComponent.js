export default {
    template: `
    <section class="adult-section">
    <div class="header-kids">
    <div>
    <h1 class="user-message"> {{message}} </h1>
    </div>
    <input type="text" placeholder="" class="colortext">
    <img :src="'images/' + search" alt="search button" class="search-button">
    <img :src="'images/' + logOut" alt="log out button" class="logOut-button" v-on:click="logout()">
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{movieHeader}} </h2>
    <div class="movie-flex">
    <div class="kid-movie" v-for="kidsm in kidMoviesList"> 
    <img :src="'images/movies_children/' + kidsm.movie_cover" alt="movie poster" @click="loadMovie(kidsm)" class="kid-movie-poster">
    <div class="box-hover">
    <p class="kid-title">{{kidsm.movie_title}}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{televisionHeader}} </h2>
    <div class="movie-flex">
    <div class="kid-movie" v-for="kidst in kidTelevisionList">
    <img :src="'images/television_children/' + kidst.television_cover" alt="tv poster" class="kid-movie-poster" @click="loadMovie(kidst)">
    <div class="box-hover">
    <p class="kid-title">{{kidst.movie_title}}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="movies-section">
    <h2 class="movie-header"> {{musicHeader}} </h2>
    <div class="movie-flex">
    <div class="kid-movie" v-for="kidsms in musicList"> 
    <img :src="'images/music/' + kidsms.music_cover" alt="music poster" @click="loadMovie(kidsms)" class="kid-movie-poster">
    <div class="box-hover">
    <p class="kid-title">{{kidsms.movie_title}}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="lightbox">
    <button class="close-lightbox" v-on:click="lightboxoff"></button>
    <div class="flex-lightbox">
    <div class="video-player">
    <video autoplay controls muted :src="'video/' + LighboxDetails.movie_trailer"></video>
    </div>
    <div class="lightbox-style-content">
    <h2 class="storyline">{{LighboxDetails.movie_title}}</h2>
    <div class="header-two-lightbox">
    <h3>{{LighboxDetails.movie_year}}</h3>
    <h4>{{LighboxDetails.movie_runtime}}</h4>
    </div>
    <p v-html="LighboxDetails.movie_storyline"></p>
    <h6>Age Appropriateness: {{LighboxDetails.age_appropriateness}}</h6>
    <p>Note! You are allowed to change age appropriateness for video and audio content. However, movies with only a 'G' rate will be displayed on a kid's page. Choose: 'G', 'PG', '18A', '14A' or 'R'.</p>
    <form @submit.prevent="updateagetable">
    <input placeholder="Type Age Appropriateness" class="colortext" name="age_appropriateness">
    <button type="submit">Add</button>
    </form>
    </div>
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
            musicList: [],
            LighboxDetails: {},

        }
    },

    created: function() {
        // this will fire when the component gets build
        this.fetchAllKidMovies();
        this.fetchAllKidTelevision();
        this.fetchAllMusic();
    },

     //reference for saving comments in storage in Vue: https://vuejs.org/v2/cookbook/client-side-storage.html#Alternative-Patterns

     mounted() {
        if(localStorage.getItem('comments')) {
            
            this.comments = JSON.parse(localStorage.getItem('comments'));
 
        }
    },

    methods: {

        updateagetable() {
            let url = "./admin/apdate_table.php?update_table=true";
            let userData = new FormData(document.querySelector("form"));

            fetch(url, {
                method: 'POST',
                body: userData
            })
            .then(res => res.json())
            .then(data => {
                if (data.result == true){
                    alert('added a new user!')
                } else {
                    alert(`couldn\'t add user: ${data.result}`)
                }
            })
            .catch((err) => console.error(err)
            ); 
        },

        logout() {
            this.$router.push({ name: "home" });
            this.authenticated = false;
      
        },

        settings() {

            this.$router.push({ name: "adminpanel" });

        },

        lightboxoff() {
            let lightbox = document.querySelector('.lightbox');
            lightbox.style.display = "none";

        },


        loadMovie(media) {
            this.LighboxDetails = media;
            let lightbox = document.querySelector('.lightbox');
            lightbox.style.display = "block";

        },

        fetchAllKidMovies() {
            let url = `./admin/index.php?media=movies`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.kidMoviesList = data;
                this.LighboxDetails = data[0];
            })
            .catch((err) => {console.error(err)})
        },
        fetchAllKidTelevision() {
            let url = `./admin/index.php?media=television`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.kidTelevisionList = data;
                this.LighboxDetails = data[0];
            })
            .catch((err) => {console.error(err)})


    },
    fetchAllMusic() {
        let url = `./admin/index.php?media=music`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.musicList = data;
            this.LighboxDetails = data[0];
        })
        .catch((err) => {console.error(err)})


}
    }

   
}