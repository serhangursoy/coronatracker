<template>
<div class="container">
  <h3 class="topMargin newText noBottomMargin"> {{ this.getTranslation("information.title") }}</h3>
  <span class="dateAligner newText">
    <h4>{{this.getTranslation("information.date")}}: </h4>
    <p style="margin-left: 10px"> {{ getCurrentDateInHumanFormat() }} </p>
  </span>
  <div v-if="this.caseData.Global" class="topInfoPanel">
    <div class="subInfo">
      <i class="lni lni-user icon bold" :style="getThemeColor('primary')"></i>
      <h3 class="newText"> {{ this.getTranslation("information.NewConfirmed") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.NewConfirmed) }} </h3>
    </div>
    <div class="subInfo">
      <i class="lni lni-users icon" :style="getThemeColor('primary')"></i>
      <h3 class="newText">{{ this.getTranslation("information.TotalConfirmed") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.TotalConfirmed) }} </h3>
    </div>
    <span class='separator' />
    <div class="subInfo">
      <i class="lni lni-hospital icon bold" :style="getThemeColor('danger')"></i>
      <h3 class="newText">{{ this.getTranslation("information.NewDeaths") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.NewDeaths) }} </h3>
    </div>
    <div class="subInfo">
      <i class="lni lni-hospital icon" :style="getThemeColor('danger')"></i>
      <h3 class="newText">{{ this.getTranslation("information.TotalDeaths") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.TotalDeaths) }} </h3>
    </div>
    <span class='separator' />
    <div class="subInfo">
      <i class="lni lni-pulse icon bold" :style="getThemeColor('success')"></i>
      <h3 class="newText">{{ this.getTranslation("information.NewRecovered") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.NewRecovered) }} </h3>
    </div>
    <div class="subInfo lastSubInfo">
      <i class="lni lni-pulse icon" :style="getThemeColor('success')"></i>
      <h3 class="newText">{{ this.getTranslation("information.TotalRecovered") }}</h3>
      <h3 class="newText"> {{ numberWithCommas(this.caseData.Global.TotalRecovered) }} </h3>
    </div>
  </div>
  <div class="tableTitlePanel">
    <div> <input v-model="searchedWord" :placeholder='this.getTranslation("information.search")'> </div>
  </div>
  <div id="table_move_header" ref="table_move_header" class="tableHeader" :style="myStyle" :class="{'adjustMove': isHeaderSticked}">
    <div class="tableHeaderCell" v-on:click="sortBy('Country', false)" :class="{ activeSorting: isActive('Country') }">
      <h3>{{ this.getTranslation("information.Country") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('NewConfirmed')" :class="{ activeSorting: isActive('NewConfirmed') }">
      <h3>{{ this.getTranslation("information.NewConfirmed") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('TotalConfirmed')" :class="{ activeSorting: isActive('TotalConfirmed') }">
      <h3>{{ this.getTranslation("information.TotalConfirmed") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('NewDeaths')" :class="{ activeSorting: isActive('NewDeaths') }">
      <h3>{{ this.getTranslation("information.NewDeaths") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('TotalDeaths')" :class="{ activeSorting: isActive('TotalDeaths') }">
      <h3>{{ this.getTranslation("information.TotalDeaths") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('NewRecovered')" :class="{ activeSorting: isActive('NewRecovered') }">
      <h3>{{ this.getTranslation("information.NewRecovered") }}</h3>
    </div>
    <div class="tableHeaderCell" v-on:click="sortBy('TotalRecovered')" :class="{ activeSorting: isActive('TotalRecovered') }">
      <h3>{{ this.getTranslation("information.TotalRecovered") }}</h3>
    </div>
  </div>
  <ul class="reset">
    <li v-for="country in this.originalData.Countries" :key="country.slug">
      <SingleCountry v-bind:countryData="country" />
    </li>
  </ul>
</div>
</template>

<script>
import SingleCountry from "./SingleCountry"

export default {
  name: 'CountryDashboard',
  components: {
    SingleCountry
  },
  props: {
    theme: Object,
    caseData: Object,
    scrollY: Number
  },
  computed: {},
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getCurrentDateInHumanFormat() {
      if (this.originalData.Date) {
        let date = new Date(this.originalData.Date);
        var yyyy = date.getFullYear();
        var mm = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
        var dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        return "".concat(yyyy + "-" + mm + "-" + dd + "  ").concat(hh).concat(":").concat(min);
      } else {
        return ""
      }
    },
    isActive(askedType) {
      if (this.sortedBy == askedType) return true;
      else return false;
    },
    sortBy(requestedType, isNumeric = true) {
      if (this.sortedBy == requestedType) return;
      let sortFunc;
      if (!isNumeric) {
        sortFunc = (a, b) => {
          return a[requestedType].localeCompare(b[requestedType])
        };
      } else {
        sortFunc = (a, b) => {
          return b[requestedType] - a[requestedType]
        };
      }
      this.originalData.Countries.sort(sortFunc);
      this.sortedBy = requestedType;
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  data() {
    return {
      myStyle: {},
      originalTop: 0,
      isHeaderSticked: false,
      top: 0,
      sortedBy: "TotalDeaths",
      searchedWord: "",
      originalData: {}
    }
  },
  mounted() {
    this.originalTop = this.$refs["table_move_header"].getBoundingClientRect().bottom;
    this.top = this.$refs["table_move_header"].getBoundingClientRect().height;
  },
  watch: {
    scrollY(newValue) {
      if (newValue < this.originalTop + this.top * 4 || this.isMobile()) {
        this.$delete(this.myStyle, 'top');
        this.isHeaderSticked = false;
        return;
      }

      const newTop = this.scrollY - this.top * 2 - this.originalTop;
      if (newTop > 0) {
        this.$set(this.myStyle, 'top', `${newTop}px`);
        this.isHeaderSticked = true;
      } else {
        this.$delete(this.myStyle, 'top');
        this.isHeaderSticked = false;
      }
    },
    searchedWord() {
      if (this.searchedWord.trim() != "") {
        this.originalData.Countries = this.caseData.Countries.filter((obj) => {
          return obj.Country.toLowerCase().includes(this.searchedWord.toLowerCase())
        })
      } else {
        this.originalData.Countries = this.caseData.Countries.slice();
      }
    },
    caseData() { // watch it
      let sortFunc = (a, b) => {
        return b.TotalDeaths - a.TotalDeaths
      };
      this.caseData.Countries.sort(sortFunc);
      this.originalData = {
        ...this.caseData
      };
    }
  }
}
</script>

<style scoped>
/* Info Panel and SubInfos */
.topInfoPanel {
  display: inline-flex;
  box-shadow: 0 4px 15px 6px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: white;
  padding: 2%;
}

.subInfo {
  padding-left: 1rem;
  padding-right: 1rem;
  border-style: solid;
  border-width: 0px;
  border-right-width: 1px;
}

.lastSubInfo {
  border-right-width: 0px;
}

/* Table Header */
.tableHeader {
  display: inline-flex;
  position: relative;
  width: 100%;
  width: 80%;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 1rem;
  -webkit-transition: box-shadow 200ms linear, position 700ms linear, border-radius 900ms;
  -ms-transition: box-shadow 200ms linear, positionposition 700ms linear, border-radius 900ms;
  transition: box-shadow 200ms linear, position 700ms linear, border-radius 900ms;
}

.tableTitlePanel {
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: block;
  align-items: center;
  text-align: center;
  align-content: center;
  justify-content: center;
}

.tableTitlePanel>div>input {
  float: right;
  margin-right: 10%;
  background-color: white;
  border-radius: 7px;
  border-width: 1px;
  border: none;
  padding: 0.6rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}

.tableTitlePanel>div>input:hover {
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
}

.adjustMove {
  box-shadow: 0 4px 15px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px 6px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: white;
  background-color: white;
}

/* Header Cells */
.tableHeaderCell {
  max-width: 25%;
  width: 25%;
  text-align: center;
  -webkit-transition: box-shadow 200ms linear, color 600ms linear, border-radius 900ms;
  -ms-transition: box-shadow 200ms linear, color 600ms linear, border-radius 900ms;
  transition: box-shadow 200ms linear, color 600ms linear, border-radius 900ms;
}

.tableHeaderCell:hover {
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
}

.activeSorting {
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
}

/* Utils */
.noHover:hover {
  cursor: default;
  box-shadow: none;
}

.dateAligner {
  display: inline-flex;
  width: 100%;
  align-items: center;
  align-self: center;
  justify-content: center;
}

.newText {
  font-family: 'Oxygen', sans-serif !important;
}

.bold {
  font-weight: bold
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.icon {
  font-size: 1.5rem;
}

.topMargin {
  margin-top: 2%;
}

.noBottomMargin {
  margin-bottom: 0;
}

.reset {
  margin: 0;
  padding: 0
}


@media only screen and (max-width: 600px) {
  .topInfoPanel {
    display: flex;
    flex-flow: wrap;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .tableHeader,
  .tableTitlePanel {
    margin: 0
  }

  .separator {
    margin: 0;
    padding: 0;
    width: 0;
  }

  .tableHeader {
    overflow: scroll hidden;
    width: 100%
  }

  .tableTitlePanel {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }

  .tableHeaderCell>h3 {
    font-size: 0.5rem;
  }

  .container {
    margin: 0 2rem;
  }

  .subInfo {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: none;
    width: 37%;
  }

  .subInfo i,
  .subInfo h3 {
    font-size: 0.8rem;
  }

  .activeSorting {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    background: #0070f3;
    color: white;
  }
}
</style>
