export default {

    props: ['musicS'],
    
    template: `
    <div class="kid-movie"  v-if="musicS.age_appropriateness === 'K' || musicS.age_appropriateness === 'A&K'"> 
    <img :src="'images/music/' + musicS.music_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{musicS.music_title}}</p>
    </div>
    </div>
    `,  
    
    }