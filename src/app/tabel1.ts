export class Tabel1 {
  NS1: number;
  NS2: any;
  NS3: number;
  NS4: number;
  NS5: number;
  NS6: number;

  PT2: any;
  PT4: number;
  PT5: number;

  R1: any;
  R2: any;
  R3: any;
  R4: any;
  R5: any;

  NA1: any;
  NA2: any;
  NA3: any;
  NA4: any;
  NA5: any;
  NA6: any;



  Total1: number;

  public rata(x,y, baris) {
    const result = ( x + y ) / 2;
    if (baris === '2') {
      this.R2 = result;
      return this.R2;
    } else if (baris === '4') {
      this.R4 = result;
      return this.R4;
    } else if (baris === '5') {
      this.R5 = result;
      return this.R5;
    }
  }

  public saveRata(x,y, baris) {
    if (baris === '1') {
      this.R1 = this.NS1;
      return this.R1;
    } else if (baris === '2') {
      this.R2 = this.rata(x,y,'2');
      return this.R2;
    } else if (baris === '3') {
      this.R3 = x;
      return this.R3;
    } else if (baris === '4') {
      this.R4 = this.rata(x,y,'4');
      return this.R4;
    } else if (baris === '5') {
      this.R5 = this.rata(x,y,'5');
      return this.R5;
    }
  }

  public saveNA(x, baris, persen){
    if (baris === '1') {
      this.NA1 = x * persen;
      return this.NA1.toFixed(2);
    } else if (baris === '2') {
      this.NA2 = x * persen;
      return this.NA2.toFixed(2);
    } else if (baris === '3') {
      this.NA3 = x * persen;
      return this.NA3.toFixed(2);
    } else if (baris === '4') {
      this.NA4 = x * persen;
      return this.NA4.toFixed(2);
    } else if (baris === '5') {
      this.NA5 = x * persen;
      return this.NA5.toFixed(2);
    } else if (baris === '6') {
      this.NA6 = x * persen;
      return this.NA6.toFixed(2);
    }
  }
  public getTotalA() {
    this.Total1 = this.NA1 + this.NA2 + this.NA3 + this.NA4 + this.NA5;
    return this.Total1.toFixed(2);
  }
  public getTotalB() {
    this.Total1 = this.NA1 + this.NA2 + this.NA3 + this.NA4 + this.NA5 + this.NA6;
    return this.Total1.toFixed(2);
  }
  public getTotalC() {
    this.Total1 = this.NA1 + this.NA2 + this.NA3 + this.NA4;
    return this.Total1.toFixed(2);
  }

}
