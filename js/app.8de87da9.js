(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/coronatracker/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2ff6":function(t,e,a){},3100:function(t,e,a){},"43c6":function(t,e,a){"use strict";a("d1c2")},"459a":function(t,e,a){"use strict";a("2ff6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i={methods:{getThemeBackgroundColorAndShadow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return this.theme?{backgroundColor:this.theme[t],boxShadow:"0px 2px 7px "+this.theme[t]}:{}},getThemeBackgroundColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return this.theme?{backgroundColor:this.theme[t]}:{}},getThemeColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return this.theme?{color:this.theme[t],textShadow:"0px 0px 10px "+this.theme[t]+"50"}:{}}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{theme:this.theme,title:"Case Tracker",links:this.links}}),a("CountryDashboard",{attrs:{theme:this.theme,caseData:this.info,scrollY:this.scrollY}})],1)},o=[],r=a("bc3a"),c=a.n(r),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"topMargin newText"},[t._v("Coronavirus World Statistics")]),a("span",{staticClass:"dateAligner newText"},[a("h4",[t._v("Date: ")]),a("p",{staticStyle:{"margin-left":"10px"}},[t._v(" "+t._s(t.getCurrentDateInHumanFormat())+" ")])]),this.caseData.Global?a("div",{staticClass:"topInfoPanel"},[a("div",{staticClass:"subInfo"},[a("i",{staticClass:"lni lni-user icon bold",style:t.getThemeColor("primary")}),a("h3",{staticClass:"newText"},[t._v("New Confirmed")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.NewConfirmed))+" ")])]),a("div",{staticClass:"subInfo"},[a("i",{staticClass:"lni lni-users icon",style:t.getThemeColor("primary")}),a("h3",{staticClass:"newText"},[t._v("Total Confirmed")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.TotalConfirmed))+" ")])]),a("span",{staticClass:"separator"}),a("div",{staticClass:"subInfo"},[a("i",{staticClass:"lni lni-hospital icon bold",style:t.getThemeColor("danger")}),a("h3",{staticClass:"newText"},[t._v("New Deaths")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.NewDeaths))+" ")])]),a("div",{staticClass:"subInfo"},[a("i",{staticClass:"lni lni-hospital icon",style:t.getThemeColor("danger")}),a("h3",{staticClass:"newText"},[t._v("Total Deaths")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.TotalDeaths))+" ")])]),a("span",{staticClass:"separator"}),a("div",{staticClass:"subInfo"},[a("i",{staticClass:"lni lni-pulse icon bold",style:t.getThemeColor("success")}),a("h3",{staticClass:"newText"},[t._v("New Recovered")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.NewRecovered))+" ")])]),a("div",{staticClass:"subInfo lastSubInfo"},[a("i",{staticClass:"lni lni-pulse icon",style:t.getThemeColor("success")}),a("h3",{staticClass:"newText"},[t._v("Total Recovered")]),a("h3",{staticClass:"newText"},[t._v(" "+t._s(t.numberWithCommas(this.caseData.Global.TotalRecovered))+" ")])])]):t._e(),a("div",{staticClass:"tableTitlePanel"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchedWord,expression:"searchedWord"}],attrs:{placeholder:"Search.."},domProps:{value:t.searchedWord},on:{input:function(e){e.target.composing||(t.searchedWord=e.target.value)}}})])]),a("div",{ref:"table_move_header",staticClass:"tableHeader",class:{adjustMove:t.isHeaderSticked},style:t.myStyle,attrs:{id:"table_move_header"}},[a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("Country")},on:{click:function(e){return t.sortBy("Country",!1)}}},[a("h3",[t._v("Country")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("NewConfirmed")},on:{click:function(e){return t.sortBy("NewConfirmed")}}},[a("h3",[t._v("New Confirmed")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("TotalConfirmed")},on:{click:function(e){return t.sortBy("TotalConfirmed")}}},[a("h3",[t._v("Total Confirmed")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("NewDeaths")},on:{click:function(e){return t.sortBy("NewDeaths")}}},[a("h3",[t._v("New Deaths")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("TotalDeaths")},on:{click:function(e){return t.sortBy("TotalDeaths")}}},[a("h3",[t._v("Total Deaths")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("NewRecovered")},on:{click:function(e){return t.sortBy("NewRecovered")}}},[a("h3",[t._v("New Recovered")])]),a("div",{staticClass:"tableHeaderCell",class:{activeSorting:t.isActive("TotalRecovered")},on:{click:function(e){return t.sortBy("TotalRecovered")}}},[a("h3",[t._v("Total Recovered")])])]),a("ul",{staticClass:"reset"},t._l(this.originalData.Countries,(function(t){return a("li",{key:t.slug},[a("SingleCountry",{attrs:{countryData:t}})],1)})),0)])},u=[],h=(a("99af"),a("4de4"),a("caad"),a("fb6a"),a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("5319"),a("498a"),a("5530")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"countryHolder"},[a("div",{staticClass:"countrySubInfo flagAligner"},[a("img",{staticClass:"countryFlag",attrs:{src:t.getFlagUrl}}),a("h3",{staticClass:"infoText countryName"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.Country))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.NewConfirmed))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.TotalConfirmed))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.NewDeaths))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.TotalDeaths))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.NewRecovered))+" ")])]),a("div",{staticClass:"countrySubInfo"},[a("p",{staticClass:"infoText"},[t._v(" "+t._s(t.numberWithCommas(t.countryData.TotalRecovered))+" ")])])])},f=[],m={name:"SingleCountry",props:{countryData:Object},computed:{getFlagUrl:function(){var t=null;return this.countryData.CountryCode&&(t="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/"+this.countryData.CountryCode.toLowerCase()+".svg"),t}},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},v=m,C=(a("459a"),a("2877")),p=Object(C["a"])(v,d,f,!1,null,"c5ba01d8",null),g=p.exports,y={name:"CountryDashboard",components:{SingleCountry:g},props:{theme:Object,caseData:Object,scrollY:Number},computed:{},methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getCurrentDateInHumanFormat:function(){if(this.originalData.Date){var t=new Date(this.originalData.Date),e=t.getFullYear(),a=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,s=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return"".concat(e+"-"+a+"-"+s+"  ").concat(i).concat(":").concat(n)}return""},isActive:function(t){return this.sortedBy==t},sortBy:function(t){var e,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.sortedBy!=t&&(e=a?function(e,a){return a[t]-e[t]}:function(e,a){return e[t].localeCompare(a[t])},this.originalData.Countries.sort(e),this.sortedBy=t)}},data:function(){return{myStyle:{},originalTop:0,isHeaderSticked:!1,top:0,sortedBy:"TotalDeaths",searchedWord:"",originalData:{}}},mounted:function(){this.originalTop=this.$refs["table_move_header"].getBoundingClientRect().bottom,this.top=this.$refs["table_move_header"].getBoundingClientRect().height},watch:{scrollY:function(t){if(t<this.originalTop+4*this.top)return this.$delete(this.myStyle,"top"),void(this.isHeaderSticked=!1);var e=this.scrollY-2*this.top-this.originalTop;e>0?(this.$set(this.myStyle,"top","".concat(e,"px")),this.isHeaderSticked=!0):(this.$delete(this.myStyle,"top"),this.isHeaderSticked=!1)},searchedWord:function(){var t=this;""!=this.searchedWord.trim()?this.originalData.Countries=this.caseData.Countries.filter((function(e){return e.Country.toLowerCase().includes(t.searchedWord.toLowerCase())})):this.originalData.Countries=this.caseData.Countries.slice()},caseData:function(){var t=function(t,e){return e.TotalDeaths-t.TotalDeaths};this.caseData.Countries.sort(t),this.originalData=Object(h["a"])({},this.caseData)}}},b=y,_=(a("67e5"),Object(C["a"])(b,l,u,!1,null,"2c11d560",null)),D=_.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header",style:t.getThemeBackgroundColorAndShadow("primary")},[s("div",{staticClass:"inner_header"},[s("div",{staticClass:"logo_container"},[s("img",{staticClass:"logo",attrs:{src:a("cf05")}}),s("h1",[t._v(t._s(t.title))])]),s("ul",{staticClass:"navigation"},t._l(this.links,(function(e){return s("li",{key:e.title},[s("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])])})),0)])])},w=[],S={name:"Header",props:{title:String,links:Array,theme:Object}},x=S,k=(a("43c6"),Object(C["a"])(x,T,w,!1,null,"3f6bc2d5",null)),W=k.exports,H={primary:"#0070f3",secondary:"#031123",danger:"#ff4848",success:"#14ffa1"},j={name:"App",components:{CountryDashboard:D,Header:W},data:function(){return{info:{},theme:H,links:[{title:"API Development",url:"https://documenter.getpostman.com/view/10808728/SzS8rjbc"}],scrollY:null}},mounted:function(){var t=this,e=this;window.addEventListener("scroll",(function(e){t.scrollY=Math.round(window.scrollY)})),c.a.get("https://api.covid19api.com/summary").then((function(t){e.info=t.data}))}},N=j,O=(a("034f"),Object(C["a"])(N,n,o,!1,null,null,null)),B=O.exports;s["a"].config.productionTip=!1,s["a"].mixin(i),new s["a"]({render:function(t){return t(B)}}).$mount("#app")},"67e5":function(t,e,a){"use strict";a("3100")},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.117e093f.png"},d1c2:function(t,e,a){}});
//# sourceMappingURL=app.8de87da9.js.map