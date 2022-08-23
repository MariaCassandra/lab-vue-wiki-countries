<template>
  <div class="col-7">
    <img
      src="https://restcountries.eu/data/fra.svg"
      alt="country flag"
      style="width: 300px"
    />
    <h1> here comes the country name </h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td> here comes the capital </td>
        </tr>
        <tr>
          <td>Area</td>
          <td> here comes the area km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li><a href="/AND"> here comes the list of the border countries </a></li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CountryDetails",
};
</script>