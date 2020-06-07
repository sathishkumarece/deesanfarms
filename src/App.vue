<template>
  <div id="app">
    <Header></Header>
    <!-- <Home></Home> -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
  metaInfo () {
    return {
      titleTemplate: '%s | Deesan Farms',
      meta: [
        {
          name: 'keywords',
          content: 'deesanfarms, deesan farms, organic, organic vegetables, cold press oil'
        },
        {
          name: 'author',
          content: 'Sathishkumar NATARAJ | sathishkumarece@gmail.com'
        },
        {
          name: 'og:type',
          content: 'Website'
        },
        {
          name: 'twitter:card',
          content: 'Summary'
        },
        {
          name: 'twitter:creator',
          content: 'Sathishkumar NATARAJ | sathishkumarece@gmail.com'
        }
      ]
    }
  }
}
</script>
