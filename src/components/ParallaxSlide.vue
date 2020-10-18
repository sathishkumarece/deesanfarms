<template>
  <div class="parallax-slide" :style="{'background-image':'url(' + image + ')', 'background-position-x': -offset +'px' }"></div>
</template>

<script>
export default {
  name: 'ParallaxSlide',
  props: {
    image: String
  },
  data () {
    return {
      offset: 20
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener: function () {
      this.offset = document.documentElement.scrollTop / 2
    }
  }
}
</script>
