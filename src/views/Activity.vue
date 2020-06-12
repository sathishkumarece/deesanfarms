<template>
    <div>
      <div class="navbar-static"></div>
      <div class="container">
        <h3>Inside activity</h3>
        <h2>Activity: {{ $route.params.type }}</h2>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      description: 'Activity like coconut, dairy, oil, vegetable at DeesanFarms'
    }
  },
  metaInfo () {
    return {
      title: this.$route.params.type,
      meta: [
        {
          name: 'description',
          content: this.description
        },
        {
          name: 'og:title',
          content: this.$route.params.type
        },
        {
          name: 'og:description',
          content: this.description
        },
        {
          name: 'twitter:title',
          content: this.$route.params.type
        },
        {
          name: 'twitter:description',
          content: this.description
        }
      ]
    }
  }
}
</script>
