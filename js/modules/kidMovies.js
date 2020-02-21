export default {
    props: ['moveskid'], 

    template: `
    <div class="kid-movie"> 
    <img :src="'images/movies_children/' + moveskid.movie_cover" alt="movie poster" class="kid-movie-poster"> 
    <div class="box-hover">
    <p class="kid-title">{{moveskid.movie_title}}</p>
    </div>
    </div>
    `
}