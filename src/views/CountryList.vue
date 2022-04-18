<template>
  <h1>Country List</h1>
  <div class="countries">
    <CountriesCard
      v-for="country in countries"
      :key="country.id"
      :country="country"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CountriesCard from "@/components/CountriesCard.vue";

export default {
  name: "CountryList",
  components: {
    CountriesCard,
  },
  data() {
    return {
      countries: [
        {
          id: 1,
          name: "Saudi Arabia",
          flag: "photo",
        },
        {
          id: 2,
          name: "Syria",
          flag: "photo2",
        },
      ],
    };
  },
};
</script>
<style scoped>
.countries {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
