var expect = chai.expect;

describe("Test Funcionales", function(){

    it("32F = 0C", function(){
        var temp = new Temperatura();  
        temp.set_valor(32);
        temp.set_tipo("F");
        var result =temp.to_c();
        expect(result).to.equal(0);
    });
    
    it("45C = 113F", function(){
        var temp = new Temperatura();  
        temp.set_valor(45);
        temp.set_tipo("C");
        var result =temp.to_f();
        expect(result).to.equal(113);
    });

    it('Buenos dias = error', function() {
        original.value = "Buenos dias";
        calculate()
       /* expect.equal(converted.innerHTML, 'ERROR! Prueba con algo como esto \'-4.2C\' ', /ERROR/);*/
        expect(converted.innerHTML).to.equal('ERROR! Prueba con algo como esto \'-4.2C\' ', /ERROR/);
    });
    
    it("Prueba completa 4", function() {
        original.value = "32F";
        calculate()
        expect(converted.innerHTML).to.equal("0 C");
    });
    
    it("Prueba completa 5", function() {
        original.value = "45C";
        calculate()
        expect(converted.innerHTML).to.equal("113 F");
    });
    
    it("32,0576F === 0.032C", function() {
      window.onload = function() {
        var temp = new Temperatura(-2.3,0,"C");
        var res = "El resultado es: " + temp.get_valor() + " " + temp.get_tipo();
        expect(result.innerHTML).to.equal("El resultado es: -2.3 C");
      }
    });
    
    it("5X === ERROR", function() {
      window.onload = function() {
        var temp = new Temperatura(5,0,"X");
        calculate();
        expect(converted.innerHTML).to.match("/no es correcto/");
      }
    });
   
});
