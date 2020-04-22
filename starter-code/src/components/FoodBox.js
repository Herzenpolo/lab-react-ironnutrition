import React, { Component } from "react";
import foods from '../foods.json'

class FoodBox extends Component {
  
boxes = () => {
    return this.props.foods.map((eachFood, index) => {
        return(
        <div className="box" key={eachFood.name}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={eachFood.image} alt={eachFood.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{eachFood.name} {index}</strong> <br />
                <small>{eachFood.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
        )
    })
}

    render() {
    return (
        <div>
            {this.boxes()}
        </div>
    );
  }
}

export default FoodBox;
