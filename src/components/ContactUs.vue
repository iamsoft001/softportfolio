<template>
  <div class="contact-background">
    <v-container class="mt-14 pb-16">
      <v-row justify="center" class="mx-auto">
        <v-col cols="12" sm="12" md="6" lg="6" order="3" order-sm="1">
          <v-sheet color="cyan lighten-5" class="pa-5">
            <h2>Contact Us:</h2>
            <v-btn
              icon
              value="whatsapp"
              href="https://wa.me/+2348167785376"
              target="_blank"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>

            <v-btn
              icon
              value="facebook"
              href="https://web.facebook.com/adeniyi.kehinde.963/"
              target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
              icon
              value="twitter"
              href="https://twitter.com/kennytosoft/"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <div>
              <span class="d-block" title="Soft Portfolio"
                >Kinplus Technologies</span
              >
              <span class="d-block" title="Adress"
                >Topmost Floor,Christore Building.</span
              >
              <span class="d-block" title="Location"
                >Ado_Ekiti. Ekiti State. Nigeria</span
              >
              <span class="d-block">iamsoftworld@gmail.com</span>
              <span title="SOftConceptz, contact us line."
                >Phone: +2348167785376, +2347042347621</span
              >
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="6" order="2">
          <v-card elevation="6" color="cyan lighten-5">
            <v-container>
              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="firstname"
                    :counter="10"
                    :rules="nameRules"
                    required
                    label="Firstname"
                    outlined
                    dense
                    rounded
                    height="2px"
                    prepend-icon="mdi-account-circle"
                  />
                  <v-text-field
                    v-model="lastname"
                    :counter="10"
                    :rules="nameRules"
                    required
                    label="Lastname"
                    outlined
                    dense
                    rounded
                    prepend-icon="mdi-account-circle"
                  />

                  <v-text-field
                    v-model="phonenumber"
                    :counter="11"
                    :rules="phoneRules"
                    outlined
                    rounded
                    dense
                    hint="Enter only numbers"
                    label="Phone No"
                    prepend-icon="mdi-cellphone"
                  />
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Message"
                    value=""
                  ></v-textarea>

                  <v-btn
                    class="regBtn"
                    :disabled="!valid"
                    color="indigo lighten-1"
                    @click="show_alert()"
                    >Submit</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    firstname: "",
    lastname: "",
    userRules: [(v) => !!v || "Name is required"],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less",
    ],
    phonenumber: "",
    phoneRules: [(v) => (v && v.length <= 11) || "Number must be less"],
  }),
  methods: {
    submit() {
      this.$refs.form.submit();
    },

    show_alert() {
      alert("Message Sent Successfully");
    },
  },
};
</script>

<style scoped>
.contact-background {
  background-color: rgb(55, 38, 131);
  background-image: url("/imagez4.jpg");
  background-size: cover;
  height: 100%;
}
</style>
