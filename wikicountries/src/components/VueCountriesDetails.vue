<script setup>
import { useCountriesStore } from '../stores/store.js';
import { computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import VueSpinner from './VueSpinner.vue';

const router = useRouter();
const route = useRoute();

const countriesStore = useCountriesStore();
countriesStore.selectCountry(route.params.alpha3code);
countriesStore.fetchSelectedCountry();

watch(route, (newValue, oldValue) => {
  countriesStore.selectCountry(newValue.params.alpha3code);
  countriesStore.fetchSelectedCountry();
})

const selectedCountry = computed(() => {
  return countriesStore.selectedCountry;
});


</script>

<template>
  <div v-if="selectedCountry">
		<img :src="`https://flagpedia.net/data/flags/icon/72x54/${selectedCountry.alpha2Code.toLowerCase()}.png`"
			alt="country flag" style="width: 70px" />
		<h1>{{  selectedCountry.name  }}</h1>
		<table class="table">
			<thead></thead>
			<tbody>
				<tr>
					<td style="width: 30%">Capital</td>
					<td>{{  selectedCountry.capital  }}</td>
				</tr>
				<tr>
					<td>Area</td>
					<td>
						{{  selectedCountry.area  }} km <sup>2</sup>
					</td>
				</tr>
				<tr>
					<td>Borders</td>
					<td>
						<p v-if="selectedCountry.borders.length === 0">This country has no borders 🤷‍♂️</p>
						<ul v-else>
							<li v-for="(border, index) in selectedCountry.borders" :key="index">
								<router-link :to="`/details/${border}`">{{  border  }}</router-link>
							</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div v-else>
		<VueSpinner msg="Loading"/>
	</div>
</template>

<style scoped>

</style>