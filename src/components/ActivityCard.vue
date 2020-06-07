<template>
   <div class="col-sm-12 col-md-6 col-lg-4 card-holder">
       <router-link :to="'/activity/'+type">
            <div class="card-container">
                <div class="card-image">
                    <img :src="image" :alt="type" srcset="" style="height:100%;width:100%;">
                </div>
                <div class="card-text">
                    <h5 class="split-title">{{ type }}</h5>
                    <div class="textBtn">
                        <span>More Information </span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z"></path>
                        </svg>
                    </div>
                </div>
            </div>
       </router-link>
   </div>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: {
    type: String,
    image: String
  }
}
</script>
