import React from 'react';
import TrailContext from "../TrailContext";

function TrailName(){

    const {description} =useContext(TrailContext);

    return(

    <div className="form-group">
            <label>Description:{description}</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description} ///HOW DO I MANAGE THIS?
              onChange={this.onChangeDescription} //HOW DO I MANAGE THIS?
            />
    </div>
    );
}

export default TrailName; 


