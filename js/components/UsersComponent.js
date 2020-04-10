
import UserComponent from "./UserComponent.js";


export default {
    template: `
    <div class="container">
    <div class="row">
    <h1 class="user-message"> {{message}} </h1>
    <h2 class="welcome-message"> {{subHeader}} </h2>
    <div class="col-sm-12"> 
    <users v-for="users in usersList" :liveuser="users"></users>
    </div>
    </div>
    </div> 
    `, 
    data: function() {
        return {
            message: "Roku",
            subHeader: "Come on, stranger, show who you are!",
            usersList: []
        }
    },

    created: function() {
        // this will fire when the component gets build
        this.fetchAllUsers();
    },

    methods: {

        fetchAllUsers() {
			let url = './admin/admin_getusers.php?allusers=true';

			fetch(url)
			.then(res => res.json())
			.then(data => this.usersList = data)
			.catch((error) => console.error(error))
		}
    },

    components: {
        users: UserComponent
    }
}