<template>
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="navigation-container">
            <router-link class="navbar-brand" to="/">LAB - WikiCountries</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style>
.navigation-container {
    width: 100%;
    height: 10%;
}
</style>
