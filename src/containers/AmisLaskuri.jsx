import React from 'react';
import AmisPisteet from '../models/AmisPisteet';
import useGlobal from '../store';

const AmisLaskuri = () => {
    if(AmisPisteet.radioKolme=true){
        AmisPisteet = useGlobal.keskiArvoKolme;
    }
    else{
        AmisPisteet = useGlobal.keskiArvoViisi;
    };
    
    return(
    <form>
    <div className="radio">
        <label>
            <input id="radioKolme"  name="radioKolme" type="radio" value="radioKolme"/>Arvosana-asteikko välillä 1-3
        </label>
    </div>
    <div className="radio">
        <label>
            <input id="radioViisi" name="radioViisi" type="radio" value="radioViisi"/>Arvosana-asteikko välillä 1-5
        </label>
    </div>
        <table>
            <tr>
                <th>Yhteiset tutkinnon osat</th>
                <th>Arvosana-asteikko</th>
            </tr>
            <tr>
                <td>Viestintä ja vuorovaikutusosaaminen</td>
                <td>Matemaattisluonnontiteteellinen osaaminen</td>
                <td>Yhteiskunta- ja työelämäosaaminen</td>
            </tr>
        </table>
        <div class="">
            <table>
                <tr>
                    <td>Keskiarvo asteikolla </td>
                    <td><input type="number" min="1" max="3" step="0.01" name="keskiArvoKolme" id="kolmonen" value="asteikkoKolme"/></td>
                </tr>
                <tr>
                    <td>Keskiarvo asteikolla </td>
                <td><input type="number" min="1" max="5" step="0.01" name="keskiarvoViisi" id="vitonen" value="asteikkoViisi"/></td>
                </tr>
            </table>
            <button type="button" id="btn" name="button" onclick="document.write(pisteet)">Näytä pisteet</button>
        </div>
        </form>
    );
};
export default AmisLaskuri;