<template>
  <div class="home">
    <div class="parallax-container">
      <Parallax :image="image"></Parallax>
      <div class="parallax-sibling"></div>
    </div>
    <!-- <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div> -->
    <div class="app-title">Organic Farm</div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Who we are?</h2>
          <h5 class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolor fugit quos ad quo maxime? Pariatur ratione, debitis magni non cupiditate iusto, aperiam provident ipsa aut ea doloribus eum modi!
          </h5>
        </div>
      </div>
      <div class="separator separator-primary"></div>
      <div class="section-story-overview">
        <div class="row">
          <div class="col-md-6">
            <div class="image-container image-left" style="background-image: url(&quot;img/login.jpg&quot;);">
              <p class="blockquote blockquote-primary">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus, molestias neque et architecto dolorum consequatur perferendis omnis necessitatibus eum aspernatur impedit culpa possimus suscipit consequuntur ex itaque ipsam in?"
                <br><br>
                <small>-NOAA</small>
              </p>
            </div>
            <div class="image-container" style="background-image: url(&quot;img/bg2.jpg&quot;);"></div>
          </div>
          <div class="col-md-5">
            <div class="image-container image-right" style="background-image: url(&quot;img/bg1.jpg&quot;);"></div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum autem, maiores placeat aut saepe, porro nesciunt obcaecati non expedita voluptate quae consequuntur quibusdam, totam quisquam eaque eveniet nobis cumque molestiae?
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti totam aut adipisci voluptates. Molestiae cum labore optio, distinctio impedit tempora quasi error porro. Explicabo minima corporis reiciendis repellat nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi ab vero delectus tempore eligendi itaque distinctio sit! Tenetur placeat ad itaque, odit omnis error exercitationem repudiandae reprehenderit doloribus deserunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vitae aut voluptas quaerat velit fuga quidem, sunt deserunt doloremque quis voluptate corporis atque odio reprehenderit minus architecto, assumenda molestiae amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Parallax from '../components//Parallax.vue'

export default {
  name: 'Home',
  data () {
    return {
      image: '../img/bg7.jpg',
      description: 'Template website to show products & activities of organic farm. Tech Stack: Vue'
      // description: 'Organic farms composite of Milk product, vegetables, coconut byproduct'
    }
  },
  metaInfo () {
    return {
      title: this.$options.name,
      meta: [
        {
          name: 'description',
          content: this.description
        },
        {
          name: 'title',
          property: 'og:title',
          content: 'Deesan Farms'
        },
        {
          name: 'description',
          property: 'og:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: 'Deesan Farms'
        },
        {
          name: 'twitter:description',
          content: this.description
        }
      ]
    }
  },
  components: {
    // HelloWorld,
    Parallax
  }
}
</script>
