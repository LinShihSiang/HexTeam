<template>
  <NavBarComponent></NavBarComponent>
  <div class="container"> <RouterView /> </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">

</style>
