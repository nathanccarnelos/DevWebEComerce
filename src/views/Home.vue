<template>
  <div>
    <carousel>
    </carousel>
    <initial-products>
    </initial-products>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import InitialProducts from '@/components/InitialProducts.vue'
export default {
  name: 'home',
  components: {
    'carousel': Carousel,
    'initial-products': InitialProducts
  }
}
</script>
