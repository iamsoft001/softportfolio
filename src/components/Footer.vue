<template>
  <div class="mt-5 pa-0">
    <v-footer class="pa-0" app fixed>
      <v-card class="flex deep-purple darken-5 white--text text-center" flat tile>
        <div class="text-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
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
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  }
</script>

