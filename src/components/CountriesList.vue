<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group-item list-group-item-action">
      <router-link v-for="country in countries" :key="country.id" :to="country.alpha3Code">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" :alt="`${country.name.common}`"/>
        <p>{{country.name.common }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
  props: {
    countries: Array,
  },
  };
</script>
