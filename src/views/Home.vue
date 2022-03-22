<template lang="pug">
v-container(class="my-6")
 v-row
  v-col(cols="12")
    v-carousel(cycle height="400" hide-delimiter-background show-arrows-on-hover )
        template(v-slot:prev="{ on, attrs }")
            v-btn(color="success" v-bind="attrs" v-on="on") Previous slide
        template(v-slot:next="{ on, attrs }")
            v-btn(color="info" v-bind="attrs" v-on="on") Next slide
        v-carousel-item(v-for="(slide, i) in slides" :key="i")
            v-sheet(:color="slide.color" height="100%")
                v-row(class="fill-height" align="center" justify="center")                 
                    v-col(cols="12" md="8")
                        v-container
                        v-card(dark style="background-color: rgba(0, 0, 0, 0.6)")
                         v-card-text
                            h1(class="white--text font-italic") {{slide.phrases}}
                            br
                            h2(class="white--text") {{slide.author}}
 
 v-row(v-for="n in 6" :key="n"
      )
  v-col(v-for="k in n+1" :key="k")
   v-card(class="pa-2" outlined height="140px" dark)

</template>

<script>
export default {
  computed:{
   
  },
  methods: {

  },
    data() {
        return {
          
            slides: [{
                    phrases: '"Lo mejor que se puede compartir es el conocimiento"',
                    author: 'Alain Ducasse',
                    color: 'indigo'
                },
                {
                    phrases: '"El Conocimiento descansa no solo sobre la verdad sino también sobre el error"',
                    author: 'Carl Jung',
                    color: 'warning'

                },
                {
                    phrases: '"La verdadera ignorancia no es la ausencia de conocimientos, sino el hecho de negarse a adquirirlos."',
                    author: 'Karl Popper',
                    color: 'pink darken-2'

                },
                {
                    phrases: '"La tecnología hizo posible las grandes poblaciones; ahora las grandes poblaciones hacen que la tecnología sea indispensable"',
                    author: 'José Krutch',
                    color: 'red lighten-1'

                },
            ],
        }
    },
}
</script>
