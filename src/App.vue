<template>
  <v-app >
    
    <v-navigation-drawer
     v-model="drawer"
      :app="mobile" 
      class="hidden-md-and-up"
      color="deep-purple darken-5"
      dark
      right
      >
      <v-row justify="end" class="pr-6 mt-2 mb-1">
      <v-btn @click="drawer = false" text><v-icon>mdi-close</v-icon></v-btn>
      </v-row>
     <NavDrawer />
    </v-navigation-drawer>
    <v-app-bar app color="deep-purple darken-5"  dark flat fixed class="pa-0">
      <v-toolbar-title> KEHINDE ADENIYI </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" text> Menu </v-btn>
      </span>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        text
        item: to="/"
        >
          <v-icon small left >mdi-bank</v-icon>
          Home
        </v-btn>
        <v-btn text item: to="/Project">
          <v-icon small left>mdi-folder-multiple</v-icon>
          Project
        </v-btn>
        <v-btn text item: to="/Contact">
          <v-icon small left>mdi-phone</v-icon>
          Contact Us
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="pa-0 ma-0" app >
      <router-view></router-view>
     </v-main>
    
      <v-footer>
   <Footer/>
      </v-footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import NavDrawer from '@/components/NavDrawer';
export default {
  
  name: "App",
  data: () => ({
    drawer: false,
  }),
  components: {Footer,NavDrawer},
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown 
    }
  },
  watch: {
    mobile(newValue) {
      !newValue ? this.drawer = false : ''
    }
  },
};
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
 *, :after, :before {
    box-sizing: border-box;
  }
  
</style>