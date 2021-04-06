"use strict";

const abc = {
    salute: "",
    greet: function() {
      this.salute = "Hello";
      console.log(this.salute); //Hello
      const setFrench = function(newSalute) {  //inner function
        this.salute = newSalute;
      };
      setFrench("Bonjour");
      console.log(this.salute); //Bonjour??
    }
  };
  console.log("global before:  ", global);
  abc.greet();  //Hello  Hello  ???
  console.log("global after *************************:  ", global);

  