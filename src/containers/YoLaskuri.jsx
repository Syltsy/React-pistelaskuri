import React from 'react';
import YoPisteet from '../models/YoPisteet';
import addElement from '../components/AddElement';
import useGlobal from '../store';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return(
    <div>
    <NavLink to="AmisLaskuri">Ammattikoululaisten pistelaskuri</NavLink>
    <NavLink to="Home">Aloitussivu</NavLink>
  </div>
  );

}

const YoLaskuri = () => {
    
    return (
      //<Dropdown title="Valitse aine" list={this.state.aine}/>
    <form>
        <div>
            <select id="yolista" name="yolista">
                <option value="kieliP" name="Aid">Äidinkieli</option>
                <option value="mathP"  name="MatP">Matematiikka pitkä</option>
                <option value="mathL"  name="MatL">Matematiikka lyhyt</option>
                <option value="kieliP" name="KieP">Vieras/toinen kotimainen kieli pitkä</option>
                <option value="kieliK" name="KieK">Vieras/toinen kotimainen kieli keskipitkä</option>
                <option value="kieliL" name="KieL">Vieras/toinen kotimainen kieli lyhyt</option>
                <option value="muut"   name="Fys">Fysiikka</option>
                <option value="muut"   name="Kem">Kemia</option>
                <option value="muut"   name="Bio">Biologia</option>
                <option value="muut"   name="Geo">Maantiede</option>
                <option value="muut"   name="Ter">Terveystieto</option>
                <option value="muut"   name="Psy">Psykologia</option>
                <option value="muut"   name="Fil">Filosofia</option>
                <option value="muut"   name="His">Historia</option>
                <option value="muut"   name="Yht">Yhteiskuntaoppi</option>
                <option value="muut"   name="Usk">Uskonto/Elämäntieto</option>
                <option value="muut"   name="Vie">Vieraskieli(pitkä/lyhyt)</option>
                </select>
        </div>
        <div>
        <select id="arvosana" class="" name="arvosana">
      <option value="document.getElementById('display').innerHTML">L</option>
      <option value="document.getElementById('display').innerHTML">E</option>
      <option value="document.getElementById('display').innerHTML">M</option>
      <option value="document.getElementById('display').innerHTML">C</option>
      <option value="document.getElementById('display').innerHTML">B</option>
      <option value="document.getElementById('display').innerHTML">A</option>
    </select>
        </div>
 
  <div>
  <button type="button" id="btn" name="button" onclick={addElement}>Lisää</button>
  </div>
  </form>
          
  )
};
export default YoLaskuri;

/*Ylioppilaiden pistelaskuri. Lista valittavista aineista sekä mitä pistemääräskaalaa kyseinen aine käyttää =value-arvo listassa.
Arvosana-listasta valitaan kokeissa saatu arvosana. Napilla kutsutaan addElement-funktiota, joka hoitaa elementin lisyksen listaan.*/