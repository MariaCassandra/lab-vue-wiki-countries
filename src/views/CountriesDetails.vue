<template>
  <div class="countries-details--container" v-if="countryInfo !== null">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code}.png`" :alt="`Flag of ${countryInfo.name}`">
    <h1>{{ countryInfo.name }}</h1>
    <p>Capital: {{ countryInfo.capital}}</p>
    <p>Area: {{ countryInfo.area}}km2</p>
    <router-link v-for="border in countryInfo.borders" :key="border" :to="border">
    <p>{{ border }}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CountriesDetailsView',
    data() {
      return {
        countryInfo: null,
      };
    },
    created() {
      const { countryCode } = this.$route.params;
      if(countryCode) {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
          .then((response) => response.json())
          .then((data) => {
            this.countryInfo = {
              area: data.area,
              alpha2Code: data.alpha2Code.toLowerCase(),
              name: data.name.common,
              capital: data.capital[0],
              borders: data.borders,
            }
          });
      }
      this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            if(toParams.countryCode) {
            fetch(`https://ih-countries-api.herokuapp.com/countries/${toParams.countryCode}`)
              .then((response) => response.json())
              .then((data) => {
                this.countryInfo = {
                  area: data.area,
                  alpha2Code: data.alpha2Code.toLowerCase(),
                  name: data.name.common,
                  capital: data.capital[0],
                  borders: data.borders,
                }
              });
            }
        }
      )
    },
  }
  </script>
