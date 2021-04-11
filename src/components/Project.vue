<template>
  <div class="project-background">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="position-absolute">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="4"
            v-for="(project, index) in projects"
            :key="index"
          >
            <v-sheet color="teal" class="mx-auto" width="400px">
              <v-img
                gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.7)"
                :src="project.image"
                height="100px"
              ></v-img>

              <v-card-title
                class="font-weight-black white--text justify-center pt-8"
              >
                {{ project.name }}
              </v-card-title>

              <v-card-subtitle class="font-weight-bold font-italic">
                {{ project.description }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="deep-purple darken-5"
                  dark
                  rounded
                  class="mx-auto"
                  :href="project.link"
                >
                  Check it Out
                </v-btn>
              </v-card-actions>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      projects: [
        {
          image: "todo.jpg",
          name: "My Todo App",
          description: "Plan and Organize your daily event with my Todo app",
          link: "https://todo-app-eight-kappa.vercel.app/",
        },
        {
          image: "softcon.jpg",
          name: "Soft Conceptz",
          description:
            "For your events management, website development and graphics designing, soft conceptz is the best",
          link: "https://soft-conceptznew.vercel.app/",
        },
        {
          image: "stylish.jpg",
          name: "Stylish O Interiors",
          description: "Beautify your interiors with Stylish O Interiors",
          link: "https://stylish-o-interiors.vercel.app/",
        },
      ],
    };
  },
};
</script>

<style>
.project-background {
  background-color: rgb(124, 50, 185);
  background-image: url("/imagez7.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 845px;
}
</style>
