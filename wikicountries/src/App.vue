<script setup>
import VueNavbar from './components/VueNavbar.vue';
import VueCountriesList from './components/VueCountriesList.vue';
import { useCountriesStore } from './stores/store.js';

const countriesStore = useCountriesStore();
countriesStore.fetchCountries();

</script>

<template>
  <div class="app">
    <VueNavbar/>
    <VueCountriesList/>
  </div>
</template>

<style>
body {
  background-color: antiquewhite;
}
</style>