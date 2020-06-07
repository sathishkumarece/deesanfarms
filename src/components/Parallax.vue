<template>
  <div class="parallax" :style="{'background-image':'url(' + image + ')'}"></div>
</template>

<script>
export default {
  name: 'Parallax',
  props: {
    image: String
  }
}
</script>
