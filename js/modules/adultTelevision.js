export default {

    props: ['televisionA'],
    
    template: `
    <div class="kid-movie" v-if="televisionA.age_appropriateness === 'PG'"> 
    <img :src="'images/television_children/' + televisionA.television_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{televisionA.television_title}}</p>
    </div>
    </div>
    `,  
    
    }