export default {
    props: ['liveuser'], 

    template: `
    <div class="col-sm-1">
    
    
    <router-link v-if="liveuser.id == '2'" to="/kids" class="user-name">
    <img :src="'images/' + liveuser.avatar" alt="user avatar" class="u-avatar">
    </router-link>
    <router-link v-if="liveuser.id == '1'" to="/login" class="user-name">
    <img :src="'images/' + liveuser.avatar" alt="user avatar" class="u-avatar">
    </router-link>
  
    <div class="box-hover">
    <p class="user-name">{{liveuser.user_name}}</p>
    </div>
    
    
    
    
    
    </div>
    `,


    
}

  
    
