<template>
  <div class="mt-5 pa-0">
    <v-footer class="pa-0" app fixed>
      <v-row>
        <v-col cols="12">
          <v-card
            class="flex deep-purple darken-5 white--text text-center"
            flat
            tile
          >
            <div class="text-center">
              <v-btn
                v-for="icon in icons"
                :key="icon.idx"
                class="mx-4"
                :href="icon.src"
                target="_blank"
                dark
                icon
              >
                <v-icon size="24px">
                  {{ icon.title }}
                </v-icon>
              </v-btn>
            </div>

            <v-card-text class="py-2 white--text text-center">
              {{ new Date().getFullYear() }} — <strong>My Portfolio</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        title: "mdi-facebook",
        src: "https://web.facebook.com/adeniyi.kehinde.963/",
      },
      { title: "mdi-twitter", src: "https://twitter.com/kennytosoft/" },
      {
        title: "mdi-linkedin",
        src: "https://www.linkedin.com/in/kehinde-adeniyi-b4903314a/",
      },
      {
        title: "mdi-instagram",
        src: "https://www.instagram.com/degreatkenny",
      },
      { title: "mdi-whatsapp", src: "https://wa.me/+2348167785376" },
    ],
  }),
};
</script>
