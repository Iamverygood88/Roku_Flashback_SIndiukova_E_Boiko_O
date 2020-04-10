export default {
    template: `
    <div class="container">
    <div class="row">
    <h1 class="user-message"> {{message}} </h1>
    <div class="col-sm-12">
    <div class="login-form">
    <h2>{{Header}}</h2>
    <form id="my-form" @submit.prevent="login">
    <div class="border-input">
    <label for="username">Enter Username:</label>
    <input id="border-inp" v-model="input.username" type="text" name="username" required placeholder="Username" class="text">
    </div>
    <div class="border-input">
    <label for="password">Enter Password:</label>
    <input v-model="input.password" type="password" name="password" required placeholder="Password"  class="text">
    </div>
    <div class="border-input">
    <input class="submit-btn" type="submit" value="Login">
    </div>
    </form>
    </div> 
    </div>
    </div>
    </div> 
    `, 
    data: function() {

        return {
            input: {
                username: "",
                password: ""
            },
            message: "Roku",
            Header: "Welcome Back"
        }
    
    },

   

    created: function() {
        
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            if(this.input.username != "" && this.input.password != ""){
                //use the FormData object to collect and send our params
                let formData = new FormData();
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
    
                let url = "./admin/admin_login.php";
    
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if(typeof data != "object") {
    
                    console.warn(data);
  
                    } else {// tell the app that we have a successful login
                    // this.$emit("authenticated", true, data[0]);
                    this.$emit("authenticated", true, data);
                    this.$router.replace({name: "adult"});
                    }
                })
                .catch((err) => console.log(err));
    
            } else {
                console.error("Type right credentials!");
            }
        }
    }
    

}




