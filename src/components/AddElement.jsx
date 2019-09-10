import React, {useState} from 'react';
import useGlobal from '../store';

const AddElement = () => {
    const [{state, setState}] = useState();
    state = {
        arvo:[{nimi:"", arvosana: "", value:"", selected:""}]
    }
}

export default AddElement;

/*Elementin lisäys listaan. Tämä lisää YoListasta valitun aineen nimen, arvosanan sekä saatavan pistemäärän listaan,
josta käyttäjä näkee, mitä on syötetty*/