import React, {useState} from 'react';
import useGlobal from '../store';

const AddElement = () => {
    const [{state, setState}] = useState();
    state = {
        arvo:[{nimi:"", value:""}]
    }
}