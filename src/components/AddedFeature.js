import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from "../actions/index";


const AddedFeature = props => {

  const handleRemoveFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);