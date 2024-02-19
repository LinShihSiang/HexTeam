<template>

<div class="container">
  <NavBarComponent></NavBarComponent>
  <div> <RouterView /> </div>
  <FooterComponent></FooterComponent>
</div>

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
