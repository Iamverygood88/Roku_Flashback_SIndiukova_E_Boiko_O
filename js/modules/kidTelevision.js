export default {

props: ['televisionK'],

template: `
<div class="kid-movie"> 
<img :src="'images/television_children/' + televisionK.television_cover" alt="movie poster" class="kid-movie-poster"> 
<div class="box-hover">
<p class="kid-title">{{televisionK.television_title}}</p>
</div>
</div>
`,  

}