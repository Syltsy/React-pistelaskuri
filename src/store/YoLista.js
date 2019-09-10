class YoLista{   
    constructor(){
        super()
        this.state = {
          aine: [
            {
                id: 0,
                title: 'Äidinkieli',
                value: 'kieliP',
                selected: false,
                key: 'aine'
            },
            {
                id: 1,
                title: 'Matematiikka pitkä',
                value: 'mathP',
                selected: false,
                key: 'aine'
            },
            {
                id: 2,
                title: 'Matematiikka lyhyt',
                value: 'mathL',
                selected: false,
                key: 'aine'
            },
            {
                id: 3,
                title: 'Vieras/toinen kotimainen kieli pitkä',
                value: 'kieliP',
                selected: false,
                key: 'aine'
            },
            {
                id: 4,
                title: 'Vieras/toinen kotimainen kieli keskipitkä',
                value: 'kieliK',
                selected: false,
                key: 'aine'
            },
            {
                id: 5,
                title: 'Vieras/toinen kotimainen kieli lyhyt',
                value: 'kieliL',
                selected: false,
                key: 'aine'
            },
            {
                id: 6,
                title: 'Ainereaali: Fysiikka',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 7,
                title: 'Ainereaali: Kemia',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 8,
                title: 'Ainereaali: Biologia',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 9,
                title: 'Ainereaali: Maantiede',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 10,
                title: 'Ainereaali: Terveystieto',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 11,
                title: 'Ainereaali: Psykologia',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 12,
                title: 'Ainereaali: Filosofia',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 13,
                title: 'Ainereaali: Historia',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 14,
                title: 'Ainereaali: Yhteiskuntaoppi',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 15,
                title: 'Ainereaali: Uskonto/Elämäntieto',
                value: 'muut',
                selected: false,
                key: 'aine'
            },
            {
                id: 16,
                title: 'Vieraskieli(pitkä/lyhyt)',
                value: 'muut',
                selected: false,
                key: 'aine'
            }
          ]
        }
      }
}
export default YoLista;

/*Ylioppilaiden pistelaskurin YoLista-elementti.
selected-arvoa tarvitaan -> Vieras/toinen kotimainen kieli -kohdassa huomioidaan kielten arvosanoista se, joka tuottaa kyseisessä kohdassa parhaat pisteet
value-arvo kertoo, mitä pisteskaalaa käytetään.*/