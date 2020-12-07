import en from "../resources/en.json"
import tr from "../resources/tr.json"

export const translationMixin = {
  props: {
    language: String
  },
  methods: {
    getTranslation(key) {
      let file;
      if (this.language == "en") {
        file = en;
      } else if (this.language == "tr") {
        file = tr;
      } else {
        file = en;
      }
      let allTranslations = file;
      let tracker = allTranslations;
      let splitted = key.split(".");
      for (let k = 0; k < splitted.length; k++) {
        tracker = tracker[splitted[k] + ""];
      }
      return tracker;
    }
  },
  watch: {
    language(newLang){
      this.language = newLang;
    }
  }
}
