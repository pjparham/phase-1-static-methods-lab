class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^a-z0-9áéíóúñü' \.,_-]/gim, "");
  }
  static titleize(string){
    let newString = string.replace(/\w\S*/g, function(txt){
      if (txt === "an" || txt === "the" || txt === "a" || txt === "of" || txt === "and" || txt === "for" || txt === "at" || txt === "but" || txt === "by" || txt === "from"){
        return txt
      } 
      else{
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  });
  return this.capitalize(newString)
  }
  //add static methods here
}