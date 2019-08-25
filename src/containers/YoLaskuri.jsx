import React from 'react';
import YoPisteet from '../models/YoPisteet';
import addElement from '../components/AddElement';

const YoLaskuri = () => {
    return (
    <form>
        <div>
            <select id="yolista" name="yolista">
                <option value="kieliP">Äidinkieli</option>
                <option value="mathP">Matematiikka pitkä</option>
                <option value="mathL">Matematiikka lyhyt</option>
                <option value="kieliP">Vieras/toinen kotimainen kieli pitkä</option>
                <option value="kieliK">Vieras/toinen kotimainen kieli keskipitkä</option>
                <option value="kieliL">Vieras/toinen kotimainen kieli lyhyt</option>
                <option value="muut">Fysiikka</option>
                <option value="muut">Kemia</option>
                <option value="muut">Biologia</option>
                <option value="muut">Maantiede</option>
                <option value="muut">Terveystieto</option>
                <option value="muut">Psykologia</option>
                <option value="muut">Filosofia</option>
                <option value="muut">Historia</option>
                <option value="muut">Yhteiskuntaoppi</option>
                <option value="muut">Uskonto/Elämäntieto</option>
                <option value="muut">Vieraskieli(pitkä/lyhyt)</option>
                </select>
        </div>

    <div>
            <select id="arvosana" name="arvosana">
                <option value="document.getElementById('display').innerHTML">L</option>
                <option value="document.getElementById('display').innerHTML">E</option>
                <option value="document.getElementById('display').innerHTML">M</option>
                <option value="document.getElementById('display').innerHTML">C</option>
                <option value="document.getElementById('display').innerHTML">B</option>
                <option value="document.getElementById('display').innerHTML">A</option>
            </select>
  </div>
  <div>
  <button type="button" id="btn" name="button" onclick="addElement">Lisää</button>
  </div>
  </form>
  )
};
export default YoLaskuri;