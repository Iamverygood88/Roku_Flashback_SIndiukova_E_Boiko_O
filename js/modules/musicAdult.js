export default {

    props: ['musicA'],
    
    template: `
    <div class="kid-movie"  v-if="musicA.age_appropriateness === 'A&K' || musicA.age_appropriateness === 'A'"> 
    <img :src="'images/music/' + musicA.music_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{musicA.music_title}}</p>
    </div>
    </div>
    `,  
    
    }