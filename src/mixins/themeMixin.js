export const themeMixin = {
  methods : {
       getThemeBackgroundColorAndShadow( section = "primary" ){
         if( this.theme ) {
           return {
               backgroundColor : this.theme[section],
               boxShadow: "0px 2px 7px " + this.theme[section]
           }
         } else {
           return {}
         }
     },
     getThemeBackgroundColor( section = "primary" ){
       if( this.theme ) {
         return {
             backgroundColor : this.theme[section]
         }
       } else {
         return {}
       }
   },
   getThemeColor( section = "primary" ){
     if( this.theme ) {
       return {
           color : this.theme[section],
           textShadow: "0px 0px 10px " + this.theme[section] + "50"
       }
     } else {
       return {}
     }
    }
   }
}
