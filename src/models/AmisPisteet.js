import React, {Component} from 'react';

class AmisPisteet{

  constructor(keskiArvoKolme, keskiarvoViisi, pisteet, asteikkoKolme, asteikkoViisi){

    this.keskiArvoKolme = keskiArvoKolme;
    this.keskiarvoViisi = keskiarvoViisi;
    this.pisteet = pisteet;

    this.state = {vaikutus:
      [
        asteikkoKolme = {
          kolme: 20,
          kaksi: 13,
          yksi: 2
        },
        asteikkoViisi = {
          viisi: 20,
          neljä: 15,
          kolme: 10,
          kaksi:5,
          yksi: 1
        }
      ]
    }
  
      if ((keskiArvoKolme == 3.00) || (keskiarvoViisi == 5.00)){
        pisteet = 90;
      } else if ((keskiArvoKolme >= 2.98) || (keskiarvoViisi >= 4,97)) {
        pisteet = 89;
      } else if ((keskiArvoKolme >= 2.96) || (keskiarvoViisi >= 4.94)) {
        pisteet = 88;
      } else if ((keskiArvoKolme >= 2.95) || (keskiarvoViisi >= 4.91)) {
        pisteet = 87;
      } else if ((keskiArvoKolme >= 2.93) || (keskiarvoViisi >= 4.88)) {
        pisteet = 86;
      } else if ((keskiArvoKolme >= 2.91) || (keskiarvoViisi >= 4.85)) {
        pisteet = 85;
      } else if ((keskiArvoKolme >= 2.89) || (keskiarvoViisi >= 4.82)) {
        pisteet = 84;
      } else if ((keskiArvoKolme >= 2.87) || (keskiarvoViisi >= 4.79)) {
        pisteet = 83;
      } else if ((keskiArvoKolme >= 2.86) || (keskiarvoViisi >= 4.76)) {
        pisteet = 82;
      } else if ((keskiArvoKolme >= 2.84) || (keskiarvoViisi >= 4.73)) {
        pisteet = 81;
      } else if ((keskiArvoKolme >= 2.82) || (keskiarvoViisi >= 4.70)) {
        pisteet = 80;
      } else if ((keskiArvoKolme >= 2.80) || (keskiarvoViisi >= 4.67)) {
        pisteet = 79;
      } else if ((keskiArvoKolme >= 2.78) || (keskiarvoViisi >= 4.64)) {
        pisteet = 78;
      } else if ((keskiArvoKolme >= 2.77) || (keskiarvoViisi >= 4.61)) {
        pisteet = 77;
      } else if ((keskiArvoKolme >= 2.75) || (keskiarvoViisi >= 4.58)) {
        pisteet = 76;
      } else if ((keskiArvoKolme >= 2.73) || (keskiarvoViisi >= 4.55)) {
        pisteet = 75;
      } else if ((keskiArvoKolme >= 2.71) || (keskiarvoViisi >= 4.52)) {
        pisteet = 74;
      } else if ((keskiArvoKolme >= 2.69) || (keskiarvoViisi >= 4.49)) {
        pisteet = 73;
      } else if ((keskiArvoKolme >= 2.67) || (keskiarvoViisi >= 4.46)) {
        pisteet = 72;
      } else if ((keskiArvoKolme >= 2.65) || (keskiarvoViisi >= 4.42)) {
        pisteet = 71;
      } else if ((keskiArvoKolme >= 2.63) || (keskiarvoViisi >= 4.39)) {
        pisteet = 70;
      } else if ((keskiArvoKolme >= 2.61) || (keskiarvoViisi >= 4.35)) {
        pisteet = 69;
      } else if ((keskiArvoKolme >= 2.59) || (keskiarvoViisi >= 4.31)) {
        pisteet = 68;
      } else if ((keskiArvoKolme >= 2.56) || (keskiarvoViisi >= 4.28)) {
        pisteet = 67;
      } else if ((keskiArvoKolme >= 2.54) || (keskiarvoViisi >= 4.24)) {
        pisteet = 66;
      } else if ((keskiArvoKolme >= 2.52) || (keskiarvoViisi >= 4.20)) {
        pisteet = 65;
      } else if ((keskiArvoKolme >= 2.50) || (keskiarvoViisi >= 4.16)) {
        pisteet = 64;
      } else if ((keskiArvoKolme >= 2.48) || (keskiarvoViisi >= 4.13)) {
        pisteet = 63;
      } else if ((keskiArvoKolme >= 2.45) || (keskiarvoViisi >= 4.09)) {
        pisteet = 62;
      } else if ((keskiArvoKolme >= 2.43) || (keskiarvoViisi >= 4.05)) {
        pisteet = 61;
      } else if ((keskiArvoKolme >= 2.41) || (keskiarvoViisi >= 4.02)) {
        pisteet = 60;
      } else if ((keskiArvoKolme >= 2.39) || (keskiarvoViisi >= 3.98)) {
        pisteet = 59;
      } else if ((keskiArvoKolme >= 2.37) || (keskiarvoViisi >= 3.94)) {
        pisteet = 58;
      } else if ((keskiArvoKolme >= 2.34) || (keskiarvoViisi >= 3.91)) {
        pisteet = 57;
      } else if ((keskiArvoKolme >= 2.32) || (keskiarvoViisi >= 3.87)) {
        pisteet = 56;
      } else if ((keskiArvoKolme >= 2.30) || (keskiarvoViisi >= 3.83)) {
        pisteet = 55;
      } else if ((keskiArvoKolme >= 2.28) || (keskiarvoViisi >= 3.79)) {
        pisteet = 54;
      } else if ((keskiArvoKolme >= 2.26) || (keskiarvoViisi >= 3.76)) {
        pisteet = 53;
      } else if ((keskiArvoKolme >= 2.23) || (keskiarvoViisi >= 3.72)) {
        pisteet = 52;
      } else if ((keskiArvoKolme >= 2.21) || (keskiarvoViisi >= 3.68)) {
        pisteet = 51;
      } else if ((keskiArvoKolme >= 2.19) || (keskiarvoViisi >= 3.65)) {
        pisteet = 50;
      } else if ((keskiArvoKolme >= 2.17) || (keskiarvoViisi >= 3.61)) {
        pisteet = 49;
      } else if ((keskiArvoKolme >= 2.15) || (keskiarvoViisi >= 3.57)) {
        pisteet = 48;
      } else if ((keskiArvoKolme >= 2.12) || (keskiarvoViisi >= 3.54)) {
        pisteet = 47;
      } else if ((keskiArvoKolme >= 2.10) || (keskiarvoViisi >= 3.50)) {
        pisteet = 46;
      } else if ((keskiArvoKolme >= 2.08) || (keskiarvoViisi >= 3.46)) {
        pisteet = 45;
      } else if ((keskiArvoKolme >= 2.05) || (keskiarvoViisi >= 3.42)) {
        pisteet = 44;
      } else if ((keskiArvoKolme >= 2.03) || (keskiarvoViisi >= 3.37)) {
        pisteet = 43;
      } else if ((keskiArvoKolme >= 2.00) || (keskiarvoViisi >= 3.33)) {
        pisteet = 42;
      } else if ((keskiArvoKolme >= 1.97) || (keskiarvoViisi >= 3.29)) {
        pisteet = 41;
      } else if ((keskiArvoKolme >= 1.95) || (keskiarvoViisi >= 3.24)) {
        pisteet = 40;
      } else if ((keskiArvoKolme >= 1.92) || (keskiarvoViisi >= 3.20)) {
        pisteet = 39;
      } else if ((keskiArvoKolme >= 1.89) || (keskiarvoViisi >= 3.15)) {
        pisteet = 38;
      } else if ((keskiArvoKolme >= 1.86) || (keskiarvoViisi >= 3.11)) {
        pisteet = 37;
      } else if ((keskiArvoKolme >= 1.85) || (keskiarvoViisi >= 3.07)) {
        pisteet = 36;
      } else if ((keskiArvoKolme >= 1.81) || (keskiarvoViisi >= 3.02)) {
        pisteet = 35;
      } else if ((keskiArvoKolme >= 1.78) || (keskiarvoViisi >= 2.98)) {
        pisteet = 34;
      } else if ((keskiArvoKolme >= 1.76) || (keskiarvoViisi >= 2.93)) {
        pisteet = 33;
      } else if ((keskiArvoKolme >= 1.73) || (keskiarvoViisi >= 2.89)) {
        pisteet = 32;
      } else if ((keskiArvoKolme >= 1.70) || (keskiarvoViisi >= 2.85)) {
        pisteet = 31;
      } else if ((keskiArvoKolme >= 1.68) || (keskiarvoViisi >= 2.80)) {
        pisteet = 30;
      } else if ((keskiArvoKolme >= 1.65) || (keskiarvoViisi >= 2.76)) {
        pisteet = 29;
      } else if ((keskiArvoKolme >= 1.62) || (keskiarvoViisi >= 2.71)) {
        pisteet = 28;
      } else if ((keskiArvoKolme >= 1.59) || (keskiarvoViisi >= 2.67)) {
        pisteet = 27;
      } else if ((keskiArvoKolme >= 1.57) || (keskiarvoViisi >= 2.63)) {
        pisteet = 26;
      } else if ((keskiArvoKolme >= 1.54) || (keskiarvoViisi >= 2.58)) {
        pisteet = 25;
      } else if ((keskiArvoKolme >= 1.51) || (keskiarvoViisi >= 2.54)) {
        pisteet = 24;
      } else if ((keskiArvoKolme >= 1.49) || (keskiarvoViisi >= 2.49)) {
        pisteet = 23;
      } else if ((keskiArvoKolme >= 1.47) || (keskiarvoViisi >= 2.43)) {
        pisteet = 22;
      } else if ((keskiArvoKolme >= 1.44) || (keskiarvoViisi >= 2.37)) {
        pisteet = 21;
      } else if ((keskiArvoKolme >= 1.42) || (keskiarvoViisi >= 2.30)) {
        pisteet = 20;
      } else if ((keskiArvoKolme >= 1.40) || (keskiarvoViisi >= 2.24)) {
        pisteet = 19;
      } else if ((keskiArvoKolme >= 1.38) || (keskiarvoViisi >= 2.18)) {
        pisteet = 18;
      } else if ((keskiArvoKolme >= 1.36) || (keskiarvoViisi >= 2.12)) {
        pisteet = 17;
      } else if ((keskiArvoKolme >= 1.34) || (keskiarvoViisi >= 2.05)) {
        pisteet = 16;
      } else if ((keskiArvoKolme >= 1.32) || (keskiarvoViisi >= 1.99)) {
        pisteet = 15;
      } else if ((keskiArvoKolme >= 1.30) || (keskiarvoViisi >= 1.93)) {
        pisteet = 14;
      } else if ((keskiArvoKolme >= 1.28) || (keskiarvoViisi >= 1.86)) {
        pisteet = 13;
      } else if ((keskiArvoKolme >= 1.26) || (keskiarvoViisi >= 1.80)) {
        pisteet = 12;
      } else if ((keskiArvoKolme >= 1.23) || (keskiarvoViisi >= 1.74)) {
        pisteet = 11;
      } else if ((keskiArvoKolme >= 1.21) || (keskiarvoViisi >= 1.67)) {
        pisteet = 10;
      } else if ((keskiArvoKolme >= 1.19) || (keskiarvoViisi >= 1.61)) {
        pisteet = 9;
      } else if ((keskiArvoKolme >= 1.17) || (keskiarvoViisi >= 1.55)) {
        pisteet = 8;
      } else if ((keskiArvoKolme >= 1.15) || (keskiarvoViisi >= 1.49)) {
        pisteet = 7;
      } else if ((keskiArvoKolme >= 1.13) || (keskiarvoViisi >= 1.42)) {
        pisteet = 6;
      } else if ((keskiArvoKolme >= 1.11) || (keskiarvoViisi >= 1.36)) {
        pisteet = 5;
      } else if ((keskiArvoKolme >= 1.09) || (keskiarvoViisi >= 1.30)) {
        pisteet = 4;
      } else if ((keskiArvoKolme >= 1.07) || (keskiarvoViisi >= 1.23)) {
        pisteet = 3;
      } else if ((keskiArvoKolme >= 1.05) || (keskiarvoViisi >= 1.17)) {
        pisteet = 2;
      } else if ((keskiArvoKolme >= 1.02) || (keskiarvoViisi >= 1.11)) {
        pisteet = 1;
      } else if ((keskiArvoKolme >= 1.00) || (keskiarvoViisi >= 1.00)) {
        pisteet = 0;
      }
      return pisteet;
    }
}

export default AmisPisteet;