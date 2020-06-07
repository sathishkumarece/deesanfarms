<template>
    <div>
      <div class="navbar-static"></div>
      <h3>Inside activity</h3>
      <h2>Activity: {{ $route.params.type }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Activity',
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
