<template>
  <v-app>
    <v-title><h1>OUR BEERS</h1></v-title>
    <v-row>
      <v-col cols="4" sm="12" md="6">
        <v-card width="200px" class="mt-5 mx-a" v-for="beer in beers" v-bind:key="beer.id">
          <v-card-title class="pb-0">
            <h3>{{ beer.name }}</h3>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
   data() {
    return {
      beers: [],
    };
},

methods: {
    async getData() {
      try {
        let response = await fetch("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6");
        this.beers = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
}
</script>
