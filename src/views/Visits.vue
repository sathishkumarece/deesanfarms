<template>
  <div>
    <div class="parallax-container">
      <Parallax :image="image"></Parallax>
      <div class="parallax-sibling"></div>
    </div>
    <div class="container">
      <h2>Inside Visits view</h2>
      <transition-group name="slide">
        <SplitView
          v-for="(visit, index) in visits"
          :key="visit.date"
          :title="visit.date"
          :image="visit.image"
          :content="visit.info"
          :reverse="index%2 === 1"
        ></SplitView>
      </transition-group>
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
      visits: [],
      description: 'Visits at DeesanFarms'
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
  beforeMount () {
    this.getInitialVisit()
  },
  mounted () {
    // this.$http.get('../resources/visits.json').then(response => {
    //   this.visits = response.body
    // })
    this.scroll(this.visits)
  },
  methods: {
    getInitialVisit () {
      this.$http.get('../resources/visits.json').then(response => {
        // console.log(response.body[0])
        this.visits.push(response.body[0])
        this.visits.push(response.body[1])
      })
    },
    scroll (visits) {
      window.onscroll = () => {
        var bottomOfWindow = Math.round(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow) {
          this.$http.get('../resources/visits.json').then(response => {
            if (response.body.length > visits.length) {
              this.visits.push(response.body[visits.length])
            }
          })
        }
      }
    }
  }
}
</script>
