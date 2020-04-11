

export default {
    template: `
    <section class="adult-section">
    <div class="header-kids">
    <div>
    <h1 class="user-message"> {{message}} </h1>
    <h2 class="kids-message"> {{adultMess}} </h2>
    </div>
    <div class="flex-search">
    <input type="text" placeholder="" class="colortext">
    <img :src="'images/' + search" alt="search button" class="search-button">
    <img :src="'images/' + logOut" alt="log out button" class="logOut-button" v-on:click="logout()">
    <img :src="'images/' + avatarIcon" alt="Avatar Icon" class="avatar-button" v-on:click="settings">
    </div>
    </div>
    <div class="movies-section">
    <div class="nav-filter">
    <h2 class="movie-header"> {{movieHeader}} </h2>
    <nav class="filter">
    <ul>
    <li><a href="all" @click.prevent="fetchAllKidMovies">All</a></li>
    <li><a href="1950" @click.prevent="filterMedia('1950')">1950s</a></li>
    <li><a href="1960" @click.prevent="filterMedia('1960')">1960s</a></li>
    <li><a href="1970" @click.prevent="filterMedia('1970')">1970s</a></li>
    <li><a href="1980" @click.prevent="filterMedia('1980')">1980s</a></li>
    <li><a href="1990" @click.prevent="filterMedia('1990')">1990s</a></li>
    </ul>
    </nav>
    </div>
    <div class="movie-flex">
    <div class="kid-movie"v-if="kidsm.age_appropriateness === '18A' || kidsm.age_appropriateness === 'PG' || kidsm.age_appropriateness === '14A' || kidsm.age_appropriateness === 'R'" v-for="kidsm in kidMoviesList"> 
    <img :src="'images/movies_children/' + kidsm.movie_cover" alt="movie poster" @click="loadMovie(kidsm)" class="kid-movie-poster">
    <div class="box-hover">
    <p class="kid-title">{{kidsm.movie_title}}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="movies-section">
    <div class="nav-filter">
    <h2 class="movie-header"> {{televisionHeader}} </h2>
    <nav class="filter">
    <ul>
    <li><a href="all" @click.prevent="fetchAllKidTelevision">All</a></li>
    <li><a href="1950" @click.prevent="filterMediaTV('1950')">1950s</a></li>
    <li><a href="1960" @click.prevent="filterMediaTV('1960')">1960s</a></li>
    <li><a href="1970" @click.prevent="filterMediaTV('1970')">1970s</a></li>
    <li><a href="1980" @click.prevent="filterMediaTV('1980')">1980s</a></li>
    <li><a href="1990" @click.prevent="filterMediaTV('1990')">1990s</a></li>
    </ul>
    </nav>
    </div>
    <div class="movie-flex">
    <div class="kid-movie" v-if="kidst.age_appropriateness === 'PG'" v-for="kidst in kidTelevisionList">
    <img :src="'images/television_children/' + kidst.television_cover" alt="tv poster" class="kid-movie-poster" @click="loadMovie(kidst)">
    <div class="box-hover">
    <p class="kid-title">{{kidst.movie_title}}</p>
    </div>
    </div>
    </div>
    </div>
    <div class="movies-section">
    <div class="nav-filter">
    <h2 class="movie-header"> {{musicHeader}} </h2>
    <nav class="filter">
    <ul>
    <li><a href="all" @click.prevent="fetchAllMusic">All</a></li>
    <li><a href="1950" @click.prevent="filterMediaMsc('1950')">1950s</a></li>
    <li><a href="1960" @click.prevent="filterMediaMsc('1960')">1960s</a></li>
    <li><a href="1970" @click.prevent="filterMediaMsc('1970')">1970s</a></li>
    <li><a href="1980" @click.prevent="filterMediaMsc('1980')">1980s</a></li>
    <li><a href="1990" @click.prevent="filterMediaMsc('1990')">1990s</a></li>
    </ul>
    </nav>
    </div>
    <div class="movie-flex">
    <div class="kid-movie" v-if="kidsms.age_appropriateness === 'A&K' || kidsms.age_appropriateness === 'A'" v-for="kidsms in musicList"> 
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
    <div class="rate">
    <div class="rs-one-adult" v-on:click="rateone"></div>
    <div class="rs-one-adult" v-on:click="rateone"></div>
    <div class="rs-one-adult" v-on:click="rateone"></div>
    <div class="rs-one-adult" v-on:click="rateone"></div>
    <div class="rs-one-adult" v-on:click="rateone"></div>
    </div>
    <div class="input-flex">
    <input type="text" v-model="newComment" placeholder="Leave a comment" class="colortext">
    <button v-on:click="addComment">Add</button>
    </div>
    <h5 v-on:click="hideComments">Comments</h5>
    <div class="com-area">
    <ul>
    <li v-for="comment in comments">{{comment}}</li>
    </ul>
    </div>
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
            newComment: "",
            comments: [
            ],
            message: "Roku",
            adultMess: "Adult",
            search: "search.svg",
            logOut: "in_out.svg",
            avatarIcon: "login1.svg",
            movieHeader: "Movies",
            televisionHeader: "TV",
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

        rateone() {
            let star = document.querySelectorAll('.rs-one-adult');
            star.forEach(star => {

            star.style.backgroundImage = "url('images/adult_star_fill.svg')";
                
            });
             
        },


        filterMedia(filter) {

            let url = `./admin/index.php?media=movies&filter=${filter}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.kidMoviesList = data;
                this.LighboxDetails = data[0];
            })
            .catch((err) => {console.error(err)})

        },

        filterMediaTV(filter) {

            let url = `./admin/index.php?media=television&filtertv=${filter}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.kidTelevisionList = data;
                this.LighboxDetails = data[0];
            })
            .catch((err) => {console.error(err)})

        },

        filterMediaMsc(filter) {

            let url = `./admin/index.php?media=music&filtermsc=${filter}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.musicList = data;
                this.LighboxDetails = data[0];
            })
            .catch((err) => {console.error(err)})

        },

        logout() {
            this.$router.push({ name: "home" });
            this.authenticated = false;
      
        },

        settings() {

            this.$router.push({ name: "update_movies" });

        },

        lightboxoff() {
            let lightbox = document.querySelector('.lightbox');
            lightbox.style.display = "none";

        },

        addComment() {
            this.comments.push(this.newComment);
            let save = JSON.stringify(this.comments);
            localStorage.setItem('comments', save);
        },

        hideComments() {
            let area = document.querySelector('.com-area');
            if(area.style.display === "none") {
               area.style.display = "block";
            } else {
                area.style.display = "none";
            }
            
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