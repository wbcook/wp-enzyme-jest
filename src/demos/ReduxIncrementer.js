import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/redux-demo';
import { getValue } from '../app-reducer';

function ReduxIncrementer(props) {
  return (
    <div>
      <button className="btn btn-danger" onClick={props.decrement}>
        -
      </button>
      <span>&nbsp;{props.value}&nbsp;</span>
      <button className="btn btn-primary" onClick={props.increment}>
        +
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  value: getValue(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: actions.INCREMENT }),
  decrement: () => dispatch({ type: actions.DECREMENT }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxIncrementer);
