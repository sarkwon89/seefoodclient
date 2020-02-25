import React from 'react';
import './styles/BrandRec.css'


function BrandCard(props) {
  return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={props.image} alt=""/>
            </div>
           
            <div className="card-content">
              <h4>{props.brand}</h4>
              <hr />
              <h5>Price: {props.price}  (est)</h5>
            </div>
            <div className="card-action">
              <a href={props.url} target="_blank">Shop on Amazon</a>
            </div>
          </div>
        </div>
  )
}

export default BrandCard;