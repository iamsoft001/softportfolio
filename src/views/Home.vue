<template>
  <div class="main-background">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>

    <div class="text-absolute">
      <v-container>
        <v-row>
          <v-col>
            <h1>Hello, I'm Kehinde Adeniyi</h1>

            <p>Software Developer</p>

            <div>
              <v-btn color="pink lighten-4" text> Explore </v-btn>
              <v-btn icon @click="show = !show">
                <v-icon color="white">{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </div>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <p>
                  Hello, my name is Kehinde Adeniyi.<br />
                  I am a Full Stack Web Developer and a UI/UX enthusiast. Check
                  out my recent projects on my project page. Also you can stop
                  and say hello at <br />
                  <v-btn href="mailto:iamsoftworld@gmail.com" dark
                    >Send Email</v-btn
                  >
                </p>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
.main-background {
  background-color: rgb(207, 15, 233);
  background-image: url("/imagez3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}
.text-absolute {
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  margin-left: 10%;
  color: aliceblue;
}
</style>
