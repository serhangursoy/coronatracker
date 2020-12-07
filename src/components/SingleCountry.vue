<template>
<div class="countryHolder">
  <div class="countrySubInfo flagAligner">
    <img v-bind:src="getFlagUrl" class="countryFlag" />
    <h3 class="infoText countryName"> {{ numberWithCommas(countryData.Country) }} </h3>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.NewConfirmed) }} </p>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.TotalConfirmed) }} </p>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.NewDeaths) }} </p>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.TotalDeaths) }} </p>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.NewRecovered) }} </p>
  </div>
  <div class="countrySubInfo">
    <p class="infoText"> {{ numberWithCommas(countryData.TotalRecovered) }} </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'SingleCountry',
  props: {
    countryData: Object
  },
  computed: {
    getFlagUrl() {
      let shortcodeURL = null;
      if (this.countryData.CountryCode) {
        shortcodeURL = 'https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/' + this.countryData.CountryCode.toLowerCase() + '.svg';
      }
      return shortcodeURL;
    }
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Oxygen', sans-serif !important;
}

.countryHolder {
  background-color: #f7f7f7;
  border-radius: 7px;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);
  display: inline-flex;
  width: 80%;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 2rem;
}

.countrySubInfo {
  max-width: 25%;
  width: 25%;
  text-align: center;
  align-content: center;
  display: inline;
  align-items: center;
  height: 4rem;
  text-overflow: ellipsis !important;
}

.flagAligner {
  display: inline-flex;
  margin-left: 1%;
  margin-right: 1%;
  align-items: center;
  text-align: center;

}

.countryName {
  font-size: 0.8rem;
  width: 100%;
  text-overflow: ellipsis;
}

.countryFlag {
  width: 40px;
  height: 40px;
  border-radius: 1px;
  margin-right: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .countryHolder {
    font-size: 0.5rem;
    margin: 0;
    width: 100%;
    max-width: 100%;
  }

  .countryFlag {
    width: 25px;
    height: 25px;
    margin: 0;
  }

  .flagAligner {
    display: block;
  }

  .countryName {
    margin: 0;
    font-size: 0.5rem;
  }
}
</style>
