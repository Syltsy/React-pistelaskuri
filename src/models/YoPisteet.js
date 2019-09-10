import React, {Component} from 'react';

class YoPisteet{
  constructor(arvosana, L, E, M, C, B, A) {
    this.state.arvosana = arvosana;
    this.state.L = L;
    this.state.E = E;
    this.state.M = M;
    this.state.C = C;
    this.state.B = B;
    this.state.A = A;
   //Needs to be in a Class
    this.state = {
      arvosana:[
            {
              nimi:'mathP',
              L: 46,
              E: 43,
              M: 40,
              C: 35,
              B: 27,
              A: 19
            },
            {
              nimi:'mathL',
              L: 40,
              E: 35,
              M: 27,
              C: 19,
              B: 13,
              A: 6
            },
            {
              nimi:'kieliP',
              L: 46,
              E: 41,
              M: 34,
              C: 26,
              B: 18,
              A: 10
            },
            {
              nimi:'kieliK',
              L: 38,
              E: 34,
              M: 26,
              C: 18,
              B: 12,
              A: 5
            },
            {
              nimi:'kieliL',
              L: 30,
              E: 27,
              M: 21,
              C: 15,
              B: 9,
              A: 3
            },
            {
              nimi:'muut',
              L: 30,
              E: 27,
              M: 21,
              C: 15,
              B: 9,
              A: 3
            }
        ],
      }; //this.state
    } //constructor
};

export default YoPisteet;

/*Ylioppilaiden pistelaskurin pistemääräskaalat. Täältä valitaan aineen pituuden mukaan riippuvat pistemäärät.*/