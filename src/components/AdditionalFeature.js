import React from 'react';
import { connect } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = props => {
  console.log("AdditionalFeatures: props: ", props);
  
  const handleAddFeature = e => {
    e.preventDefault();
    if(props.features.some(feature => 
      feature.id === props.feature.id
      )) {
      console.log("Can't duplicate")
    } else {
      props.addFeature(props.feature);
    }
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAddFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);