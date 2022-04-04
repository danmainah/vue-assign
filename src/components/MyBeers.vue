<template>
  <v-app>
    <v-title style="text:center;"><h1>OUR BEERS</h1></v-title>
    <v-container>
      <v-layout>
        <v-flex>
        <v-card width="400px" height="500px" class="m-5 mx-a" v-for="beer in beers" v-bind:key="beer.id">
          <v-card-title class="pb-0" height="200">
            <h3>{{ beer.name }}</h3>
            <v-img height="250"  :src="beer.image_url"></v-img>
          </v-card-title>
          <v-card-body>
            <p><b>Tagline</b>  {{beer.tagline}}</p>
            <p style="font-size:11px;">{{beer.description}}</p>
            <p><b>First Brewed</b>  {{beer.first_brewed}}</p>
        </v-card-body>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
