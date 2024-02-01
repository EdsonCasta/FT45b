const antiTrollsSecurity = require('./antiTrollsSecurity');

describe('PARTE 02', () => {
   describe('Seguridad Anti Trolls', () => {

      it("Debe devolver un string vacio si recibe un string vacio", () => {
         expect(antiTrollsSecurity("")).toBe("");
      })

      it("Debe devolver un string vacio si recibe solo vocales", () => {
         expect(antiTrollsSecurity("aeiou")).toBe("");
      })

      it("Debe devolver un string vacio si recibe solo vocales en mayusculas", () => {
         expect(antiTrollsSecurity("AEIOU")).toBe("");
      })

      it("Debe devolver un string recibido si resive solo consonantes", () => {
         expect(antiTrollsSecurity("brrr")).toBe("brrr");
      })

      it("Debe devolver un string recibido si resive solo consonantes mayusculas", () => {
         expect(antiTrollsSecurity("SHHH")).toBe("SHHH");
      })

      it('Debe devolver el mismo string pero habiendo eliminado todas las vocales', () => {
         expect(antiTrollsSecurity('This website is for losers LOL!')).toBe(
            'Ths wbst s fr lsrs LL!'
         );
         expect(antiTrollsSecurity('What are you, a communist?')).toBe(
            'Wht r y,  cmmnst?'
         );
      });
   });
});
