export default {
    props: ['moveskid'], 

    template: `
    <div class="kid-movie" v-if="moveskid.age_appropriateness == 'G'"> 
    <div class="image">
    <img :src="'images/movies_children/' + moveskid.movie_cover" alt="movie poster"
    class="kid-movie-poster"  v-on:click='openLightbox'> 
    </div>
    <div class="box-hover" >
    <p class="kid-title">{{moveskid.movie_title}}</p>
    </div>
    <div class="lightbox">
    {{moveskid.movie_storyline}}
    </div>
    </div>
    
    
    
    `, 




   methods: {


    openLightbox: function () {
        let lightbox = document.querySelectorAll('.lightbox');
        lightbox.forEach(lightbox => {
            lightbox.classList.add('lightbox-on');
            
        });
        

      },
  

        

    }




   
    }



 
   


   


   

 


