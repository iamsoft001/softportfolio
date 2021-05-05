<template>
  <div class="pa-8 mt-12 project-background">
    <h1 class="text-center bg-grey pa-2 white--text">
      Check Out Some Of my projects
    </h1>
    <v-row>
      <v-col cols="12" v-for="(work, index) in works" :key="index">
        <v-card>
          <v-img :src="work.src"> </v-img>
          <v-card-subtitle>
            <h2>Terminologies Used</h2>
            <br />{{ work.term1 }} <br />{{ work.term2 }}
            <br />
            {{ work.term3 }} <br />{{ work.term4 }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn :href="work.link" target="_blank">Check it Out</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Works",
  data() {
    return {
      works: [
        {
          src: "newstylish.jpg",
          term1: "Vuetify",
          term2: "JavaScript",
          term3: "CSS",
          term4: "Firebase",
          link: "https://stylish-o-interiors-iamsoft001.vercel.app",
        },
        {
          src: "softeventz.jpg",
          term1: "Vuetify",
          term2: "JavaScript",
          term3: "CSS",
          term4: "Firebase",
          link: "https://softeventz.netlify.app/",
        },
        {
          src: "newtodo.jpg",
          term1: "Vuetify",
          term2: "JavaScript",
          term3: "CSS",
          term4: "Firebase",
          link: "https://todo-app-iamsoft001.vercel.app",
        },
        {
          src: "newsoft.jpg",
          term1: "html",
          term2: "css",
          term3: "JavaScript",
          term4: "Bootstrap",
          link: "https://soft-conceptznew.vercel.app",
        },
      ],
    };
  },
};
</script>

<style>
.project-background {
  background-color: rgb(124, 50, 185);
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6) 20%,
      rgba(0, 0, 0, 0.6)
    ),
    url(imagez7.jpg);
  background-size: cover;
  height: 100%;
}
</style>
