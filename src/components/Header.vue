<template>
<div class="header" :style="getThemeBackgroundColorAndShadow('primary')">
  <div class="inner_header">
    <a class="logo_container" href="https://github.com/serhangursoy/coronatracker">
      <img :src="require(`@/assets/logo.png`)" class="logo" />
      <h1>{{ title }}</h1>
    </a>
    <ul class="navigation">
      <li v-for="link in this.links" :key="link.title" class="singleLink">
        <a v-bind:href="link.url"> {{ link.title }} </a>
      </li>
      <li v-if="this.langOptions" class="languageWrapper">
        <ul class="languageList">
          <li v-for="langOption in this.langOptions" :key="langOption.key">
            <a @click="updateLanguage(langOption.key)"> <img :src="langOption.image" :class="{ activeLanguage: isActive(langOption.key) }" /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    links: Array,
    theme: Object
  },
  data() {
    return {
      langOptions: [{
          key: "tr",
          image: "https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/tr.svg"
        },
        {
          key: "en",
          image: "https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/us.svg"
        }
      ]
    }
  },
  methods: {
    updateLanguage(selected) {
      this.$emit('languageUpdate', selected);
    },
    isActive(lang) {
      if (this.language == lang) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Oxygen', sans-serif !important;
}


.header {
  width: 100%;
  height: 80px;
  display: block;
  transform: translate(0, 0);
  border-bottom-left-radius: 27px;
  overflow: visible;
  border-bottom-right-radius: 27px;
}



.inner_header {
  width: 70%;
  height: 100%;
  transform: translate(0, 0);
  display: block;
  margin: 0 auto;
  overflow: hidden;
}

.logo {
  height: 40px;
  width: 40px;
  align-self: center;
  margin: 0.5rem;
  background: white;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0 10px;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px;
  padding: 10px;
  border-radius: 70px;
}

.logo_container {
  height: 100%;
  display: table;
  float: left;
}

.logo_container h1 {
  color: white;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 32px;
  font-weight: 50;
}

.logo_container h1 span {
  font-weight: 800;
}

a {
  text-decoration: none
}

li {
  list-style-type: none;
}


.navigation {
  float: right;
  display: flex;
  height: 100%;
}

.navigation>li>a {
  height: 100%;
  display: table;
  float: left;
  padding: 0px;
  -webkit-transition: background-color 600ms linear, color 600ms linear, border-radius 900ms;
  -ms-transition: background-color 600ms linear, color 600ms linear, border-radius 900ms;
  transition: background-color 600ms linear, color 600ms linear, border-radius 900ms;
}



.navigation>li>a {
  display: table-cell;
  vertical-align: middle;
  height: 100%;
  color: white;
  font-family: 'Hind', sans-serif;
  font-size: 16px;
  padding: 20px;
}

.navigation>li>a:hover {
  background-color: white;
  color: black;
  border-radius: 5px;
  box-shadow: 0px 2px 16px rgb(255 255 255 / 41%);
}

.singleLink {
  margin-left: 1rem;
  margin-bottom: 1rem;
}

.languageSelectWrapper {
  width: 9rem;
}

.languageFlag {
  width: 1rem;
  height: 2rem;
}

.languageList {
  width: 2rem;
}

.languageList a:hover {
  cursor: pointer;
}

.activeLanguage {
  box-shadow: 0px 2px 16px rgb(255 255 255 / 41%);
}

@media only screen and (max-width: 600px) {
  .inner_header h1 {
    font-size: 1rem;
  }



  .logo_container {
    width: 20%;
    margin-left: 10%;
  }

  .inner_header {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .navigation {
    width: 30%;
    margin: 0;
    padding: 0;
    margin-top: 5%;
    float: right;
  }

  .navigation>li {
    width: 30%;
  }

  .singleLink {
    display: none;
  }

  .logo {
    height: 20px;
    width: 20px;
    margin: 0.5rem;
    margin-top: 1.1rem;
    padding: 10px;
  }
}
</style>
