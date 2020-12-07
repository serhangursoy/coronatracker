<template>
  <div id="app">
    <Header v-bind:theme="this.theme" title="Case Tracker" v-bind:links="this.links" />
    <CountryDashboard v-bind:theme="this.theme" v-bind:caseData="this.info" :scrollY="this.scrollY" />
  </div>
</template>

<script>
import axios from "axios";
import CountryDashboard from './components/CountryDashboard.vue'
import Header from './components/Header.vue';

const ThemeColor = {
  primary: "#0070f3",
  secondary: "#031123",
  danger: "#ff4848",
  success: "#14ffa1"
}

export default {
  name: 'App',
  components: {
    CountryDashboard,
    Header
  },
  data () {
    return {
      info: {},
      theme: ThemeColor,
      links: [ { title: "API Development", url: "https://documenter.getpostman.com/view/10808728/SzS8rjbc"}],
      scrollY: null
    }
  },
  mounted(){
    var self=this;
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('scroll', (event) => {
      this.scrollY = Math.round(window.scrollY);
    });

    axios
     .get('https://api.covid19api.com/summary')
     .then(response => {
      // console.log( "We have something",  response)
       self.info = response.data}
     )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}

li {list-style-type: none;}

</style>
