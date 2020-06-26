<template>
  <div>
    <div class="navbar-static"></div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <!-- <div class="column"> -->
            <div class="contact-container">
              <h5 class="text-align">Contact Us</h5>
               <table class="table table-align">
                <tbody>
                  <tr  class="d-flex">
                    <td  class="col-3"><strong>
                    <i class="fas fa-phone-alt"></i>
                    </strong></td>
                    <td  class="col-6">+91 88</td>
                  </tr>
                  <tr  class="d-flex">
                    <td  class="col-3"><strong>
                    <i class="fab fa-whatsapp"></i>
                    </strong></td>
                    <td  class="col-6">+91 88</td>
                  </tr>
                  <tr  class="d-flex">
                    <td  class="col-3"><strong>
                    <i class="far fa-envelope"></i>
                    </strong></td>
                    <td  class="col-6">DeesanFarms@gmail.com</td>
                  </tr>
                  <tr  class="d-flex">
                    <td  class="col-3"><strong>
                    <i class="fas fa-home"></i>
                    </strong></td>
                    <td  class="col-6">RamarPannai Kalam, Moolathara, Kerala 678533</td>
                  </tr>
                </tbody>
              </table>
            <!-- </div> -->
            <!-- <br>
            <div class="contact-container">
              <h5 class="text-align">To Contact</h5>
              <div class="form">
                <label for="val">Name</label>
                <input type="text" id="val" class="form-control" placeholder="Enter your name">
                <label for="email">Email</label>
                <input type="email" id="email" class="form-control" placeholder="Enter your email">
                <label for="num">Phone no</label>
                <input type="number" id="num" class="form-control" placeholder="Enter your name" max=10>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="map-container">
            <google-map
              :center="{lat: 10.654936, lng: 76.873489}"
              :zoom="16"
              map-type-id="terrain"
              style="width: auto; height: 500px"
            >
              <google-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </google-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      description: 'To contact DeesanFarms',
      markers: [
        {
          position: {
            lat: 10.654936,
            lng: 76.873489
          }
        }
      ]
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
  }
}
</script>
