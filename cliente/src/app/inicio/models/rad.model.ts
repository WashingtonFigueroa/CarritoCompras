export class Rad {
  grados: number;
  radianes: number;
  constructor(grados: number) {
    this.grados = grados;
    this.radianes = grados * Math.PI / 180;
  }
}
