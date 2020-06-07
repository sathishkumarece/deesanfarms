<template>
  <div>
    <div class="parallax-container">
      <Parallax :image="image"></Parallax>
      <div class="parallax-sibling"></div>
    </div>
    <div class="container">
      <h2>Inside Visits view</h2>
      <SplitView v-for="(visit, index) in visits" :key="visit.date" :title="visit.date"
      :image="visit.image" :content="visit.info" :reverse="index%2 === 1"></SplitView>
    </div>
  </div>
</template>

<script>
import Parallax from '../components/Parallax'
import SplitView from '../components/SplitView'

export default {
  name: 'Visits',
  data () {
    return {
      image: '../img/bg2.jpg',
      visits: []
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
    Parallax,
    SplitView
  },
  mounted () {
    this.$http.get('../resources/visits.json').then(
      response => {
        this.visits = response.body
      }
    )
  }
}
</script>
