import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation } from './actions';
import CalculationButton from './components/CalculationButton';


const CalculatorComponent = props => {

  const replaceChars= value => {
    value = value.join("");
    value = value.replace(/\//g, '<span class="operatorStyle">÷</span>');
    value = value.replace(/\*/g, '<span class="operatorStyle">×</span>');
    value = value.replace(/\+/g, '<span class="operatorStyle">+</span>');
    value = value.replace(/-/g, '<span class="operatorStyle">-</span>');
    return value;
  };

  return (
      <div className='calculator'>
        <div className='calculator-results'>
          <div className='calculationDisplay' dangerouslySetInnerHTML={{ __html: props.calculation.length ? replaceChars(props.calculation) : 0 }} />
          <div  className='resultDisplay'>{props.result}</div>
        </div>
        
        <button className='clear' onClick={() => props.clearCalculation()}>Clear</button>
        <div className='calculator-inputs-row'>
          <CalculationButton value={7} />
          <CalculationButton value={8} />
          <CalculationButton value={9} />
          <CalculationButton value="/" id="247" additionalClass="operator" />
        </div>
        
        <div className='calculator-inputs-row'>
          <CalculationButton value={4} />
          <CalculationButton value={5} />
          <CalculationButton value={6} />
          <CalculationButton value='*' id="215" additionalClass="operator" />
        </div>
        <div className='calculator-inputs-row'>
          <CalculationButton value={1} />
          <CalculationButton value={2} />
          <CalculationButton value={3} />
          <CalculationButton value='-' id="8722" additionalClass="operator" />
        </div>
        <div className='calculator-inputs-row'>
          <CalculationButton value={0} additionalClass="zero" />
          <CalculationButton value='=' additionalClass="operator" />
          <CalculationButton value='+' id="43" additionalClass="operator" />
        </div>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorComponent);
