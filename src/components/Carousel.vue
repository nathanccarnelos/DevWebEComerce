<template>
   <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.img"
    >

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
          id: 1,
          img: 'https://portalcorreio.com.br/wp-content/uploads/2019/07/candy-lanchocolates-010319.jpg',
          access: '',
          text: ''
        },
        {
          id: 2,
          img: 'https://http2.mlstatic.com/kit-2-barras-chocolate-ao-leite-garoto-21kg-atacado-D_NQ_NP_727514-MLB27593178639_062018-F.jpg',
          access: '',
          text: ''
        },
        {
          id: 3,
          img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg',
          access: '',
          text: ''
        },
        {
          id: 4,
          img: 'https://www.paodeacucar.com/img/uploads/1/345/606345.jpg',
          access: '',
          text: ''
        },
        {
          id: 5,
          img: 'https://docemalu.vteximg.com.br/arquivos/ids/167526-1000-1000/108892-1.jpg?v=636018481493470000',
          access: '',
          text: ''
        }
      ]
    }
  }
}
</script>
