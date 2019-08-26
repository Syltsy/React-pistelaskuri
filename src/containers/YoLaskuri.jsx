import React from 'react';
import YoPisteet from '../models/YoPisteet';
import addElement from '../components/AddElement';

const YoLaskuri = () => {

    //<Dropdown title="Valitse aine" list={this.state.aine}/>
    return (
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
            <select id="arvosana" name="arvosana">
                <option value="this.state.YoPisteet.L">L</option>
                <option value="this.state.YoPisteet.E">E</option>
                <option value="this.state.YoPisteet.M">M</option>
                <option value="this.state.YoPisteet.C">C</option>
                <option value="this.state.YoPisteet.B">B</option>
                <option value="this.state.YoPisteet.A">A</option>
            </select>
  </div>
  <div>
  <button type="button" id="btn" name="button" onclick="addElement">Lisää</button>
  </div>
  </form>
  )
};
export default YoLaskuri;

/*constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }
  
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
  <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen
            ? <FontAwesome name="angle-up" size="2x"/>
            : <FontAwesome name="angle-down" size="2x"/>
          }
      </div>
  {listOpen && <ul className="dd-list">
         {list.map((item) => (
           <li className="dd-list-item" key={item.id} >{item.title}</li>
          ))}
        </ul>}
      </div>
    )
  }

*/