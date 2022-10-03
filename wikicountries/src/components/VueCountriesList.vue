<script setup>
import {mapState} from 'pinia';
import { useCountriesStore } from '../stores/store.js';
import {computed} from 'vue';
import VueSpinner from './VueSpinner.vue';

const countriesStore = useCountriesStore();
const countries = computed(() => {
  return countriesStore.allCountries;
})

</script>

<template>
  <div v-if="countries" class="container">
		<div class="row">
			<div class="col-5" style="max-height: 90vh; overflow: scroll">
				<div class="list-group">
					<router-link class="list-group-item list-group-item-action" :to="`/details/${country.alpha3Code}`" v-for="(country, index) in countries" :key="index">
						<img
							:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
						<p>{{  country.name  }}</p>
					</router-link>
				</div>
			</div>
			<div class="col-7">
				<router-view />
			</div>
		</div>
	</div>
	<div v-else>
		<VueSpinner msg="Loading countries"/>
	</div>
</template>

<style scoped>

</style>