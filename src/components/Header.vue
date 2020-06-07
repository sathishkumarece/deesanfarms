<template>
  <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar" :class="{'bg-color':active}">
    <div class="container">
      <!-- Brand -->
      <a
        class="navbar-brand"
        target="_blank"
      >
        <strong>DeesanFarms</strong>
      </a>

      <!-- Collapse -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Right -->
        <ul class="navbar-nav ml-auto nav-link-title">
          <li class="nav-item nav-link">
            <router-link to="/" exact>Home</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/activities">Activities</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/visits">Visits</router-link>
          </li>
          <li class="nav-item nav-link">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" class="nav-link" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com/MDBootstrap" class="nav-link" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/mdbootstrap/bootstrap-material-design"
              class="nav-link"
              target="_blank"
            >
              <i class="fab fa-instagram mr-2"></i>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      active: false
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener () {
      const yAxis = window.pageYOffset
      if (yAxis > 300) {
        this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>

<style>
</style>
