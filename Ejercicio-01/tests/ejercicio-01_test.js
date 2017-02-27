var assert = require('assert');
var idioma = require('../ejercicio-01.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('holaMundo', function(){
    it('should return string if one params is "in"', function(){
      assert.equal(idioma.holaMundo("Hola Mundo","in"),"Hello World!")
    })

    it('should return an Error if one of 2 params are missing', function(){
      assert.equal(idioma.holaMundo("es"),"Error")
    })

    it('should return an Error if one of 2 params is undefined', function(){
      assert.equal(idioma.holaMundo(undefined,"es"),"Error")
      assert.notEqual(idioma.holaMundo("Hola Mundo",undefined),"Error")
    })
})
