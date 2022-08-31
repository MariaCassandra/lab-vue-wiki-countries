<template>
  <div class="countries-list--container">
    <div class="scrollable--container">
        <router-link v-for="country in countries" :key="country.id" :to="`${country.alpha3Code}`">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" :alt="`Flag of ${country.name}`">
             <p>{{ country.name }}</p>
        </router-link>          
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountriesList',
  props: {
    countries: Array,
  },
};
</script>

<style>
.countries-list--container{
  margin-left: 0%;
  flex: 0.2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
}
</style>
