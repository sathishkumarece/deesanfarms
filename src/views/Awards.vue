<template>
  <div>
      <div class="navbar-static"></div>
    <div class="parallax-container">
      <Confetti :image="image"></Confetti>
      <!-- <div class="parallax-sibling"></div> -->
    </div>
    <div class="container">
      <h2>Awards</h2>
      <transition-group name="slide">
        <SplitView
          v-for="(award, index) in awards"
          :key="award.date"
          :title="award.date"
          :image="award.image"
          :content="award.info"
          :reverse="index%2 === 1"
        ></SplitView>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Confetti from '../components/Confetti'
import SplitView from '../components/SplitView'

export default {
  name: 'Awards',
  data () {
    return {
      image: '../img/awards.jpg',
      awards: [],
      description: 'Awards at DeesanFarms'
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
          name: 'og:title',
          content: this.$options.name
        },
        {
          name: 'og:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: this.$options.name
        },
        {
          name: 'twitter:description',
          content: this.description
        }
      ]
    }
  },
  components: {
    Confetti,
    SplitView
  },
  mounted () {
    this.$http.get('../resources/visits.json').then(response => {
      this.awards = response.body
    })
  }
}
</script>
