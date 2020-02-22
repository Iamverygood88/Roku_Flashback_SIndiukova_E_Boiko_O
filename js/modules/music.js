export default {

    props: ['musicS'],
    
    template: `
    <div class="kid-movie"> 
    <img :src="'images/music/' + musicS.music_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{musicS.music_title}}</p>
    </div>
    </div>
    `,  
    
    }