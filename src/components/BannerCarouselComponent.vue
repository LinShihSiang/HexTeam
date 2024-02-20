<template lang="">
<div id="bannerCarousel" class="carousel slide container-fluid p-0" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item" v-for="(item, index) in getBanners" :key="item.id" :class="{active: index === 0}">
      <img :src="item.imageUrl" class="d-block w-100 img-banner" alt="item.id">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script>
import productStore from '../stores/productStore.js'

import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(productStore, ['getBanners'])
  }
}
</script>

<style lang="css">
    .img-banner {
        height: 810px;
        width: 100%;
        object-fit: cover;
    }
</style>
