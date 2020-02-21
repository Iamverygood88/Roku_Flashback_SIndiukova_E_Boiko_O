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
    </div>
    
    </section>

    `, 

    data: function() {
        return {
            message: "Roku",
            kidMess: "Kids",
            search: "search.svg",
            logOut: "in_out.svg",
            avatarIcon: "login1.svg",
            movieHeader: "Movies"



        }
    }

   
}