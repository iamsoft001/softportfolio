<template>
  <div class="mt-5 pa-0">
    <v-footer class="pa-0" app fixed>
      <v-card class="flex deep-purple darken-5 white--text text-center" flat tile>
        <div class="text-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :href="icon.href" target="_blank" dark icon>
            <v-icon size="24px">
              {{ icon.title }}
            </v-icon>
          </v-btn>
        </div>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>My Portfolio</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [ 
      {title:"mdi-facebook", href:"https://web.facebook.com/adeniyi.kehinde.963/"}, 
      {title:"mdi-twitter", href:"https://twitter.com/kennytosoft/"},
      {title:"mdi-linkedin", href:"https://www.linkedin.com/in/kehinde-adeniyi-b4903314a/"},
      {title:"mdi-instagram", href:"https://www.instagram.com/degreatkenny"},
      {title:"mdi-whatsapp", href:"https://wa.me/+2348167785376"}
      ],
  }),
  }
</script>

