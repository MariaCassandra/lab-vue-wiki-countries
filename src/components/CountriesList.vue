<template>
  <div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link class="list-group-item list-group-item-action" to="/ABW">
            <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" />
            <p> Here comes the country name </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
};
</script>