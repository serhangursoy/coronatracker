<template>
  <div id="app">
    <Header v-bind:theme="this.theme" :title="title" v-bind:links="this.links" @languageUpdate="onLanguageUpdate" v-bind:language="this.languageCode" />
    <CountryDashboard v-bind:theme="this.theme" v-bind:caseData="this.info" :scrollY="this.scrollY" v-bind:language="this.languageCode" />
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
      links: [ { title: "-", url: "https://documenter.getpostman.com/view/10808728/SzS8rjbc"},
              { title: ".", url: "https://github.com/serhangursoy/coronatracker"}],
      scrollY: null,
      languageCode: "en",
      title: "-"
    }
  },
  mounted(){
    var self=this;
    // eslint-disable-next-line no-unused-vars
    window.addEventListener('scroll', (event) => {
      this.scrollY = Math.round(window.scrollY);
    });

    this.title = this.getTranslation("header.title");
    this.links = [ { title: this.getTranslation("header.api_doc"), url: "https://documenter.getpostman.com/view/10808728/SzS8rjbc"},
            { title: this.getTranslation("header.github"), url: "https://github.com/serhangursoy/coronatracker"}]

    axios
     .get('https://api.covid19api.com/summary')
     .then(response => {
      // console.log( "We have something",  response)
       self.info = response.data}
     )
  },
  methods: {
    onLanguageUpdate( updatedLang ) {
      this.languageCode = updatedLang;
      this.language = updatedLang;
      this.title = this.getTranslation("header.title");
      this.links = [ { title: this.getTranslation("header.api_doc"), url: "https://documenter.getpostman.com/view/10808728/SzS8rjbc"},
              { title: this.getTranslation("header.github"), url: "https://github.com/serhangursoy/coronatracker"}]
    }
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
