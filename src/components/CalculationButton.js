import React from 'react';
import { connect } from 'react-redux';
import { updateCalculation } from '../actions';

const CalculationButtonComponent = props => {
  return (
    <button
      className={`calc-input ${props.additionalClass}`} 
      onClick={() => props.updateCalculation(props.value, props.calculation, props.result)}>
      {props.id ? String.fromCharCode(props.id) : props.value}
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult))
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculationButtonComponent);