import React, { Component } from 'react'

export class PokeInfo extends Component {

  render() {
    console.log(this.props.data);
    const {pokedata, sprites, abilities, stats, types, failed} = this.props.data;
    // in case you submit with empty value.
    if (pokedata.length === 12) {
        return (
            <div className="infoCasing">
            <div className="infoLights">
                <div></div>
                <div></div>
            </div>
            <div className="infoScreen">
            <div>
              <h3 style={{textAlign: "center"}}>Please enter a pokemon name</h3>
              <ul style={{textAlign: "center", margin: 0, padding: 0}}>
               {pokedata.map((item, i) => {
                   return <li key={i.toString()}><strong>{item.name}</strong></li>
               })}
               <li><strong>etc...</strong></li>
              </ul>
            </div>
           </div>
           <div className="infoBottom">
             <div></div>
             <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
         </div>
        )
    } 
    // error check for non existant pokemon name.
    else if (failed === true) {
        return (
            <div className="infoCasing">
            <div className="infoLights">
                <div></div>
                <div></div>
            </div>
            <div className="infoScreen">
             <h3 style={{textAlign: "center"}}>Sorry, an error occured.</h3>
             <p>That name does not appear to be available to the API.</p>
             <p>Please try another name or check the spelling.</p>
             <p>API naming:</p>
             <p>mr.mime = mr-mime | farfetch'd = farfetchd</p>
            </div>
            <div className="infoBottom">
             <div></div>
             <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
         </div>
        )
    } 
    // working as intended functionality
    else {
    return (
     <div className="infoCasing">
      <div className="infoLights">
        <div></div>
        <div></div>
      </div>
      <div className="infoScreen">
        <div className="pokeTitle">{pokedata.name}</div>
        <hr />
        <div className="infoContent">
         <div className="pokeBodyTop">
          <div className="pokeId">id: #{pokedata.id}</div>
         
          <div className="pokeXp">Base Experience: {pokedata.base_experience}</div>
         </div>
         <img src={sprites.front_default} alt={pokedata.name + "'s sprite"} />
         <div className="pokeBodyMid">
            <div className="pokeStats">
              <strong>Stats:</strong>
              <ul>
                {stats.map((item, i) => {
                    return <li key={i.toString()}>{item.stat.name}: {item.base_stat}</li>
                })}
              </ul>
            </div>
            <div className="pokeTypes">
              <strong>Types:</strong>
              <ul>
                {types.map((item, i) => {
                    return <li key={i.toString()}>{item.type.name}</li>
                })}
              </ul>
              <br />
              <strong>Abilities:</strong>
              <ul>
                {abilities.map((item, i) => {
                    return <li key={i.toString()}>{item.ability.name}</li>
                })}
              </ul>
            </div>
            <div>
             <strong>Other:</strong>
              <ul>
                <li>weight: {pokedata.weight}</li>
                <li>height: {pokedata.height}</li>
              </ul>
            </div>
         </div>
        </div>

      </div>
      <div className="infoBottom">
        <div></div>
        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
      </div>
     </div>
    )
   }
  }
}

export default PokeInfo
