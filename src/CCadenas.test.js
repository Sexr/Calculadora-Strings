import sumarCadena from './CCadenas.js'

describe("Suma de la cadena", () => {
  it("vacio", () => {
    expect(sumarCadena("")).toEqual(0);
  });
  it("1", () => {
      expect(sumarCadena("1")).toEqual(1);
  });
});