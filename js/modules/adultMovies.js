export default {
    props: ['movesadult'], 

    template: `
    <div class="kid-movie" v-if="movesadult.age_appropriateness == 'PG'"> 
    <img :src="'images/movies_children/' + movesadult.movie_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{movesadult.movie_title}}</p>
    </div>
    </div>
    `, 

    


}