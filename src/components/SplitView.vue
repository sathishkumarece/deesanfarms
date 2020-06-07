<template>
    <div>
        <h5 class='split-title'>{{ title }}</h5>
        <div class="row d-flex" :class="{'flex-row-reverse': reverse}">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img :src="image" alt="visits" class="split-image-align-left">
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <p v-for="(val, index) in content" :key="index">{{ val }}</p>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
  name: 'SplitView',
  props: {
    image: String,
    content: Array,
    title: {
      default: 'Title',
      type: String
    },
    reverse: {
      type: Boolean,
      default: true
    }
  }
}
</script>
