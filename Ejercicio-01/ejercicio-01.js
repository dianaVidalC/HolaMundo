function holaMundo(string,idioma){
  if(idioma=="in"){
    return "Hello World!";
  }else if (idioma=="de") {

    return "Hallo Welt!"
  }else {
    return "Hola Mundo!"
  }

}

if(typeof exports !== 'undefined') {
    exports.holaMundo = holaMundo;
}
