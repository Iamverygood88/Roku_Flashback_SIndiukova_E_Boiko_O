
import UserComponent from "./UserComponent.js";


export default {
    template: `
    <div class="container">
    <div class="row">
    <h1 class="user-message"> {{message}} </h1>
    <h2 class="welcome-message"> {{subHeader}} </h2>
    <div class="col-sm-12"> 
    <user v-for="user in userList" :liveuser="user"></user>
    </div>
    </div>
    </div> 
    `, 
    data: function() {
        return {
            message: "Roku",
            subHeader: "Come on, stranger, show who you are!",
            userList: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.fetchAllUsers();
    },

    methods: {
        fetchAllUsers() {
            let url = `./includes/index.php?getUsers=true`;
            fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
            .catch((err) => {console.error(err)})
        }
    },

    components: {
        user: UserComponent
    }
}