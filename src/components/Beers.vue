<template>
  <div class="hello">
    <h3>this is it</h3>
  </div>
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
