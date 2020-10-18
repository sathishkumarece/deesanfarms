<template>
  <div>
    <!-- <Parallax :image="image"></Parallax> -->
    <div class="navbar-static"></div>
    <div class="container">
      <h2>Inside Activites view</h2>

      <div class="row">
        <ActivityCard v-for="(activity, index) in activities" :key="index" :image="activity.image" :type="activity.type"></ActivityCard>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from '../components/ActivityCard'

export default {
  name: 'Activities',
  data () {
    return {
      image: '../img/bg6.jpg',
      activities: [],
      description: 'Various Activities at DeesanFarms'
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
  mounted () {
    this.$http.get('../resources/activities.json').then(
      response => {
        this.activities = response.body
      }
    )
  },
  components: {
    ActivityCard
  }
}
</script>
