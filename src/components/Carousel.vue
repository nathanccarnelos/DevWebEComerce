<template>
  <v-carousel
    contain
    cycle
    height="100"
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item
      :key="i"
      v-for="(slide, i) in slides"
    >
      <v-img :src="slide.img" aspect-ratio="1" max-height="100" min-height="100"></v-img>

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      slides: [
        {
          img: require('@/assets/banner1.png')
        },
        {
          img: require('@/assets/banner3.png')
        }
      ]
    }
  }
}
</script>
