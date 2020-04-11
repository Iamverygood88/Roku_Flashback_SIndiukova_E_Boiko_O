
export default {
    template: `
    <div class="container">
    <div class="row">
    <h1 class="user-message"> {{message}} </h1>
    <div class="col-sm-12">
    <div class="login-form">
    <h2>{{Header}}</h2>
    <div class="router-flex">
    <router-link :to="{ name: 'update_movies' }" class="upd-movies" >Movies</router-link>
    <router-link :to="{ name: 'update_tv' }" class="upd-movies" >TV</router-link>
    <router-link :to="{ name: 'update_music' }" class="upd-movies" >Music</router-link>
    </div>
    <form id="my-form" @submit.prevent="updateTableMusic">
    <div class="border-input">
    <label for="movie_title">Enter Music Name:</label>
    <input name="movie_title" id="border-inp" type="text"  placeholder="Music Title" class="text" required>
    </div>
    <div class="border-input">
    <label for="movie_title">Enter Age Appropriateness:</label>
    <input name="age_appropriateness" id="border-inp" type="text" placeholder="Age Appropriateness" class="text" required>
    </div>
    <div class="border-input">
    <input class="submit-btn" type="submit" value="Change">
    </div>
    </form>
    </div> 
    </div>
    </div>
    </div> 
    `, 
    data: function() {

        return {
            
            message: "Roku",
            Header: "Time to make some changes"
        }
    
    },


    methods: {

    updateTableMusic() {

    let url = "./admin/update_table.php?update_table_music=true";

    let userData = new FormData(document.querySelector("form"));

    fetch(url, {
        method: 'POST',
        body: userData
    })

    .then(res => res.json())
    .then(data => {

        if (data.result == true){
            console.log('table updated!')

        } else {
            console.log(`couldn\'t update the table: ${data.result}`)
        }
    })
    .catch((err) => console.error(err)
    ); 



},

    }
    

}