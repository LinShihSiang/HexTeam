<template>

  <NavBarComponent></NavBarComponent>
  <div> <RouterView /> </div>
  <FooterComponent></FooterComponent>

</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import productStore from './stores/productStore.js'
import { mapActions } from 'pinia'

export default {
  mounted () {
    this.getProducts()
  },
  methods: {
    ...mapActions(productStore, ['getProducts'])
  },
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">

</style>
